import React from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

class Kajian extends React.Component {
  state = {
    cards: [
      {
        imgUrl: 'https://lh3.googleusercontent.com/XLlyoc7OLR2dgFdnhKk-83-6_kxoTXu-6RyPcUiFc_UiSwZmuIvibNfS307Crb3IcFSbPjq1EdHNIknl-_4N5QAVpBFAZmGeC3d6ZMLwng5eAhnKBnoD1V-pcItiFukHZIq0UgA62NvO_Yg',
        title: 'Kajian Koding #3',
        text: 'ReactJS dan Firebase Auth/Hosting',
        smallText: 'by Santren Koding'
      }, {
        imgUrl: 'https://lh5.googleusercontent.com/-JajpG87BjXAxqMCAu7bs_Bb-c84GUdFtG9w0mNB_dQ1oaOnT3aRYYllYr9tHnB-rLJ8ZxpOHA=w2381',
        title: 'Kajian Koding #2',
        text: 'html, css, boostrap dasar',
        smallText: 'by Santren Koding'
      }, {
        imgUrl: 'https://lh5.googleusercontent.com/Nw8x_CE9s4N8WGggkhxit5nHdo8j03kr0daRbRTRhduOtJzwmaw3h-iR0T4iBiXrEyQqN-q_VA=w3572',
        title: 'Kajian Koding #1',
        text: 'Belajar Laravel Dasar',
        smallText: 'by Santren Koding'
      }
    ]
  }

  render() {
    return (
      <Container>
        <h1 className="title text-center">Daftar Kajian Koding Rutin</h1>
        <Row>
          { this.state.cards.map(item => {
            return (
              <Col md="4">
                <Card>
                  <CardImg top width="100%" src={ item.imgUrl }></CardImg>
                  <CardBody>
                    <CardTitle>{ item.title }</CardTitle>
                    <CardText>{ item.text }</CardText>
                    <CardText>
                      <small className="text-muted">{ item.smallText }</small>
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            )
          }) }
        </Row>
      </Container>
    )
  }
}

export default Kajian
