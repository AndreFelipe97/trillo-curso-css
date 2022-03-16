import styled from "styled-components";

export const Navigation = styled.nav`
  background-color: var(--color-grey-dark-1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 0 18%;
`;

export const SideNav = styled.ul`
  font-size: 1.4rem;
  list-style: none;
  margin-top: 3.5rem;
`;

export const SideNavItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: var(--color-primary);
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  &:hover::before,
  &.active::before {
    transform: scaleY(1);
    width: 100%;
  }

  &:active::before {
    background-color: var(--color-primary-light);
  }
`;

export const SideNavLink = styled.a`
  &:link,
  &:visited {
    color: var(--color-grey-light-1);
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    padding: 1.5rem 3rem;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
  }

  svg {
    height: 1.75rem;
    width: 1.75rem;
    margin-right: 2rem;
    color: currentColor;
  }

  span {
  }
`;

export const Legal = styled.div`
  font-size: 1.2rem;
  color: var(--color-grey-light-4);
  text-align: center;
  padding: 2.5rem;
`;
