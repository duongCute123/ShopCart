import React from "react";
import { useState } from "react";
import cat1 from "../../image/9-cute-cats-thumb.jpg"
import cat2 from "../../image/30-cute-cats-thumb.jpg"
import "../../module.css/SlideCourse.css"
import cat3 from "../../image/cat_presentation_powerpoint_templates_design_274007.jpg"
import AddCat from "../AddCat/AddCat";
const SlideCourse = () => {
    return (
        <div id="carouselId" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img src={cat1} alt="First slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Cat Vip 1</h3>
                        <p>Mèo Vip Pro One</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={cat2} alt="Second slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Cat Vip 2</h3>
                        <p>Mèo Vip Pro Two</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={cat3} alt="Third slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h3 >Cat Vip 3</h3>
                        <p>Mèo Vip Pro Three</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}
export default SlideCourse