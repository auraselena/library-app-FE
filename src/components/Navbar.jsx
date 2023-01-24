import { Text, Link } from "@chakra-ui/react";
import { GiBookshelf } from "react-icons/gi";
import { TbChartInfographic } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="side-navbar p-5">
      <div className="d-flex flex-row">
        <GiBookshelf size={28} />
        <Text fontSize="2xl" as="b">
          PusKita
        </Text>
      </div>
      {/* <div className="mt-5">
        <Text fontsize="lg">foto</Text>
        <Text fontsize="lg">Fullname</Text>
        <Text fontsize="lg">Role</Text>
      </div> */}
      <div className="mt-5">
        <Text fontsize="lg">Dashboard</Text>
        <Text fontsize="lg">Loan</Text>
        <Text fontsize="lg">Logout</Text>
      </div>
    </div>
  );
};

export default Navbar;
