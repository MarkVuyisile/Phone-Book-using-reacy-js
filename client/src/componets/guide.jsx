import React, { useState } from "react";
// import Axios from "axios";
import { v4 } from "uuid";

function App() {
  const [firstname, setFirstname] = useState("");
  const [firstname2, setFirstname2] = useState("");

  const [surname, setSurname] = useState();
  const [edit, setEdit] = useState(false);

  const [data, setData] = useState([]);
//   const [validationMessage, setValidationMessage] = useState();

  // console.log("form", form);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData([...data, { id: v4(), }]);

    try {
      // const userData = await Axios.put(
      //   "http://localhost:7001/get_user_data",
      //   data
      // );
      // console.log("userData", userData);
      // setValidationMessage(userData.data.message);
    } catch (error) {
      return error;
    }
  };

  const handleSubmit2 = async (e) => {
   setEdit(false)
  };

  const handleEdit = async (id) => {
    console.log("id", id)
      // const userData = await Axios.put(
      //         `http://localhost:7001/get_user_data:${id}`,
      //         data
      //       );
      setEdit(true);
      setFirstname2("tumi")
  };

  const handleSubmitEdit = (_) => {};

  // const { firstname, surname } = form;
  return (
    <div className="App">
      <form>
        <labe>Name</labe>
        <input
          type="text"
          onChange={(e) => setFirstname(e.target.value)}
          name="firstname"
          value={firstname}
        />
        <labe>Surname</labe>
        <input
          type="text"
          name="surname"
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
        />
        <div>
          <input type="submit" onClick={handleSubmit} value="Submit" />
        </div>
      </form>

      {!edit ? <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Action</th>
          </tr>
          <tbody>
            {data &&
              data.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>{item.firstname}</td>
                    <td>{item.surname}</td>
                    <td>
                 
                        <button onClick={() => handleEdit(item.id)}>
                          Edit
                        </button>
                     
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>:
      <form>
      <labe>Name</labe>
      <input
        type="text"
        onChange={(e) => setFirstname(e.target.value)}
        name="firstname"
        value={firstname}
      />
      <labe>Surname</labe>
      <input
        type="text"
        name="surname"
        onChange={(e) => setSurname(e.target.value)}
        value={surname}
      />
      <div>
        <input type="submit" onClick={handleSubmit2} value="Submit" />
      </div>
    </form>}
     

     
      <div>

      </div>
    </div>
  );
}

export default App;