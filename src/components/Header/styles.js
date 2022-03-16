import styled from "styled-components";

export const Header = styled.header`
  font-size: 1.4rem;
  height: 7rem;
  background-color: var(--color-white);
  border-bottom: var(--color-grey-light-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 3.25rem;
  margin-left: 2rem;
`;

export const Search = styled.form`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  input:focus + button {
    background-color: var(--color-grey-light-3);
  }
`;

export const SearchInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: var(--color-grey-light-2);
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 100px;
  width: 90%;
  transition: all 0.2s;
  margin-right: -3.5rem;

  &:focus {
    outline: none;
    width: 100%;
    background-color: var(--color-grey-light-3);
  }

  &::-webkit-input-placeholder {
    font-weight: 100;
    color: var(--color-grey-light-4);
  }
`;

export const SearchButton = styled.button`
  border: none;
  background-color: var(--color-grey-light-2);

  &:focus {
    outline: none;
  }

  &:focus {
    transform: translateY(2px);
  }

  svg {
    height: 2rem;
    width: 2rem;
    color: var(--color-grey-dark-3);
  }
`;

export const UserNav = styled.nav`
  display: flex;
  align-items: center;
  align-self: stretch;

  & > * {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
  }

  & > *:hover {
    background-color: var(--color-grey-light-2);
  }
`;

export const UserNavIconBox = styled.div`
  position: relative;

  svg {
    height: 2.25rem;
    width: 2.25rem;
    color: var(--color-grey-dark-2);
  }

  span {
    font-size: 0.8rem;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    color: var(--color-white);
    position: absolute;
    top: 1.5rem;
    right: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const UserNavUser = styled.div`
  img {
    height: 3.75rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
