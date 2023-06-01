
import React from "react";
import { CommonContext } from "./CommonContext";

class Footer extends React.Component {
  render() {
    return (
      <>
        <CommonContext.Consumer>
          {({ color }) =>
          <h1  style={{backgroundColor:color,position:'absolute',bottom:0,margin:0,width:'100%',textAlign:'center'}}>Footer page</h1>}

        </CommonContext.Consumer>
      </>
    );
  }
}

export default Footer;

