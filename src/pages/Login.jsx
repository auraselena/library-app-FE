import React from "react";
import { Text, Link, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [inputUsername, setInputUsername] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");

  const buttonLogin = () => {
    console.log("user siap login");
  };

  return (
    <div className="coba d-flex flex-row justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="text-start bg-light shadow-lg p-5" style={{ width: 400 }}>
        <Text fontSize="2xl" as="b">
          Login untuk pinjam buku dengan mudahnya!
        </Text>
        <div className="mt-4 text-muted fw-bold">Username</div>
        <Input placeholder="Username" onChange={(element) => setInputUsername(element.target.value)} />
        <div className="mt-2 text-muted fw-bold">Password</div>
        <InputGroup size="md">
          <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" onChange={(element) => setInputPassword(element.target.value)} />
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
