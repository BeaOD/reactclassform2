import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from "react-bootstrap";
import Class2form from '../src/form/form2'
import User from './form/User'

function App() {
  const [userscontact, setUserscontact] = useState([
    // { name: "kwame", contact: "024", location: "atiko", id: "kk" },
    // { name: "queen", contact: "025", location: "yale", id: "qq" },
    // { name: "tsetse", contact: "026", location: "paris", id: "tt" },
  ]);

  const addContact = (newuser) => {
    //... is spread operator = function is to take a copy of existing state
    setUserscontact([...userscontact, newuser]);
  }
  console.log(userscontact)


  return (
    <>
      <Container>
        <Row>

          <Col>
            {/* passing the addcontact as props to class2form which will add anew user to the state */}
            <Class2form addContact={addContact} />
          </Col>

          <Col>
            <User userscontact={userscontact} />
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default App;
