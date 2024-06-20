import React from "react";

const FormComponent = (props) => {
  return (
    <div className="border border-2 p-3 mt-5">
      <h2>Login Form</h2>
      <input className="form-control my-4" placeholder="Enter Username" />
      <input className="form-control mb-2" placeholder="Password" />

      <button
        className="btn btn-success"
        style={{ backgroundColor: props.isLogin ? "blue" : "red" }}
      >
        {props.isLogin ? "Login" : "Sign Up"}
      </button>
    </div>
  );
};

export default FormComponent;
