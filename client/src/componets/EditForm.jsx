import React from "react";
import Navbar from "./navBar";
const Form2 = (props) => {
  const { Firstname, Number, Email, handleChange2, handleSubmit2 } = props;
  return (
    <div className="form">
      <Navbar />
      <form onSubmit={handleSubmit2} className="formt">
        <h1 className="label"> Welcome to Edit Book </h1>
        <hr />
        <label>Name</label>
        <br />
        <input
          type="text"
          onChange={handleChange2}
          name="Firstname"
          value={Firstname}
          placeholder="Enter your Name"
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          onChange={handleChange2}
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
          onChange={handleChange2}
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

export default Form2;