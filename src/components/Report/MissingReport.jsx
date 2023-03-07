import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Header from "../Layout/Header/Header";
import "./MissingReport.scss";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlineReportProblem } from "react-icons/md";

function Report() {
  const [display, setDisplay] = useState(0);
  const [checked, setChecked] = useState(false);

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
          {display === 0 && (
            <div className="form_div">
              <div className="section">
                <h2 className="attention">
                  <MdOutlineReportProblem /> Attention
                </h2>
                <p>
                  If you want to Register a complaint of Lost/Missing person,
                  you have to provide all the basic details of the person. Also
                  you have to provide all the information of yourself which is
                  being asked in the form so that we can contact you in case of
                  any emergency. So that we can help you in finding the Lost
                  person.
                </p>
                <p className="para_m">
                  As per the Indian Law, you have to provide all the details of
                  the person you have found along with yourself which is being
                  asked.
                </p>

                <div className="aggre">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onChange={(e) => {
                      setChecked(e.target.checked);
                      // setDisplay(1);
                    }}
                  />
                  <span>
                    I agree to the terms and conditions as mentioned above.
                  </span>
                </div>
                <div className="button">
                  {checked ? (
                    <button
                      className="btn"
                      type="button"
                      onClick={() => setDisplay(1)}
                    >
                      Proceed to fill the form
                    </button>
                  ) : (
                    <button className="btn-disabled" type="button">
                      Proceed to fill the form
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
          {display === 1 && (
            <div className="form_div">
              <h2>Fill The Basic Details of Lost Person</h2>

              <form action="">
                <p>Full Name</p>
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  placeholder="Full Name of Lost Person"
                />

                <p>Age</p>
                <input
                  type="text"
                  name="age"
                  id=""
                  required
                  placeholder="Age Eg: 10years 5months"
                />

                <div className="place_1">
                  <div className="gender">
                    <p>Gender</p>
                    <div style={{ width: "100%" }} className="gender_input">
                      <select
                        name="gender"
                        id="gender"
                        required
                        style={{ width: "100%" }}
                        // value={gender}
                        // onChange={(e) => setGender(e.target.value)}
                      >
                        {genderValue.map((value, index) => (
                          <option
                            key={index}
                            value={value}
                            onChange={(e) => e.target.value}
                          >
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="height">
                    <p>Height</p>
                    <input
                      type="text"
                      name="height"
                      id=""
                      required
                      placeholder="Approx Height"
                    />
                  </div>
                </div>

                <div className="place_1">
                  <div className="mobile">
                    <div className="tool">
                      <p>Mobile Number</p>
                      <span className="tooltip">
                        <AiOutlineExclamationCircle />
                        <span>
                          If the Lost Person is having a mobile phone, please
                          enter vaild mobile number. So that we can try trace
                          and contact the person.
                        </span>
                      </span>
                    </div>
                    <input
                      type="number"
                      name="mobile"
                      id=""
                      required
                      placeholder="Mobile Number of Lost Person"
                    />
                  </div>

                  <div className="adhaar">
                    <div className="tool">
                      <p>Aadhar Number</p>
                      <span className="tooltip">
                        <AiOutlineExclamationCircle />
                        <span>
                          Please enter adhaar number of the person. We care
                          about your Privacy and we will not share your details
                          with anyone. This is for the searching missing Person.
                        </span>
                      </span>
                    </div>
                    <input
                      type="number"
                      name="aadhar"
                      id=""
                      required
                      placeholder="Aadhar of Lost Person"
                    />
                  </div>
                </div>

                <p>Address</p>
                <input
                  type="text"
                  name="address"
                  id=""
                  required
                  placeholder="Address of Lost Person"
                />

                <div className="place_2">
                  <div>
                    <p>State</p>
                    <input
                      type="text"
                      name="state"
                      id=""
                      required
                      placeholder="State"
                    />
                  </div>

                  <div>
                    <p>City</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      required
                      placeholder="City"
                    />
                  </div>

                  <div>
                    <p>PinCode</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      required
                      placeholder="PinCode"
                    />
                  </div>
                </div>

                <p>Incident Place(Place from where he/She lost)</p>
                <input
                  type="text"
                  name="place"
                  id=""
                  required
                  placeholder="Place from where he/She lost"
                />

                <div className="place_3">
                  <div className="date">
                    <p>Incident Date</p>
                    <input
                      type="date"
                      name="date"
                      id=""
                      required
                      placeholder="Date of Missing"
                    />
                  </div>

                  <div className="time">
                    <p>Incident Time</p>
                    <input
                      type="time"
                      name="time"
                      id=""
                      required
                      placeholder="Time of Missing"
                    />
                  </div>
                </div>

                <p>Incident Description</p>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                  required
                  placeholder="Please describe the incident in detail."
                ></textarea>

                <p>Upload Image</p>
                <input type="file" name="image" id="" multiple required />

                <div className="btn">
                  <button type="submit" onClick={() => setDisplay(2)}>
                    Next
                  </button>
                  <button type="reset">Cancel</button>
                </div>
              </form>
            </div>
          )}
          {display === 2 && (
            <div className="form_div">
              <h2>Basic Details of Person Registering Complaint</h2>

              <form action="">
                <p>Full Name</p>
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  placeholder="Full Name of Lost Person"
                />

                <div className="place_1">
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
                    <input
                      type="number"
                      name="mobile"
                      id=""
                      required
                      placeholder="Your Mobile Number"
                    />
                  </div>
                  <div className="adhaar">
                    <div className="tool">
                      <p>Aadhar Number</p>
                      <span className="tooltip">
                        <AiOutlineExclamationCircle />
                        <span>
                          Please enter your aadhar number. We care about your
                          Privacy and we will not share your details with
                          anyone.
                        </span>
                      </span>
                    </div>
                    <input
                      type="number"
                      name="adhar"
                      id=""
                      required
                      placeholder="XXXX-XXXX-XXXX"
                    />
                  </div>
                </div>

                <p>Address</p>
                <input
                  type="text"
                  name="address"
                  id=""
                  required
                  placeholder="Your Address"
                />

                <div className="place_2">
                  <div>
                    <p>State</p>
                    <input
                      type="text"
                      name="state"
                      id=""
                      required
                      placeholder="Your State"
                    />
                  </div>

                  <div>
                    <p>City</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      required
                      placeholder="Your City"
                    />
                  </div>

                  <div>
                    <p>PinCode</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      required
                      placeholder="Your PinCode"
                    />
                  </div>
                </div>

                <div className="btn">
                  <button type="submit">Submit</button>
                  <button type="reset">Cancel</button>
                </div>
              </form>
            </div>
          )}
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
