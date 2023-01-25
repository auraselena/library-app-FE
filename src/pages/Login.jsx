import React from "react";
import { Text, Link, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { API_url } from "../helper";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../actions/userAction";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const buttonLogin = () => {
    console.log("user siap login");
    Axios.post(API_url + "/users/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(loginAction(response.data));
        localStorage.setItem("library_login", response.data);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="coba d-flex flex-row justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="container text-start bg-light shadow-lg p-5" style={{ width: 400 }}>
        <Text fontSize="2xl" as="b">
          Login untuk baca buku kapan saja, di mana saja!
        </Text>
        <div className="mt-4 text-muted fw-bold">Username</div>
        <Input placeholder="Username" onChange={(element) => setUsername(element.target.value)} />
        <div className="mt-2 text-muted fw-bold">Password</div>
        <InputGroup size="md">
          <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" onChange={(element) => setPassword(element.target.value)} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </Button>
          </InputRightElement>
        </InputGroup>
        <div className="text-end mt-5">Lupa password? Klik di sini</div>
        <Button className="mt-2" style={{ width: "100%" }} colorScheme="facebook" onClick={buttonLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
