import UseFetch from "../Configapi/Configapi";
import React, { useState } from "react";
import axios from "axios";
const Cat = ({ cat: { url } }) => {
    return (
        <div className="cat">
            <img src={url} alt="duong" />
        </div>
    )
}
const ImageCat = (e) => {
    const URL = "https://api.thecatapi.com/v1/images/search?breed_id=abys"
    const data = UseFetch(URL)
    return (
        <div className="imagecat">
            {
                data.map((cat) => (
                    <Cat cat={cat} />
                ))
            }
        </div>
    )
}
export default ImageCat