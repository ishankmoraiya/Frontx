import React, { useState } from "react";
import "./UserProfile.scss";
import { AiFillSetting } from "react-icons/ai";
import { BsCamera, BsKey } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import CompleteProfile from "./CompleteProfile";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);

  const [visible, setVisible] = useState(0);
  return (
    <>
      <div className="p">
        <Sidebar />
        <div className="p_top scroll1">
          <TopHeader />
          <div className="back"></div>
          <div className="more_details">
            <div className="more_d">
              <div className="more_p">
                <img src="/profile.png" alt="" />
                <h3>
                  {user.firstname} {user.lastname}
                </h3>
                <p style={{ color: "lightslategray" }}>{user.username}</p>
                <div className="more_i">
                  <div>
                    <p>Edit Profile</p>
                    <FiEdit2 />
                  </div>
                  <div>
                    <p>Edit Password</p>
                    <BsKey />
                  </div>
                  <div>
                    <p>Edit Avatar</p>
                    <BsCamera />
                  </div>
                  <div>
                    <p>Setting</p>
                    <AiFillSetting />
                  </div>
                </div>
                <div className="more">
                  <div>
                    <p style={{ color: "red" }}>Report Missing Person</p>
                  </div>
                  <div>
                    <p style={{ color: "green" }}>Found Missing Person</p>
                  </div>
                </div>
              </div>
              <div className="details">
                {visible === 0 && (
                  <>
                    <div className="d_head">
                      <p className={visible === 0 ? "active" : ""}>
                        Account Details
                      </p>
                      <p onClick={() => setVisible(1)}>More Details</p>
                      <p className="button" onClick={() => setVisible(2)}>
                        Complete Profile
                      </p>
                      <p>Settings</p>
                    </div>
                    <div className="d_body">
                      <div className="details_p">
                        <p className="small">First Name</p>
                        <div>{user.firstname && <p>{user.firstname}</p>}</div>
                        <p className="small">Phone Number</p>
                        <div>
                          <p>19000-67845</p>
                        </div>
                        <p className="small">Gender</p>
                        <div>
                          <p>Male</p>
                        </div>
                        <p className="small">City</p>
                        <div>
                          <p>Jabalpur</p>
                        </div>
                        <p className="small">Pin Code</p>
                        <div>
                          <p>482004</p>
                        </div>
                      </div>
                      <div className="details_p">
                        <p className="small">Last Name</p>
                        <div>{user.lastname && <p>{user.lastname}</p>}</div>
                        <p className="small">Email Address</p>
                        <div>{user.email && <p>{user.email}</p>}</div>
                        <p className="small">Date of Birth</p>
                        <div>
                          <p>18 March 2002</p>
                        </div>
                        <p className="small">State</p>
                        <div>
                          <p>Madhya Pradesh</p>
                        </div>
                        <p className="small">Country</p>
                        <div>
                          <p>India</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {visible === 1 && (
                  <>
                    <div className="d_head">
                      <p onClick={() => setVisible(0)}>Account Details</p>
                      <p className={visible === 1 ? "active" : ""}>
                        More Details
                      </p>

                      <p className="button" onClick={() => setVisible(2)}>
                        Complete Profile
                      </p>

                      <p>Settings</p>
                    </div>
                    <div className="d_body">
                      <div className="details_p">
                        <p className="small">Your Address</p>
                        <div>
                          <p>H.no 608, Pragti vihar, Suhagi, Adhartal</p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {visible === 2 && (
                  <>
                    <div className="d_head">
                      <p onClick={() => setVisible(0)}>Account Details</p>
                      <p onClick={() => setVisible(1)}>More Details</p>
                      <p className={visible === 2 ? "active" : ""}>
                        Complete Profile
                      </p>
                      <p>Settings</p>
                    </div>
                    <div style={{ width: "100%" }}>
                      <CompleteProfile />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
