import { Button } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import history from "../../utils/history";
import { Loader, loginAction } from "../../store/actions/action";
import { Login } from "../../components/Login/index";

export class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: "",
    };
  }
  loginAction = (data) => {
    this.setState({ credentials: data });
    this.props.loginAction(data);
  };

  render() {
    return <Login loginStatus={this.props.loginStatus} loginAction={this.loginAction} />;
  }
}
export function mapDispatchToProps(dispatch) {
  return {
    startLoader: () => dispatch(Loader(true)),
    loginAction: (data) => dispatch(loginAction(data)),
  };
}
export function mapStateToProps(state) {
  return state;
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(LoginContainer);
