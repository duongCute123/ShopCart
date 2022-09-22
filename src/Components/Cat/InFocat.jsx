import React from "react";
import UseFetch from "../Configapi/Configapi";
import ImageCat from "./ImageCat";
import '../../module.css/Infocat.css'
import { useState } from "react";
import axios from "axios";
const Cats = ({ cats: { name, description, temperament } }) => {
    return (
        <div className="row" id="hello">
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
    const [query, setQuery] = useState("")
    const [result, setResult] = useState([])

    const tk = (e) => {
        setQuery(e.target.value)
        fetch(`https://api.thecatapi.com/v1/images/search?breed_id=abys&query=${e.target.value}`)
            .then((res) => res.json())
            .then((data) => console.log(data))
    }
    const url = "https://api.thecatapi.com/v1/breeds"
    const data = UseFetch(url)
    return (
        <div className="row">
            <div className="col-sm-12">
                <label htmlFor="">Nhập từ cần tìm kiếm</label> <br />
                <input type="text" placeholder="Nhập từ cần tìm kiếm vào" name="query" value={query} onChange={tk} />
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