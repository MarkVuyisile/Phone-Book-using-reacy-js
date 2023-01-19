import React from "react";
import Navbar from "./navBar";
const Form = (props) => {
  const { Firstname, Number, Email, handleChange, handleSubmit } = props;
  return (
    <div className="form">
      <Navbar />
      <form onSubmit={handleSubmit} className="formt">
        <h1 className="label"> Phone Book Form </h1>
        <hr />
        <label>Name</label>
        <br />
        <input
          type="text"
          onChange={handleChange}
          name="Firstname"
          value={Firstname}
          placeholder="Enter your Name"
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          onChange={handleChange}
          name="Email"
          value={Email}
          placeholder="Enter your Email"
        />
        <br />
        <br />
        <label>Contact Details</label>
        <br />
        <input
          type="number"
          onChange={handleChange}
          name="Number"
          value={Number}
          placeholder="Enter Contact Number"
        />
        <br />
        <br />
        <button type="submit" className="butt">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
