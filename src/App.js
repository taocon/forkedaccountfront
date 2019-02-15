import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import './App.css';
import axios from "axios";
import { BaseURL, PathToCreateAccount, LinkAccountNumGen, LinkRegister } from './constants'
import Login from "./Components/loginPage";
import AccountCreated from "./Components/AccountCreated";
import HomePage from "./Components/HomePage";
import Apartments from "./Components/Apartments";


class App extends Component {
  constructor(props) {
		super(props);

		this.state = {
			accNum: '',
			prize: 0
		}
  }

  handleClick = () => {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    if(firstName.trim()===""||lastName.trim()===""){
    alert("invalid input");
    }else{
    //   axios.post(BaseURL+PathToCreateAccount,
		// {
		// 	firstName: firstName,
		// 	lastName: lastName
		// }).then( (response) => {
      // this.setState({
			// 	accNum: response.data.accountNumber,
			// 	prize: response.data.prize.prizeAmount
			// });
      console.log("test")
			document.getElementById("generateNum").click();

    // })
    }
	}

  render() {
    return (
      <Router>
      <div className = "App">
        <center>

        
       
        <Route exact path="/" component = {HomePage}  />
        <Route path={LinkRegister}  render={(...props) => <Login loginButtonClick={this.handleClick} />} />
        <Route path={LinkAccountNumGen}  render={(...props) => <AccountCreated accNum={this.state.accNum} prizeWon={this.state.prize}/>} />
        
        <Route exact path="/Components/Apartments" component = {Apartments} />
</center>
      </div>
      </Router>
    );
  }
}

export default App;
