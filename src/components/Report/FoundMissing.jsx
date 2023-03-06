import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Header from "../Layout/Header/Header";
import "./FoundMissing.scss";

const FoundMissing = () => {
  return (
    <div>
      <Header />
      <div className="report">
        <div className="report_head">
          <h1>Register Found Person Report</h1>
          <p>
            Register your complaint here. Please fill out the form below and we
            will try our best to help you as soon as possible.
          </p>
          <div className="search_btn">
            <select name="Filter" id="" value="Filter">
              <option value="name">Filter</option>
              <option value="age">Name</option>
              <option value="age">Age</option>
            </select>
            <input
              type="search"
              name="search"
              id=""
              placeholder="Search Missing Person"
            />
            <BiSearchAlt />
          </div>
        </div>
        <div className="fill_form"></div>
      </div>
    </div>
  );
};

export default FoundMissing;
