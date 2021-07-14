import React from "react";
import { Container } from "reactstrap";
import { useTranslation } from 'react-i18next';
import Zoom from 'react-reveal/Zoom';

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const { t } = useTranslation();
  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/fishes.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <Zoom>
              <img
                alt="..."
                className="n-logo"
                src={require("assets/img/logo_circuit_white.png")}
              />
              <h1 className="h1-seo">Madeleine Barois</h1>
              <h3>{t("indexHeader.subtitle")}</h3>
            </Zoom>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
