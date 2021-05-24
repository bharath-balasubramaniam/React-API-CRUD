/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Product_Edit(props) {
  let [name, setname] = useState("");
  let [price, setprice] = useState("");
  let [author, setauthor] = useState("");
  let [availability, setavailability] = useState("");
  let [publication, setpublication] = useState("");
  let history = useHistory();
  useEffect(async () => {
    let product = await fetch(
      `https://60a7c6ac8532520017ae4f90.mockapi.io/product_list/${props.match.params.id}`
    );
    let productdata = await product.json();
    setname(productdata.name);
    setprice(productdata.price);
    setauthor(productdata.author);
    setavailability(productdata.availability);
    setpublication(productdata.publication);
  }, []);
  let resubmit = async (e) => {
    e.preventDefault();
    await fetch(
      `https://60a7c6ac8532520017ae4f90.mockapi.io/product_list/${props.match.params.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name,
          price,
          author,
          availability,
          publication,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    history.push("/components/dashboard");
  };
  let deleteproduct = async () => {
    await fetch(
      `https://60a7c6ac8532520017ae4f90.mockapi.io/product_list/${props.match.params.id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    history.push("/components/dashboard");
  };
  return (
    <>
      <div className="container">
        <form onSubmit={resubmit}>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <h2>Product form Form</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Author</label>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={(e) => setauthor(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <label>Availability</label>
              <input
                type="text"
                className="form-control"
                value={availability}
                onChange={(e) => setavailability(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Publication</label>
              <input
                type="text"
                className="form-control"
                value={publication}
                onChange={(e) => setpublication(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <button
                className="btn btn-info mt-5"
                id="user_reg"
                style={{ marginTop: 0 + "px" }}
              >
                Submit!
              </button>
            </div>
            <div className="col-lg-6">
              <button
                className="btn btn-danger mt-5"
                id="user_reg"
                style={{ marginTop: 0 + "px" }}
                onClick={deleteproduct}
              >
                Delete!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Product_Edit;
