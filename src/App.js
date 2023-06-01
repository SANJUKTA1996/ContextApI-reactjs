import React from "react";
import { CommonContext } from './Components/CommonContext';
import Main from "./Components/Main";
import UpdateButton from "./Components/UpdateButton";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "blue",
    };
  }

  updateColor = (color) => {
    this.setState({
      color: color,
    });
  };

  render() {
    return (
      <>
        <CommonContext.Provider value={{ color: this.state.color, updateColor: this.updateColor }}>
          <Header/>
          {/* <h1>Context API create Easy way</h1> */}
          <Main />
          <UpdateButton/>
          <Footer/>
        </CommonContext.Provider>
      </>
    );
  }
}

export default App;
