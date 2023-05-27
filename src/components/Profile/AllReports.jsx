import React, { useEffect } from "react";
import "./AllReports.scss";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllReport } from "../../redux/actions/reportPersonAction";
import { MdViewInAr } from "react-icons/md";
import { FaRegShareSquare } from "react-icons/fa";
import { Link} from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const AllReports = () => {
  const { reports, loading } = useSelector((state) => state.allReport);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReport());
  }, [dispatch]);

  const color = "#ff5c35";

  return (
    <div className="p">
      <Sidebar />
      <div className="p_top scroll1">
        <TopHeader />
        <div className="back"></div>
        <div className="all_report">
          <div className="all_head">
            <h2>All Submitted Reports</h2>
          </div>
          <div className="all_r">
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "66vh",
                  width: "100%",
                }}
              >
                <PropagateLoader color={color} />
              </div>
            ) : (
              reports &&
              reports?.length > 0 &&
              reports.map((report, i) => (
                <div className="repo" key={i}>
                  <div className="basic_d">
                    <p className="r_name">Lost Person: {report?.fullname}</p>

                    <div className="container">
                      <p>Reported Date: {report?.createdAt?.split("T")[0]}</p>
                      <p>
                        Reported At:{" "}
                        {report?.createdAt?.split("T")[1].split(".")[0]}
                      </p>
                    </div>
                  </div>
                  <div className="link">
                    <Link to={`/allreports/${report?._id}`}>
                      <MdViewInAr />
                      View Report
                    </Link>
                    <Link>
                      <FaRegShareSquare />
                      Share Report
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReports;
