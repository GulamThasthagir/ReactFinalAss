import React, { useState } from "react";
// import { Profile } from "./Profile";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [prof, setProf] = useState([]);
  const navigate = useNavigate();

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPassword = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$"
  );

  const validNumber = new RegExp("^([0|+[0-9]{1,5})?([7-9][0-9]{9})$");

  function submit() {
    console.log("validEmail.test(email)", validEmail.test(email));
    console.log("validPassword.test(password)", validPassword.test(password));
    console.log("validNumber.test(phone)", validNumber.test(phone));
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      address === "" ||
      phone === ""
    ) {
      alert("Not Found");
    } else if (
      !validEmail.test(email) ||
      !validPassword.test(password) ||
      !validNumber.test(phone)
    ) {
      alert("invalid data");
    } else {
      setProf([...prof, { email, password, name, address, phone }]);
      setEmail("");
      setPassword("");
      setName("");
      setAddress("");
      setPhone("");
      navigate("/Home", { state: { pas: name } });
    }
  }
  return (
    <>
      {
        <div className="mainContainer">
          <div className="subsContainer"></div>
          <div className="password">
            <p className="para">Name</p>
            <input
              type="text"
              id="input1"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="e.g gulam"
            ></input>
            <p className="para">Email</p>
            <input
              type="text"
              id="input1"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="gt@gmail.com"
            ></input>
            <p className="para">PassWord</p>
            <input
              type="text"
              id="input2"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Gt@1ss"
            ></input>
            <p className="para">Phone</p>
            <input
              type="text"
              id="input1"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="9123456789"
            ></input>
            <p className="para">Address</p>
            <input
              type="text"
              id="input1"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="london"
            ></input>
            <br></br>
            <br></br>
            <button onClick={submit} className="submit">
              Submit
            </button>
          </div>
        </div>
      }
    </>
  );
};
