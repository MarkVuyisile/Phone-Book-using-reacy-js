import React, { useState, useEffect } from "react";
import Form from "./form";
import Form2 from "./EditForm";
import axios from "axios";
import { useNavigate, Routes, Route } from "react-router-dom";
import { v4 } from "uuid";
import Display from "./displayData";

const Main = () => {
  let navigate = useNavigate();

  const [formInfo, setFormInfo] = useState({
    Firstname: "",
    Number: "",
    Email: "",
  });

  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    Contact();
  }, []);

  const handleChange = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange2 = (e) => {
    setFormInfo({
      ...formInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
 
    if (
      formInfo.Firstname === "" ||
      formInfo.Number === "" ||
      formInfo.Email === ""
    ) {
      return alert("Fill up all the input");
    } else {
      try {
        const savePhoneBook = await axios.post(
          "http://localhost:9090/save",
          formInfo
        );
        Contact();
        navigate("/display");
        setFormInfo({
          Firstname: "",
          Number: "",
          Email: "",
        });
        return savePhoneBook;
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setEdit(false)
 
    if (
      formInfo.Firstname === "" ||
      formInfo.Number === "" ||
      formInfo.Email === ""
    ) {
      return alert("Fill up all the input");
    } else {
      try {
        const savePhoneBook = await axios.post(
          "http://localhost:9090/save",
          formInfo
        );
        Contact();
        navigate("/display");
        setFormInfo({
          Firstname: "",
          Number: "",
          Email: "",
        });
        list()
        return savePhoneBook;
      } catch (error) {
        console.log("error", error);
      }
    }
  }
  const Contact = async () => {
    await axios
      .get("http://localhost:9090/Contact")
      .then((response) => {
        const data = response.data;
        setList(data);
      })
      .catch(() => {});
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:9090/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res) {
          throw new Error("Something Went Wrong");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
 
  const handleEdit = async (id) => {
    setEdit(true)
    console.log("id", id)
    fetch(`http://localhost:9090/contact/:id`, {
      method: "PUT",list
    })
      .then((res) => {
        if (!res) {
          throw new Error("Something Went Wrong");
        }
      })
      .catch((e) => {
        console.log(e);
      });
      console.log("id", id)
  }
  
  

  return (
    <div>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Form
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
        <Route
          path="/"
          exact
          element={
            <Form2
            list={list}
              edit={edit}
              handleChange={handleChange2}
              handleSubmit2={handleSubmit2}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          }
        />
        <Route
          path="/display"
          element={
            <Display
              list={list}
              edit={edit}
              getDetails={Contact}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              // updatePost={updatePost}
            />
          }
        />
      </Routes>
      {/* <button onClick={()=> handleRemove(item.id)}>+</button> */}
    </div>
  );
};

export default Main;
