import React from "react";
import { Center, Flex, Spacer, Grid, GridItem, Box, IconButton, Text, Menu, Button, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from "@chakra-ui/react";
import { GiBookshelf } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../actions/userAction";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const { username } = useSelector((state) => {
    return {
      username: state.usersReducer.username,
    };
  });

  const logoutButton = () => {
    dispatch(logoutAction());
  };

  return (
    <div>
      <Box bg="#19323C" w="100%" p={4} color="#F3F7F0">
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          <GridItem w="100%" h="10">
            <Flex>
              <GiBookshelf size={28} style={({ marginLeft: 10 }, { marginRight: 10 })} />
              <Link to="/dashboard">
                <Text fontSize="2xl" as="b">
                  PusKita
                </Text>
              </Link>
            </Flex>
          </GridItem>
          <Spacer />
          <Flex gap="10">
            <GridItem w="180px" p={1.5}>
              <Link>
                <Text fontSize="lg" as="b">
                  Explore Books
                </Text>
              </Link>
            </GridItem>
            <Spacer />
            <GridItem w="180px" p={1.5}>
              <Link>
                <Text fontSize="lg" as="b">
                  My Library
                </Text>
              </Link>
            </GridItem>
            <Spacer />
            <GridItem w="180px" p={1.5}>
              <Link>
                <Text fontSize="lg" as="b">
                  My Profile
                </Text>
              </Link>
            </GridItem>
          </Flex>
          <Spacer />
          <GridItem w="100%">
            {props.loading ? (
              <Spinner color="red.500" />
            ) : username ? (
              <Button colorScheme="whiteAlpha" onClick={logoutButton}>
                <Text fontSize="lg" as="b">
                  Logout
                </Text>
              </Button>
            ) : (
              <Link to="/login">
                <Button colorScheme="whiteAlpha">
                  <Text fontSize="lg" as="b">
                    Login
                  </Text>
                </Button>
              </Link>
            )}
          </GridItem>
        </Grid>
      </Box>
    </div>

    // <div className="side-navbar p-5">
    //   <div className="d-flex flex-row">

    //   </div>
    //   {/* <div className="mt-5">
    //     <Text fontsize="lg">foto</Text>
    //     <Text fontsize="lg">Fullname</Text>
    //     <Text fontsize="lg">Role</Text>
    //   </div> */}
    //   <div>
    //     <div className="mt-5">
    //       <Text fontsize="lg">Dashboard</Text>
    //       <Text fontsize="lg">Loan</Text>
    //       <Text fontsize="lg">Logout</Text>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;
