import React from "react";
import { useState } from "react";
const AddCat = () => {
    const list = {
        namecat: '',
        desscription: '',
        gia: '',
        anh: '',
        country: ''
    }
    const country = [
        {
            value: "",
            label: "----Vui lòng chọn quốc gia----"
        },
        {
            label: "Việt Nam",
            value: "Việt Nam"
        },
        {
            label: "Thanh Hóa",
            value: "Thanh Hoa"
        },
        {
            label: "Sài Gòn",
            value: "Sài Gòn"
        },
        {
            label: "Hà Nội",
            value: "Hà Nội"
        }
    ]
    return (
        <div className="">
            <h1>Trang thêm sản phẩm vào nhá</h1>
            <form action="" method="post">
                <label htmlFor="">Nhập tên của mèo</label> <br />
                <input type="text" name="" placeholder="Nhập tên của mèo" id="" /> <br />
                <label htmlFor="">Chọn hình ảnh của mèo</label> <br />
                <input type="file" name="" placeholder="Chọn hình ảnh của mèo" id="" /> <br />
                <label htmlFor="">Nhập thông tin cần thiết của mèo</label> <br />
                <textarea placeholder="Nhập thông tin của mèo" rows={10} cols={120} /> <br />
                <label htmlFor="">Nhập giá mèo</label> <br />
                <input type="text" name="" id="" /> <br />
                <label htmlFor="">Chọn quốc gia</label> <br />
                <select name="" id="">
                    {
                        country.map((country) => (
                            <option value={country.value}>{country.label}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )
}
export default AddCat