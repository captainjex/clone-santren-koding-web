
import React from 'react'
import {
  Container,
  Row,
  Col
 } from 'reactstrap'

export default class SponsorAndPartner extends React.Component {
  state = {
    mainSponsor: [
      {
        logoUrl: 'http://i67.tinypic.com/2hcn70k.jpg',
        websiteUrl: 'http://klinikita.co.id/',
        size: 4
      }
    ],
    sponsors: [
      {
        logoUrl: 'https://1.bp.blogspot.com/-GZjl-D1QU6k/WgpvD8krquI/AAAAAAAAE0Y/tkrHzHHdt-4BdvmofUT7vuNtjG4ANIRPQCLcBGAs/s400/Undip.png',
        websiteUrl: 'https://www.undip.ac.id/language/id/',
        size: 2
      }, {
        logoUrl: 'http://adiwibowo.files.wordpress.com/2012/10/logo-udinus.png?resize=370%2C358',
        websiteUrl: 'http://www.dinus.ac.id/',
        size: 2
      }
    ],
    partners: [
      {
        logoUrl: 'http://sdk.semarangkota.go.id/web/pemkot.png',
        websiteUrl: 'http://sdk.semarangkota.go.id/',
        size: 3
      }, {
        logoUrl: 'http://www.sandec.org/images/sandec-logo.png',
        websiteUrl: 'http://www.sandec.org/',
        size: 3
      }, {
        logoUrl: 'http://i64.tinypic.com/28v94w6.png',
        websiteUrl: 'https://www.facebook.com/SemarangOpenGo/',
        size: 2
      }, {
        logoUrl: 'http://sdk.semarangkota.go.id/komunitas/logokomunitas/20161215114909logo-p.png',
        websiteUrl: 'http://sdk.semarangkota.go.id/komunitas/logokomunitas/20161215114909logo-p.png',
        size: 3
      }
    ]
  }

  render() {
    return (
      <Container fluid style={{ textAlign: 'center' }}>
        <h1 className="title text-center">Sponsor & Partner</h1>
        <Row className="main-sponsor justify-content-center">
          { this.state.mainSponsor.map(item => {
            return (
              <Col md={ item.size }>
                <a href={"http://" + item.websiteUrl}>
                  <img src={item.logoUrl} class="img-fluid" alt="Main Sponsor"/>
                </a>
              </Col>
            )
          }) }
        </Row>
        <br/>
        <Row className="sponsors justify-content-center">
          { this.state.sponsors.map(item => {
            return (
              <Col md={ item.size }>
                <a href={"http://" + item.websiteUrl}>
                  <img src={item.logoUrl} class="img-fluid" alt="Sponsors" style={{ height: '100px' }}/>
                </a>
              </Col>
            )
          }) }
        </Row>
        <br/>
        <Row className="partners justify-content-center">
          { this.state.partners.map(item => {
            return (
              <Col md={ item.size }>
                <a href={"http://" + item.websiteUrl}>
                  <img src={item.logoUrl} class="img-fluid" alt="Partners" style={{ maxHeight: '100px' }}/>
                </a>
              </Col>
            )
          }) }
        </Row>

      </Container>
    )
  }
}
