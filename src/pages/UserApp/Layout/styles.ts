import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  background-color: #faf9ff;
  padding: 47px 81px;
  font-size: 16px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100px;
  cursor: pointer;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 45px;
  height: 100%;
  align-items: center;
`;
export const HeaderLink = styled(NavLink)`
  font-size: 28px;
  font-weight: normal;
  text-decoration: none;
  color: #000000;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  padding: 40px;
  background-color: #112233;
`;

export const navlinkProps = (isActive: boolean) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});
