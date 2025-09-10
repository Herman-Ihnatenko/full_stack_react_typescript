import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import { NAV_MENU_ROUTES } from "../constants/navMenuRoutes";

import {
  LayoutWrapper,
  Header,
  Main,
  Footer,
  Logo,
  HeaderLink,
  NavigationContainer,
  FooterLogo,
  FooterLink,
  FooterNavigation,
  navlinkProps
} from "./styles";
import { type LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  const goToNavCreateEmployee = () => {
    navigate("/createEmployee");
  };

  const footerLinks = Object.keys(NAV_MENU_ROUTES).map((route) => {
    return (
      <FooterLink
        key={v4()}
        to={
          NAV_MENU_ROUTES[route as keyof typeof NAV_MENU_ROUTES]
        }
      >
        {route}
      </FooterLink>
    );
  });

  const headerLinks = Object.keys(NAV_MENU_ROUTES).map((route) => {
    return (
      <HeaderLink
        key={v4()}
        to={
          NAV_MENU_ROUTES[route as keyof typeof NAV_MENU_ROUTES]
        }
        style={({ isActive }) => navlinkProps(isActive)}
      >
        {route}
      </HeaderLink>
    );
  });

  return (
    <LayoutWrapper>
      <Header>
        <Logo onClick={goToNavCreateEmployee}> Cohort
        </Logo>
        <NavigationContainer>{headerLinks}</NavigationContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <FooterLogo>
          {/* <LogoImg
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxOGDYH2tzlcwZSDpjg0qRGgEHAxVhsKHFUg&s"
            alt="Logo"
          /> */}
        </FooterLogo>
        <FooterNavigation>{footerLinks}</FooterNavigation>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;
