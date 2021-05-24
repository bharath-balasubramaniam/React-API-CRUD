import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";
export default function User_Create() {
  let [name, setname] = useState("");
  let [position, setposition] = useState("");
  let [office, setoffice] = useState("");
  let [age, setage] = useState("");
  let [startdate, setstartdate] = useState("");
  let [salary, setsalary] = useState("");
  let userdata = useContext(UserContext);
  let history = useHistory();
  let userSubmit = async (e) => {
    e.preventDefault();
    // console.log({ name, position, office, age, date, salary });
    userdata.setuserlist([
      ...userdata.userlist,
      { name, position, office, age, startdate, salary },
    ]);
    history.push("/components/dashboard");
    await fetch("https://60a7c6ac8532520017ae4f90.mockapi.io/user_list", {
      method: "POST",
      body: JSON.stringify({ name, position, office, age, startdate, salary }),
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  // useEffect(() => {
  //   console.log("Destroy started");
  //   return () => {
  //     console.log("destroyed");
  //   };
  // }, []);
  // useEffect(() => {
  //   console.log("during the props change");
  // }, [name]);
  return (
    <>
      <div className="container">
        <form onSubmit={userSubmit}>
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
                value={startdate}
                onChange={(e) => setstartdate(e.target.value)}
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
