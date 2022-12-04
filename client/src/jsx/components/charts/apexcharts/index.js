import React from "react";
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";

import PageTitle from "../../../layouts/PageTitle";

import ApexBarChart from "./ApexBarChart";
import ApexChart1 from "./ApexChart";

import ApexBar from "./Bar";
import ApexBar2 from "./Bar2";
import ApexLine from "./Line";
import ApexLine2 from "./Line2";
import ApexLine3 from "./Line3";
import ApexLine4 from "./Line4";
import ApexPie from "./Pie";
import ApexRedialBar from "./RadialBar";
import ApexNagetivePosative from "./NagetivePositive2";

function ApexChart() {
   return (
      <div className="h-80">
         <PageTitle motherMenu="Charts" activeMenu="ApexChart" />
         <Row>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexBarChart />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexBar />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexNagetivePosative />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Bar Chart</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexBar2 />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexChart1 />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexLine />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexLine2 />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexLine3 />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Line</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexLine4 />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Pie</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexPie />
                  </Card.Body>
               </Card>
            </Col>
            <Col xl={6}>
               <Card>
                  <Card.Header>
                     <Card.Title>Redial Bar</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <ApexRedialBar />
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </div>
   );
}

export default ApexChart;
