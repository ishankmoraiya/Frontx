import React, { useState } from "react";
import "./UserProfile.scss";
import { AiFillSetting, AiOutlineBell } from "react-icons/ai";
import { BsCamera, BsKey } from "react-icons/bs";
import {
  MdCallMade,
  MdNotifications,
  MdOutlineDashboard,
  MdOutlineReportGmailerrorred,
  MdSwitchAccount,
} from "react-icons/md";
import {
  CgSearchFound,
  CgNotes,
  CgMenuLeftAlt,
  CgMenuRightAlt,
} from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiEdit2, FiLogOut } from "react-icons/fi";
import ReportMenu from "./ReportMenu";
import { Link } from "react-router-dom";
import CompleteProfile from "./CompleteProfile";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);

  const [show, setShow] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [visible, setVisible] = useState(0);
  const [dispaly, setDisplay] = useState(1);
  return (
    <>
      <div
        className="p"
        style={{
          gridTemplateColumns: !showSidebar ? "0.2fr 3.5fr" : "1fr 3.5fr",
        }}
      >
        <div className="sidebar">
          <div className={showSidebar ? "upper" : "upper upper1"}>
            {/* <HiMenuAlt1 onClick={() => setShowSidebar((prev) => !prev)} /> */}
            {showSidebar ? (
              <CgMenuLeftAlt onClick={() => setShowSidebar(false)} />
            ) : (
              <CgMenuRightAlt onClick={() => setShowSidebar(true)} />
            )}
            {showSidebar && <Link to="/">FiNDER</Link>}
          </div>
          {!showSidebar && (
            <div className="lower lower1">
              <div
                onClick={() => setDisplay(1)}
                className={dispaly === 1 ? "active" : ""}
              >
                <CgNotes />
              </div>
              <div
              // onClick={() => setDisplay(1)}
              // className={dispaly === 1 ? "active" : ""}
              >
                <MdOutlineDashboard />
              </div>
              <div
                onClick={() => setDisplay(0)}
                className={dispaly === 0 ? "active" : ""}
              >
                <MdSwitchAccount />
              </div>

              <div
              // onClick={() => setDisplay(1)}
              // className={dispaly === 1 ? "active" : ""}
              >
                <Link to="/missingreport">
                  <MdOutlineReportGmailerrorred />
                </Link>
              </div>
              <div>
                <Link to="/foundmissing">
                  <CgSearchFound />
                </Link>
              </div>
              <div>
                <MdCallMade />
              </div>
              <div>
                <MdNotifications />
              </div>
            </div>
          )}
          {showSidebar && (
            <div className="lower">
              <div
                onClick={() => setDisplay(1)}
                className={dispaly === 1 ? "active" : ""}
              >
                <CgNotes /> Submit Report
              </div>
              <div
              // onClick={() => setDisplay(1)}
              // className={dispaly === 1 ? "active" : ""}
              >
                <MdOutlineDashboard /> Dashboard
              </div>
              <div
                onClick={() => setDisplay(0)}
                className={dispaly === 0 ? "active" : ""}
              >
                <MdSwitchAccount /> Profile
              </div>

              <div
              // onClick={() => setDisplay(1)}
              // className={dispaly === 1 ? "active" : ""}
              >
                <Link to="/missingreport">
                  <MdOutlineReportGmailerrorred /> Report Lost Person
                </Link>
              </div>
              <div>
                <Link to="/foundmissing">
                  <CgSearchFound /> Found Lost Person
                </Link>
              </div>
              <div>
                <MdCallMade /> All Reports
              </div>
              <div>
                <MdNotifications /> Notifications
              </div>
            </div>
          )}
        </div>
        <div className="p_top scroll1">
          <div className="p_head">
            <div className="p_head_left">{user.firstname}'s Profile</div>
            <div className="user_profile_head">
              <div className="svg">
                <AiOutlineBell />
              </div>
              <div onClick={() => setShow((prev) => !prev)}>
                <img src="/profile.png" alt="" />
                <p style={{ color: "green" }}>
                  {user.firstname} {user.lastname}
                </p>
                <RiArrowDownSLine />
              </div>
              {show && (
                <>
                  <div className="dropdown">
                    <FiLogOut style={{ fontSize: "1.2rem" }} />
                    <span>Logout</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="back"></div>
          {dispaly === 0 && (
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
                      <div style={{width:"100%"}}>
                        <CompleteProfile />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {dispaly === 1 && <ReportMenu setDisplay={setDisplay} />}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
