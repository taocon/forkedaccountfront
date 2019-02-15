import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import '../App.css';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			accNum: '',
			prize: 0
		}
	}
	render() {
		return(<div id = "loginBox">

				<h1>Account Creation</h1>
				<br/><br/>

				First Name: <input id = 'firstName' type = 'text' required/><br/><br/>
				Last Name: <input id = 'lastName' type = 'text' required/><br/><br/>
				<Button bsStyle="primary" onClick = {this.props.loginButtonClick}>Submit</Button>
				<Link to="/Components/Apartments">Apartments</Link>
				</div>);
	}
}

export default Login;
