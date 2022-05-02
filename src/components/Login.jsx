import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addLogin } from "../Redux/actions";

export const Login = () => {
  const [userdata, setUserData] = useState([]);
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  // console.log("userdata:", userdata);
  
  const dispatch = useDispatch();

  const handleCheck = () => {
    // if (
    //   username == userdata.map((e) => e.username) &&
    //   pass == userdata.map((e) => e.pass)
    // ) {
    //   console.log("login");
    // } else {
    //   console.log("wrong");
    // }
    if (username === "admin") {
      navigate("/orders");
    } else {
      dispatch(addLogin(username));
      navigate("/neworder");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios.get("http://localhost:8080/users").then((res) => {
      setUserData(res.data);
    });
  };
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleCheck}>
        Login
      </button>
    </div>
  );
};
