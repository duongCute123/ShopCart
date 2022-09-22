import React from "react";
import { useState } from "react";
const AddCat = () => {
    const list = {
        namecat: '',
        desscription: '',
        gia: '',
        anh: '',
        countrys: ''
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
    const stodata = JSON.parse(localStorage.getItem('stores'))
    const [forms, setData] = useState(list)
    const [stores, setStore] = useState(stodata ?? [])
    const change = (e) => {
        const { name, value, type, checked } = e.target
        if (type === 'file') {
            setData({ ...forms, [name]: e.target.files[0] })
        } else {
            setData({ ...forms, [name]: value })
        }
    }
    const submit = (e) => {
        setStore(pre => {
            const datas = [...pre, forms]
            const jsonstore = JSON.stringify(datas)
            localStorage.setItem('stores', jsonstore)
            return datas
        })
    }
    const { namecat, desscription, gia, anh, countrys } = forms
    return (
        <div className="">
            <h1>Trang thêm sản phẩm vào nhá</h1>
            <form action="" method="post">
                <label htmlFor="">Nhập tên của mèo</label> <br />
                <input type="text" name="namecat" value={namecat} onChange={change} placeholder="Nhập tên của mèo" id="" /> <br />
                <label htmlFor="">Chọn hình ảnh của mèo</label> <br />
                <input type="file" name="anh" onChange={change} placeholder="Chọn hình ảnh của mèo" id="" /> <br />
                <label htmlFor="">Nhập thông tin cần thiết của mèo</label> <br />
                <textarea placeholder="Nhập thông tin của mèo" name="desscription" value={desscription} rows={10} cols={120} onChange={change} /> <br />
                <label htmlFor="">Nhập giá mèo</label> <br />
                <input type="text" name="gia" value={gia} id="" onChange={change} /> <br />
                <label htmlFor="">Chọn quốc gia</label> <br />
                <select name="countrys" value={countrys} id="" onChange={change}>
                    {
                        country.map((country) => (
                            <option value={country.value}>{country.label}</option>
                        ))
                    }
                </select>
                <label htmlFor=""></label> <br />
                <input type="button" value="ADD CAT" onClick={submit} />
            </form>
        </div>
    )
}
export default AddCat