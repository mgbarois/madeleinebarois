/*eslint-disable*/
import React from "react";
import { useTranslation } from 'react-i18next';

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  const { t } = useTranslation();

  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              Madeleine Barois
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, {" "}
          Madeleine Barois. Template {t('footer.by')}{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Creative Tim
          </a> | <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Invision
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
