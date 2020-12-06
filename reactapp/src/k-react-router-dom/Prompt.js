import React, {Component} from "react";
import RouterContext from "./RouterContext";

export default class Prompt extends Component {

  static contextType = RouterContext;
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const history = this.context.history;
    this.unblock =history.block(this.props.message);
  }

  componentWillUnmount() {
    this.unblock();
  }

  render() {
    return null;
  }
}
