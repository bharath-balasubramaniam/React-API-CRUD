/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export default function User_Edit(props) {
  let [name, setname] = useState("");
  let [position, setposition] = useState("");
  let [office, setoffice] = useState("");
  let [age, setage] = useState("");
  let [date, setdate] = useState("");
  let [salary, setsalary] = useState("");
  let history = useHistory();
  useEffect(async () => {
    let user = await fetch(
      `https://60a7c6ac8532520017ae4f90.mockapi.io/user_list/${props.match.params.id}`
    );
    let userdata = await user.json();
    setname(userdata.name);
    setposition(userdata.position);
    setoffice(userdata.office);
    setage(userdata.age);
    setdate(userdata.startdate);
    setsalary(userdata.salary);
  }, []);
  let resubmit = async (e) => {
    e.preventDefault();
    await fetch(
      `https://60a7c6ac8532520017ae4f90.mockapi.io/user_list/${props.match.params.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name,
          position,
          office,
          age,
          date,
          salary,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    history.push("/components/dashboard");
  };
  let deleteuser = async () => {
    await fetch(
      `https://60a7c6ac8532520017ae4f90.mockapi.io/user_list/${props.match.params.id}`,
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
      <h1>User Edit {props.match.params.id}</h1>
      <div className="container">
        <form onSubmit={resubmit}>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <h2>User Form</h2>
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
              <label>Position</label>
              <input
                type="text"
                className="form-control"
                value={position}
                onChange={(e) => setposition(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Office</label>
              <input
                type="text"
                className="form-control"
                value={office}
                onChange={(e) => setoffice(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <label>age</label>
              <input
                type="number"
                maxLength="2"
                className="form-control"
                value={age}
                onChange={(e) => setage(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <label>Date</label>
              <input
                type="month"
                className="form-control"
                value={date}
                onChange={(e) => setdate(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <label>salary</label>
              <input
                type="text"
                className="form-control"
                value={salary}
                onChange={(e) => setsalary(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <button className="btn btn-primary mt-5" id="user_reg">
                  Submit!
                </button>
              </div>
              <div className="col-lg-6">
                <button
                  className="btn btn-danger mt-5"
                  id="user_reg"
                  onClick={deleteuser}
                >
                  Delete!!
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
