import React, { Component } from 'react';

import { BrowserRouter as Router, Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
import {RegisterPageLink} from '../constants.js';


class HomePage extends Component {

    registerAccountPageLoad = () =>{
        window.location.href = RegisterPageLink;
    }

  render() {
    return (

      <div>
       <header><h1>Apartment Prototype</h1></header> <br/> <br/>

          <ul><li>Reg/Login to view</li></ul>

            <br/> <br/><br/> <br/>
            <Button bsStyle = "primary" onClick = {this.registerAccountPageLoad}>Register</Button>

      </div>
    );
  }
}

export default HomePage;
