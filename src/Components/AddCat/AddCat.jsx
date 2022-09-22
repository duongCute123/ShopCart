import React from "react";
import { useState } from "react";
const AddCat=()=>{
    return(
        <div className="">
            <h1>Trang thêm sản phẩm vào nhá</h1>
            <div class="container">
                <form>
                    <div class="form-group row">
                        <label for="inputName" class="col-sm-1-12 col-form-label"></label>
                        <div class="col-sm-1-12">
                            <input type="text" class="form-control" name="inputName" id="inputName" placeholder=""/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="offset-sm-2 col-sm-10">
                            <button type="submit" class="btn btn-primary">Action</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddCat