import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { loadUser } from "./redux/actions/userActions";
import Home from "./components/Home/Home";
import Register from "./components/Login/Register";
import Login from "./components/Login/Login";
import UserProfile from "./components/Profile/UserProfile";
import MissingReport from "./components/Report/MissingReport";
import FoundMissing from "./components/Report/FoundMissing";
import AllReports from "./components/Profile/AllReports";
import { useSelector, useDispatch } from "react-redux";
import { ProtectedRoute } from "protected-route-react";
import ReportMenu from "./components/Profile/ReportMenu";
import ViewReport from "./components/Profile/ViewReport";
import ViewFoundReport from "./components/Profile/ViewFoundReport";

function App() {
  const { isAuthenticated, message, error } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <Login />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/missingreport"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MissingReport />
            </ProtectedRoute>
          }
        />
        <Route
          path="/foundmissing"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <FoundMissing />
            </ProtectedRoute>
          }
        />

        <Route
          path="/submitreport"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ReportMenu />
            </ProtectedRoute>
          }
        />

        <Route
          path="/allreports"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AllReports />
            </ProtectedRoute>
          }
        />

        <Route
          path="/allreports/lostpersonreport/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ViewReport />
            </ProtectedRoute>
          }
        />

        <Route
          path="/allreports/foundpersonreport/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <ViewFoundReport />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
