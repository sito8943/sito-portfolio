import React, { memo } from "react";
import { Navbar } from "@nextui-org/react";

const NavbarLink = memo((props) => <Navbar.Link {...props} />);

export default NavbarLink;
