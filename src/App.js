import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./admin-2.css";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./components/Topbar";
import Users from "./Users";
import User_Create from "./User_Create";
import User_Edit from "./User_Edit";
import Logout from "./Logout_modal";
import { UserProvider } from "./UserContext";
import Products from "./Products";
import Products_Create from "./Products_Create";
import { ProductProvider } from "./ProductsContext";
import Product_Edit from "./Product_Edit";
export default function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <UserProvider>
            <Sidebar></Sidebar>
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Topbar></Topbar>

                <div className="container-fluid">
                  <ProductProvider>
                    <Switch>
                      <Route
                        path="/"
                        component={Dashboard}
                        exact={true}
                      ></Route>
                      <Route
                        path="/components/Dashboard"
                        component={Dashboard}
                        exact={true}
                      ></Route>
                      <Route
                        path="/components/Users"
                        component={Users}
                        exact={true}
                      ></Route>
                      <Route
                        path="/components/User_Create"
                        component={User_Create}
                        exact={true}
                      ></Route>
                      <Route
                        path="/components/User_Edit/:id"
                        component={User_Edit}
                      ></Route>
                      <Route
                        path="/Products"
                        component={Products}
                        exact={true}
                      ></Route>
                      <Route
                        path="/Products/Create"
                        component={Products_Create}
                        exact={true}
                      ></Route>
                      <Route
                        path="/components/Product_Edit/:id"
                        component={Product_Edit}
                        exact={true}
                      ></Route>
                    </Switch>
                  </ProductProvider>
                </div>
              </div>
              <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                  <div className="copyright text-center my-auto">
                    <span>Copyright &copy; Be We Website 2021</span>
                  </div>
                </div>
              </footer>
            </div>
          </UserProvider>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
        <Logout></Logout>
      </Router>
    </>
  );
}
