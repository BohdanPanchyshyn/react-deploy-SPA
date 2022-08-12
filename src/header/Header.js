import { Component } from "react";
import Nav from "./Nav";
import "./style.css";
import "../pages/homepage/homepage.css";
import audiLogo from "./img/audi-logo.png"

export default class Header extends Component {
   render() {
      return (
         <div >
            <img className="logo" src={audiLogo} />
            <Nav />
         </div>
      )
   }
}