import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Header from "../Layout/Header/Header";
import "./FoundMissing.scss";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlineReportProblem } from "react-icons/md";

const FoundMissing = () => {
  const genderValue = ["Specify Gender", "Male", "Female", "Custom"];
  const [display, setDisplay] = useState(0);
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Header />
      <div className="report">
        <div className="report_head">
          <h1>Found Person Details </h1>
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
                  If you have found a Lost/Missing person, you have to provide
                  all the basic details of the person. Also you have to provide
                  all the information of yourself which is being asked in the
                  form so that we can contact you in case of any emergency. So
                  that we can help you in finding the Lost person.
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
              <h2>Fill The Basic Details of Found Person</h2>

              <form action="">
                <p>Full Name(If he/she tells You)</p>
                <input type="text" name="name" id="" placeholder="Full Name" />

                <p>Age(Approx Age)</p>
                <input
                  type="text"
                  name="age"
                  id=""
                  placeholder="For eg:15-16 years"
                  required
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
                      placeholder="Height"
                      required
                    />
                  </div>
                </div>

                <p>Address Where you Found</p>
                <input
                  type="text"
                  name="address"
                  id=""
                  placeholder="Place where you first see that person"
                  required
                />

                <div className="place_2">
                  <div>
                    <p>State</p>
                    <input
                      type="text"
                      name="state"
                      id=""
                      placeholder="State"
                      required
                    />
                  </div>

                  <div>
                    <p>City</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      placeholder="City"
                      required
                    />
                  </div>

                  <div>
                    <p>PinCode</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      placeholder="PinCode"
                      required
                    />
                  </div>
                </div>

                <p>Landmark (Place from where you Found)</p>
                <input
                  type="text"
                  name="place"
                  id=""
                  placeholder="LankMark of that place"
                  required
                />

                <div className="place_3">
                  <div className="date">
                    <p>Date when you have found that person</p>
                    <input type="date" name="date" id="" required />
                  </div>

                  <div className="time">
                    <p>Time when you have found that person</p>
                    <input type="time" name="time" id="" required />
                  </div>
                </div>

                <p>Description</p>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                  required
                  placeholder="When you have found that person, what was he/she doing, what was he/she wearing, what was he/she looking like, what was he/she saying, who have first seen that person etc."
                ></textarea>

                <p>Upload Image of Found Person</p>
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
              <h2>Details of Person Registering Complaint</h2>

              <form action="">
                <p>Full Name</p>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Full Name"
                  required
                />

                <div className="place_1">
                  <div className="mobile">
                    <div className="tool">
                      <p>Your Mobile Number</p>
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
                      placeholder="Your Mobile Number"
                      id=""
                      required
                    />
                  </div>

                  <div className="adhaar">
                    <div className="tool">
                      <p>Addhar Number</p>
                      <span className="tooltip">
                        <AiOutlineExclamationCircle />
                        <span>
                          Please enter adhaar number of yourself. We care
                          about your Privacy and we will not share your details
                          with anyone. This is for verification purpose.
                        </span>
                      </span>
                    </div>
                    <input
                      type="number"
                      name="adhar"
                      id=""
                      placeholder="XXXX-XXXX-XXXX"
                      required
                    />
                  </div>
                </div>

                <p>Address</p>
                <input
                  type="text"
                  name="address"
                  id=""
                  placeholder="Your Address"
                  required
                />

                <div className="place_2">
                  <div>
                    <p>State</p>
                    <input
                      type="text"
                      name="state"
                      id=""
                      placeholder="Your State"
                      required
                    />
                  </div>

                  <div>
                    <p>City</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      placeholder="Your City"
                      required
                    />
                  </div>

                  <div>
                    <p>PinCode</p>
                    <input
                      type="text"
                      name="city"
                      id=""
                      placeholder="Your Area PinCode"
                      required
                    />
                  </div>
                </div>

                <div className="btn">
                  <button type="submit">Submit</button>
                  <button type="reset">Reset</button>
                </div>
              </form>
            </div>
          )}
          <div className="serch_div">
            <h2>Search Found Person</h2>

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
};

export default FoundMissing;
