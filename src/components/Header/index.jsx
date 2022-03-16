import { FiSearch, FiBookmark, FiMessageSquare } from "react-icons/fi";
import {
  Header as StyledHeader,
  Logo,
  Search,
  SearchButton,
  SearchInput,
  UserNav,
  UserNavIconBox,
  UserNavUser,
} from "./styles";
import { Logo as LogoImg, User } from "../../assets/img";

export function Header() {
  return (
    <StyledHeader>
      <Logo src={LogoImg} alt="trillo logo" />
      <Search>
        <SearchInput type="text" placeholder="Search hotels" />
        <SearchButton>
          <FiSearch />
        </SearchButton>
      </Search>
      <UserNav>
        <UserNavIconBox>
          <FiBookmark />
          <span>7</span>
        </UserNavIconBox>
        <UserNavIconBox>
          <FiMessageSquare />
          <span>13</span>
        </UserNavIconBox>
        <UserNavUser>
          <img src={User} alt="user" />
          <span>Jonas</span>
        </UserNavUser>
      </UserNav>
    </StyledHeader>
  );
}
