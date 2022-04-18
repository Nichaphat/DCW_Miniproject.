import Layout from "../components/layout";
import Navbar from "../components/navbar";
import AuthProducts from "../components/AuthPruduct";
import Styles from "../styles/Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import config from "../config/config";
import Image from "next/image";
import Router from "next/router";

const URL = `${config.URL}/products`;
const Products = ({ token }) => {
  const [products, setProducts] = useState({
    list: [{ id: 1, name: "Foo", numberproduct: 20 }],
  });
  const [name, setname] = useState("");
  const [numberproduct, setnumberproduct] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let product = await axios.get(`${config.URL}/products`);
    setProducts(product.data);
  };

  const updateProducts = async (id) => {
    let product = await axios.put(`${URL}/${id}`, {
      name,
      numberproduct,
    });
    setProducts(product.data);
  };

  const deleteProducts = async (id) => {
    let product = await axios.delete(`${URL}/${id}`);
    setProducts(product.data);
  };

  const addProducts = async (name, numberproduct) => {
    let product = await axios.post(
      `${config.URL}/products`,

      { name, numberproduct }
    );
    setProducts(product.data);
  };

  const printProducts = () => {
    if (products.list && products.list.length)
      return products.list.map((item, index) => (
        <div key={index}>
          <br></br>
          <div className={Styles.image}>
            <Image src="/book_davin.jpg" width={300} height={200} />
            <br></br>
            <br></br>
          </div>
          name: {item.name}
          number: {item.numberproduct}
          <br></br> <br></br> <br></br>
          <div>
            <button
              className={Styles.buttonproductupdate}
              onClick={() => updateProducts(item.id)}
            >
              Update
            </button>
            <button
              className={Styles.buttonproductdelete}
              onClick={() => deleteProducts(item.id)}
            >
              Delete
            </button>
            <button
              className={Styles.buttonproductby}
              onClick={() => handleClickIndex()}
            >
              Place an order
            </button>
          </div>
        </div>
      ));
  };
  const handleClickIndex = () =>
    Router.push({
      pathname: "/paymentbook_davin",
    });

  return (
    <Layout>
      <Navbar />

      <div class="flex justify-center ...">
        <div class="H-20 w-30 rounded overflow-hidden shadow-lg">
          {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
          <div class="px-6 py-4">
            <div class="px-6 pt-4 pb-2">
              <div class="w-42 H-20 ">
                <p class="text-gray-700 text-base font-bold text-center mb-2">
                  Add Product
                </p>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="product name"
                  type="text"
                  placeholder="product name"
                  onChange={(e) => setname(e.target.value)}
                ></input>

                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="text"
                  placeholder="number"
                  onChange={(e) => setnumberproduct(e.target.value)}
                ></input>

                <br></br>

                <ul>{printProducts()}</ul>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AuthProducts(Products);

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.token || "" } };
}
