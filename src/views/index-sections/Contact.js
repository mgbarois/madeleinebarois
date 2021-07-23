import React from "react";
import { useTranslation } from 'react-i18next';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Modal
} from "reactstrap";

import './Contact.scss';

// core components

function Contact() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [messageFocus, setMessageFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [modalLive, setModalLive] = React.useState(false);
  const [sendSuccess, setSendSuccess] = React.useState(false);

  const { t } = useTranslation();

  const openModal = (success) => {
    setSendSuccess(success);
    setModalLive(true);
    setName("");
    setEmail("");
    setMessage("");
  }
  const onFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://formsubmit.co/55437be6999e28ecd2e8317f04c071c3", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
      .then(data => 
        {
          console.log("Fetch data:", data)
          openModal(true);
        })
      .catch(err => {
        console.log("Fetch error:", err);
        openModal(false);
      })
  }



  return (
    <>
      <div
        className="section section-contact"
        id="contact"
      // style={{
      //   backgroundColor: '#1C1D21'

      //     // backgroundImage: "url(" + require("assets/img/jonathan-borba-3o5oUjrD90w-unsplash_grad_rot.png") + ")",
      //     // backgroundSize: "cover",
      //     // backgroundPosition: "bottom center",
      //     // minHeight: "700px"
      // }}
      // style={{
      //   backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
      //   backgroundSize: "cover",
      //   backgroundPosition: "top center",
      //   minHeight: "700px",
      // }}
      >
        <Container>
          <Row>
            <Card className="card-signup" data-background-color="blue">
              <Form action="" className="form" method="">
                <CardHeader className="text-center">
                  <CardTitle className="title-up" tag="h3">
                    {t('contact.contactme')}
                  </CardTitle>
                  <div className="social-line">
                    {/* <Button
                      className="btn-neutral btn-icon btn-round"
                      color="facebook"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button> */}
                    <Button
                      className="btn-neutral btn-icon btn-round"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                        <i className="fas fa-envelope"></i>
                      </div>

                    </Button>
                    {/*<Button
                      className="btn-neutral btn-icon btn-round"
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button> */}
                  </div>
                </CardHeader>
                <CardBody>
                  <InputGroup
                    className={
                      "no-border" + (nameFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder={t('contact.name')}
                      value={name}
                      type="text"
                      onFocus={() => setNameFocus(true)}
                      onBlur={() => setNameFocus(false)}
                      onChange={(e) => setName(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (emailFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder={t('contact.email')}
                      type="text"
                      value={email}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                  </InputGroup>
                  <InputGroup
                    className={
                      "no-border" + (messageFocus ? " input-group-focus" : "")
                    }
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons text_caps-small"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder={t('contact.message')}
                      type="textarea"
                      value={message}
                      onFocus={() => setMessageFocus(true)}
                      onBlur={() => setMessageFocus(false)}
                      onChange={(e) => setMessage(e.target.value)}
                    ></Input>
                  </InputGroup>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-neutral btn-round"
                    color="info"
                    onClick={(e) => onFormSubmit(e)}
                    size="lg"
                  // disabled
                  >
                    Send
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Row>
          {/* <div className="col text-center">
            <Button
              className="btn-round btn-white"
              color="default"
              to="/login-page"
              outline
              size="lg"
              tag={Link}
            >
              View Login Page
            </Button>
          </div> */}
        </Container>
        <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLiveLabel">
              {sendSuccess ? t("contact.success") : t("contact.error")}
            </h5>
            <button
              aria-label="Close"
              className="close"
              type="button"
              onClick={() => setModalLive(false)}
            >
              <span aria-hidden={true} style={{ color: sendSuccess ? "green" : "red" }}>
                {sendSuccess ? (<i class="fas fa-check" />) : "x" }
              </span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              {sendSuccess ? t("contact.successMessage") : t("contact.errorMessage")}
              {sendSuccess ? "" : <a href="https://www.linkedin.com/in/madeleine-barois/">LinkedIn.</a>}
            </p>
          </div>
          <div className="modal-footer">
            <Button
              color="secondary"
              type="button"
              onClick={() => setModalLive(false)}
            >
              Close
            </Button>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Contact;
