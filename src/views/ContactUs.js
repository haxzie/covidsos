/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";
import Header from "../components/Headers/Header.js";
import OrganisationRegistration from "../components/Forms/OrganisationRegistration";

class ContactUs extends React.Component {

  renderNewOrganisationForm() {
    return (
        <Row className="justify-content-center">
          <Col lg="8" md="8">
            <Card className="bg-secondary shadow border-0">
              <CardHeader className="bg-transparent pb-3">
                <div className="text-uppercase text-muted text-center mt-2 mb-2">
                  Reach out to us
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5 text-justify">
                <OrganisationRegistration/>
              </CardBody>
            </Card>
          </Col>
        </Row>
    );
  }

  render() {
    return (
        <>
          <Header showCards={false}/>
          {/* Page content */}
          <Container className="mt--7" fluid>
            {this.renderNewOrganisationForm()}
          </Container>
        </>
    );
  }
}

export default ContactUs;
