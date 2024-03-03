import React, { useState, useEffect } from "react";
import {  ShoppingCartOutlined } from "@mui/icons-material";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="flex justify-center my-10 ">
        <div className="grid lg:grid-cols-3 gap-10  ">
          {products.map((product) => (
            <div className=" border-solid flex-col items-center justify-between border-2 rounded-lg border-slate-300 w-80 shadow-lg shadow-slate-400">
              <div
                className="card h-90 flex-col items-center justify-around text-center p-4 "
                key={product.id}
              >
                <div className="flex justify-center">
                  <img
                    className="cobject-contain h-64 w-64 my-5"
                    src={product.image}
                  ></img>
                </div>
                <div className="card-body">
                  <h3 className="card-title mb-0">{product.title}</h3>

                  <div className="flex justify-around my-5">
                    <p className="card-text "> ${product.price}</p>
                    <ShoppingCartOutlined className=" text-slate-900 rounded-lg  " />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
