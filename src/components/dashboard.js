import React from "react";
import "./dashboard.css";
// import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  // const { user, logoutUser } = useUserContext();
  return (
    <div className="dashboard-container">
      {/* <h1>BlockCase Dashboard </h1>
      <h1>Profile </h1>
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2> */}
      {/* <button onClick={logoutUser}>Log out</button> */}
      <div className="card-container">
        <div className="Cardnavbar">
          <h3>My Assets</h3>

          <button className="btn-addcard">Add Card</button>
        </div>
        <div className="card-body">
          <div className="card-item1"></div>
          <div className="card-item2"></div>

          <div className="card-item1"></div>
          <div className="card-item2"></div>
        </div>
      </div>

      <div className="bottom-container">
        <div className="pie-container"></div>

        <div className="overall-container">
          <div className="overall-item1">
            <div className="asset-container balance"></div>
            <div className="asset-container spending"></div>
          </div>

          <div className="overall-item2">
            <div className="asset-container saved"></div>
            <div className="asset-container netgross"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
