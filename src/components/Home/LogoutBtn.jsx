import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/logout",
        {}, // Empty body
        { withCredentials: true }
      );
      alert(response.data.message);
      if (response) {
        dispatch(logout());
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      {error && (
        <p className="text-red-500 text-sm mb-2">{error}</p> // Display error message
      )}
      <button
        className="ml-4 text-white border-2 border-white px-2 py-1 rounded-md 
        font-semibold hover:text-black hover:bg-white"
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn;
