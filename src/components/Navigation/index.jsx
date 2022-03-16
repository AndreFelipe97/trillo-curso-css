import { FaHome, FaPlane, FaKey, FaMap } from "react-icons/fa";
import {
  Navigation as StyledNavigation,
  SideNav,
  SideNavItem,
  SideNavLink,
  Legal,
} from "./styles";

export function Navigation() {
  return (
    <StyledNavigation>
      <SideNav>
        <SideNavItem className="active">
          <SideNavLink href="#">
            <FaHome />
            <span>Hotel</span>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="#">
            <FaPlane />
            <span>Flight</span>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="#">
            <FaKey />
            <span>Car rental</span>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink href="#">
            <FaMap />
            <span>Tours</span>
          </SideNavLink>
        </SideNavItem>
      </SideNav>
      <Legal>&copy; 2017 by trillo. All rights reserved.</Legal>
    </StyledNavigation>
  );
}
