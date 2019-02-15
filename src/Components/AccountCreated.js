import React, { Component } from 'react';


import { Button } from 'react-bootstrap';

class AccountCreated extends Component {

  constructor(props){
    super(props);
    this.state = {
      accNum: this.props.accNum,
      prize: this.props.prizeWon,
      windowState: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    if(this.state.prize !== 0){
      this.setState({
        windowState: 1
      });
    }else{
      this.setState({
        windowState:2
      });
    }
  }


  render() {

    const Main = () =>{
      return(
        <div>
          <h1>Account Successfully Created</h1>
          <br/><br/>
          <p>Account No: {this.state.accNum}</p><br/>
          <Button bsStyle="primary" onClick={this.handleClick}>Enter prize draw</Button>
        </div>
      );
    }


    return (
      <div>

      </div>
    );
  }
}

export default AccountCreated;
