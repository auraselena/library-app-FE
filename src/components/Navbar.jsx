import { Center, Flex, Spacer, Grid, GridItem, Box, IconButton, Text, Menu, Button, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider } from "@chakra-ui/react";
import { GiBookshelf } from "react-icons/gi";
import { TbChartInfographic } from "react-icons/tb";
import { ExternalLinkIcon, AddIcon, RepeatIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
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
            <Button colorScheme="whiteAlpha">
              <Link>
                <Text fontSize="lg" as="b">
                  Logout
                </Text>
              </Link>
            </Button>
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
