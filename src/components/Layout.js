import { Outlet } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import { Col, Container, Row } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <MainNavBar></MainNavBar>

      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
