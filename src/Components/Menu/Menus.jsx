import React from "react";
import { BrowserRouter, Router, Routes, Route, NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Hello from "../Homepage/Homepage";
import AddCat from "../AddCat/AddCat";
import '../../module.css/Menus.css'
import SlideCourse from "../SlideShow/SlideCourse";
const Navbar = () => (
    <nav id="navs" class="navbar navbar-expand-sm navbar-dark" style={{top:"0px"}}>
        <a class="navbar-brand" href="#">Shop Cat</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Quản Lý</a>
                    <div class="dropdown-menu" aria-labelledby="dropdownId">
                        <a class="dropdown-item" href="/addcat">Thêm cat</a>
                        <a class="dropdown-item" href="/news">Thêm tin tức</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Nhập mèo cần tìm kiếm" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Tìm Kiếm</button>
            </form>
        </div>
    </nav>
)
const Menus = () => {
    return (
        <div className="">
            <BrowserRouter>
                <Navbar />
                <SlideCourse/>
                <Routes>
                    <Route path="/" element={<AddCat />} />
                    <Route path="/contact" element={<AddCat />} />
                    <Route path="/suport" element={<AddCat />} />
                    <Route path="/news" element={<AddCat />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Menus
