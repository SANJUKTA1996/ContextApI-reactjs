import React from "react";
import { CommonContext } from "./CommonContext";

class Main extends React.Component {
  render() {
    return (
      <>
        <CommonContext.Consumer>
          {({ color }) =>
           <h1 style={{backgroundColor:color,textAlign:'center',marginTop:'15%'}}>Hello, This is the main page</h1>}
        </CommonContext.Consumer>
      </>
    );
  }
}

export default Main;
