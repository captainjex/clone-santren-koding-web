import React from 'react'
import { Jumbotron, Button } from 'reactstrap';

class Hero extends  React.Component {
  render () {
    return (
      <Jumbotron className="text-center">
        <h1 className="display-3">Belajar Jadi Asyik!</h1>
        <p className="lead">Kegiatan Belajar Intensif Programming dan Qur'an bersama Santren Koding.</p>
        <p className="lead">
          <Button color="success">Mulai Belajar</Button>
        </p>
      </Jumbotron>
    )
  }
}

export default Hero
