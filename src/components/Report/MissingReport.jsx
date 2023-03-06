import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Header from "../Layout/Header/Header";
import "./MissingReport.scss";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function Report() {
  const genderValue = ["Specify Gender", "Male", "Female", "Custom"];
  return (
    <div>
      <Header />
      <div className="report">
        <div className="report_head">
          <h1>Register Lost Person Report</h1>
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
        <div className="fill_form">
          <div className="form_div">
            <h2>Fill The Basic Details of Lost Person</h2>

            <form action="">
              <p>Full Name</p>
              <input type="text" name="name" id="" required />

              <p>Age</p>
              <input type="text" name="age" id="" required />

              <div className="place_1">
                <div className="gender">
                  <p>Gender</p>
                  <div className="gender_input">
                    <select
                      name="gender"
                      id="gender"
                      required
                      // value={gender}
                      // onChange={(e) => setGender(e.target.value)}
                    >
                      {genderValue.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mobile">
                  <div className="tool">
                    <p>Mobile Number</p>
                    <span className="tooltip">
                      <AiOutlineExclamationCircle />
                      <span>
                        Please enter a valid mobile number. So we can contact
                        you in case of any emergency.
                      </span>
                    </span>
                  </div>
                  <input type="number" name="mobile" id="" required />
                </div>

                <div className="adhaar">
                  <div className="tool">
                    <p>Addhar Number</p>
                    <span className="tooltip">
                      <AiOutlineExclamationCircle />
                      <span>
                        Please enter adhaar number of the person. We care about
                        your Privacy and we will not share your details with
                        anyone. This is for the searching missing Person.
                      </span>
                    </span>
                  </div>
                  <input type="number" name="adhar" id="" required />
                </div>

                <div className="height">
                  <p>Height</p>
                  <input type="text" name="height" id="" required />
                </div>
              </div>

              <p>Address</p>
              <input type="text" name="address" id="" required />

              <div className="place_2">
                <div>
                  <p>State</p>
                  <input type="text" name="state" id="" required />
                </div>

                <div>
                  <p>City</p>
                  <input type="text" name="city" id="" required />
                </div>

                <div>
                  <p>PinCode</p>
                  <input type="text" name="city" id="" required />
                </div>
              </div>

              <p>Incident Place(Place from where he lost)</p>
              <input type="text" name="place" id="" required />

              <div className="place_3">
                <div className="date">
                  <p>Incident Date</p>
                  <input type="date" name="date" id="" required />
                </div>

                <div className="time">
                  <p>Incident Time</p>
                  <input type="time" name="time" id="" required />
                </div>
              </div>

              <p>Incident Description</p>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="10"
                required
              ></textarea>

              <p>Upload Image</p>
              <input type="file" name="image" id="" multiple required />

              <div className="btn">
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
              </div>
            </form>
          </div>
          <div className="serch_div">
            <h2>Search Lost Person</h2>

            <div className="search_btn">
              <input
                type="search"
                name="search"
                id=""
                placeholder="Search by Name"
              />
              <BiSearchAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Report;
