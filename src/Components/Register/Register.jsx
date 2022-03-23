import React, { Fragment, useState } from "react";
import "./Register.css";
import Loader from "../Loader/Loader";
import CloseIcon from "@mui/icons-material/Close";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from '@mui/icons-material/Person';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setisLoading(true);

    if (!name) {
      setMessage("Name shouldn't be empty");
    } 
    else if (!email) {
      setMessage("Email shouldn't be empty");
    }
     else if (!password) {
      setMessage("Password shouldn't be empty");
    }
     else {
      // handle login with server and setMessage accordingly
      setMessage("User successfully registered");
    }

    setisLoading(false);
  }

  return (
    <Fragment>
      <form className="register_form" onSubmit={handleSubmit}>
        {/* <h1 className="register_heading">Sign Up</h1> */}

        <div className="input_element">
          <PersonIcon />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div className="input_element">
          <MailIcon />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        </div>

        <div className="input_element">
          <LockIcon />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        </div>

        <button type="submit">Register</button>
      </form>

      <div className="message_container">
        {isLoading && <Loader />}

        {message && (
          <div className="message">
            {message}
            <CloseIcon className="close" onClick={() => setMessage("")} />
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Register;