import React, { useState } from "react";
import "./index.css";
import logo from "./logo.jpg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Navbar() {
  const [cartVisible, setCartVisible] = useState(false);
  function Cart() {
    return (
      <>
        <div class="cartTab">
          <h1>Shopping Cart</h1>

          <div class="listCart">
            <div class="item">
              <div class="description">
                <p class="name">Name</p>
                <p class="amount">700$</p>
                <p>Size</p>
                <div class="size_div">
                  <div class="size">M</div>
                  <div class="size">L</div>
                  <div class="size">XL</div>
                </div>
                <p> Color</p>
                <div class="color_div">
                  <div class="color"></div>
                  <div class="color"></div>
                  <div class="color"></div>
                </div>
              </div>
              <div class="quantity">
                <div class="plus">+</div>
                <div>1</div>
                <div class="minus">-</div>
              </div>
              <div class="image">
                <img src="svg/Product A.png" alt="" />
              </div>
            </div>
          </div>
          <div class="totil">
            <div class="totalAmount">0</div>
          </div>
          <div class="btn">
            <button class="bag">VIEW BAG</button>
            <button class="checkOut">CHECK OUT</button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="navbar">
        <div className="left_side_nav">
          <a href="" className="tech">
            Tech
          </a>
          <a href="" className="clothes">
            Clothes
          </a>
          <a href="" className="clothes">
            Clothes
          </a>
        </div>
        <img src={logo} alt="" style={{ width: "30px", height: "30px" }} />
        <div className="right_side_nav">
          <select id="money">
            <option value="USD" selected>
              USD $
            </option>
            <option value="GBP">GBP £</option>
            <option value="AUD">AUD A$</option>
            <option value="JPY">JPY ¥</option>
          </select>

          <div onClick={() => setCartVisible(!cartVisible)}>
            <ShoppingCartOutlinedIcon />
          </div>
          <div class="icon-cart">
            <span>0</span>
          </div>
        </div>
      </div>
      {cartVisible && <Cart />}
    </>
  );
}

export default Navbar;
