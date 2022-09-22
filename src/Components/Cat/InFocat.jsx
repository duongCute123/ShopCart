import React from "react";
import UseFetch from "../Configapi/Configapi";
import ImageCat from "./ImageCat";
import '../../module.css/Infocat.css'
const Cats = ({ cats: { name, description, temperament } }) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <ImageCat />
                <h2>{name.toUpperCase()}</h2>
                <p>{description}</p>
                <p>{temperament}</p>
            </div>
        </div>
    )
}
const CallCat = () => {
    const url = "https://api.thecatapi.com/v1/breeds"
    const data = UseFetch(url)
    return (
        <div className="row">
            <div className="col-sm-12">
                {
                    data.map((cats) => (
                        <Cats cats={cats} />
                    ))
                }
            </div>
        </div>
    )
}
export default CallCat