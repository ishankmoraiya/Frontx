import React, { useEffect, useState } from "react";
import "./ViewReport.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addMoreImage,
  getReportById,
} from "../../redux/actions/reportPersonAction";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import { PulseLoader } from "react-spinners";
import { toast } from "react-hot-toast";

const ViewReport = () => {
  const { report } = useSelector((state) => state.singlereport);
  const { loading, message, error } = useSelector((state) => state.addimage);
  const [picture, setPicture] = useState();

  const dispatch = useDispatch();
  const params = useParams();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPicture(file);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", picture);
    await dispatch(addMoreImage(params.id, formData));
    setPicture("");
  };

  useEffect(() => {
    dispatch(getReportById(params.id));

    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, params.id, error, message]);

  return (
    <div className="p">
      <Sidebar page="viewreport" />
      <div className="p_top scroll1">
        <TopHeader />
        <div className="back"></div>
        <div className="all_report">
          <div className="all_head">
            <h2>{report?.fullname} Lost Report</h2>
          </div>
          <div className="repo_d scroll">
            <div className="first">
              <div className="grp">
                <div className="combine">
                  <p className="small">Name</p>
                  <div>{report?.fullname}</div>
                </div>
                <div className="combine">
                  <p className="small">Age</p>
                  <div>{report?.age}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Gender</p>
                  <div>{report?.gender}</div>
                </div>
                <div className="combine">
                  <p className="small">Height</p>
                  <div>{report?.height}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">city</p>
                  <div>{report?.city}</div>
                </div>
                <div className="combine">
                  <p className="small">state</p>
                  <div>{report?.state}</div>
                </div>
                <div className="combine">
                  <p className="small">Pincode</p>
                  <div>{report?.pincode}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Address</p>
                  <div>{report?.address}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Incident Date</p>
                  <div>{report?.incidentDate}</div>
                </div>
                <div className="combine">
                  <p className="small">Incident Time</p>
                  <div>{report?.incidentTime}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Mobile Number</p>
                  <div>{report?.mobileno}</div>
                </div>
                <div className="combine">
                  <p className="small">Adhaar Number</p>
                  <div>{report?.adhaar}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Incident Place</p>
                  <div>{report?.incidentPlace}</div>
                </div>
              </div>
              <div className="grp">
                <div className="combine">
                  <p className="small">Incident Description</p>
                  <div>{report?.incidentdesc}</div>
                </div>
              </div>
            </div>
            <div className="second">
              <div className="img_div">
                <div className="img">
                  {report?.picture && report?.picture.length > 0 ? (
                    report?.picture.map((pic, i) => (
                      <img key={i} src={pic?.url} alt="" />
                    ))
                  ) : (
                    <h2
                      style={{
                        marginTop: "20px",
                      }}
                    >
                      No Image Availabel
                    </h2>
                  )}
                </div>

                <div className="add">
                  <form onSubmit={handleSubmit}>
                    <p>Add More Photo</p>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      required
                      onChange={handleImageChange}
                    />
                    <button type="submit" disabled={loading}>
                      {loading ? (
                        <PulseLoader size="10px" color="white" />
                      ) : (
                        "Upload Images"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewReport;
