import React, { useState } from "react";
import "./TopHeader.scss";
import { AiOutlineBell } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const TopHeader = () => {
  const { user } = useSelector((state) => state.user);

  const [show, setShow] = useState(false);
  return (
    <div className="p_head">
      <div className="p_head_left">{user.firstname}'s Profile</div>
      <div className="user_profile_head">
        <div className="svg">
          <AiOutlineBell />
        </div>
        <div onClick={() => setShow((prev) => !prev)}>
          <img src={user.avatar?.url} alt="" />
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
  );
};

export default TopHeader;
