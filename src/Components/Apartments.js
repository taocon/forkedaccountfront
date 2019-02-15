import React, { Component } from 'react';

import { BrowserRouter as Router, Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
import {RegisterPageLink} from '../constants.js';


class Apartments extends Component {

    registerAccountPageLoad = () =>{
        window.location.href = RegisterPageLink;
    }

  render() {
    return (

      <div><h1>List of Apartments</h1>
       <ul><li>AP703</li><li>AP1708</li></ul> <br/> <br/>

      </div>
    );
  }
}

export default Apartments;
























