import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import './IndexNavBar.scss';

const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'Français' },
  // de: { nativeName: 'Deutsch' }
};

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const { t, i18n } = useTranslation();

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">

            <NavbarBrand
              href="./../../index"
              id="navbar-brand"
            >
              <img src={require("assets/img/logo_circuit_white.png")} alt='Madeleine Barois logo' />
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  {/* <i className="now-ui-icons users_circle-08 mr-1"></i> */}
                  <p>{t("indexNavBar.myProfile")}</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("about-me")
                      .scrollIntoView();
                  }}>
                    <i className="now-ui-icons users_circle-08"></i>
                    About Me
                  </DropdownItem>
                  <DropdownItem tag={Link} onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("tabs-section")
                      .scrollIntoView();
                  }}>
                    <i className="now-ui-icons ui-2_settings-90"></i>
                    Skillset
                  </DropdownItem>
                  <DropdownItem tag={Link} onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("tabs-section")
                      .scrollIntoView();
                  }}>
                    <i className="now-ui-icons education_hat mr-1"></i>
                    Education
                  </DropdownItem>
                  <DropdownItem tag={Link} onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("experience")
                      .scrollIntoView();
                  }}>
                    <i className="now-ui-icons business_briefcase-24 mr-1"></i>
                    Experience
                  </DropdownItem>
                  <DropdownItem tag={Link} onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("portfolio")
                      .scrollIntoView();
                  }}>
                    <i className="now-ui-icons media-1_album"></i>
                    Portfolio
                  </DropdownItem>
                  <DropdownItem tag={Link} onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      .scrollIntoView();
                  }}>
                    <i className="now-ui-icons ui-1_send"></i>
                    Contact
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  href={t("indexNavBar.linkedinLink")}
                  target="_blank"
                  id="linkedin-tooltip"
                >
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">Linkedin</p>
                </NavLink>
                <UncontrolledTooltip target="#linkedin-tooltip">
                  {t("indexNavBar.linkedinTooltip")}
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.github.com/mgbarois"
                  target="_blank"
                  id="github-tooltip"
                >
                  <i className="fab fa-github"></i>
                  <p className="d-lg-none d-xl-none">GitHub</p>
                </NavLink>
                <UncontrolledTooltip target="#github-tooltip">
                  {t("indexNavBar.githubTooltip")}
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://codepen.io/mgbarois"
                  target="_blank"
                  id="codepen-tooltip"
                >
                  <i className="fab fa-codepen"></i>
                  <p className="d-lg-none d-xl-none">CodePen</p>
                </NavLink>
                <UncontrolledTooltip target="#codepen-tooltip">
                  {t("indexNavBar.codepenTooltip")}
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://replit.com/@mgbarois/"
                  target="_blank"
                  id="replit-tooltip"
                >
                  <img className='repl-icon' src={require('assets/img/repl_white_crop.png')} alt='repl logo' style={{ width: '20px' }} />
                  <p className="d-lg-none d-xl-none"><span> Replit</span></p>
                </NavLink>
                <UncontrolledTooltip target="#replit-tooltip">
                  {t("indexNavBar.replitTooltip")}
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    color="default"
                    nav
                    onClick={(e) => e.preventDefault()}
                  >
                    {/* <i
                      aria-hidden={true}
                      className="fas fa-language"
                    ></i> */}
                    <img src={require('assets/img/languages_white.png')} style={{ width: '20px' }} alt={t("indexNavBar.langSelector")} />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem header tag="a">
                      {t("indexNavBar.langs")}
                    </DropdownItem>
                    {Object.keys(lngs).map((lng) => (
                      <DropdownItem
                        key={lng}
                        style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }}
                        onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].nativeName}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
