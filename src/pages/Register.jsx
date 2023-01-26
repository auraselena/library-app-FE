import { Button, Container, Box, Text, Input } from "@chakra-ui/react";
import Axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_url } from "../helper";

const Register = () => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const buttonRegister = () => {
    console.log("register success");
    Axios.post(API_url + `/users/register`, {
      username,
      fullname,
      password,
      phone,
      email,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container style={{ margiTop: 20 }}>
      {/* <Box maxH="100%" bgImage="url('https://api.time.com/wp-content/uploads/2021/10/GettyImages-577674005.jpg')"> */}
      <Text fontSize="xl" as="b">
        Register for free.
      </Text>
      <Text>
        Already a member?{" "}
        <Link to="/login">
          <b>Sign In</b>
        </Link>
      </Text>
      <Box>
        <Text>Username</Text>
        <Input
          placeholder="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Text>Full name</Text>
        <Input
          placeholder="fullname"
          onChange={(event) => {
            setFullname(event.target.value);
          }}
        />
        <Text>Password</Text>
        <Input
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Text>Phone number</Text>
        <Input
          placeholder="phone number"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <Text>e-mail</Text>
        <Input
          placeholder="e-mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </Box>
      <Button className="mt-2" style={{ width: "100%" }} colorScheme="facebook" onClick={buttonRegister}>
        Register Account
      </Button>
    </Container>
  );
};

export default Register;
