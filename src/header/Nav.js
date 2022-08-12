import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css"


export default class Nav extends Component {

   render() {
      return (
         <div className="header">
            <ul className="header-ul">
               <li><NavLink to="/" className="unselected" exact activeClassName="selected">Home</NavLink></li>
               <li><NavLink to="/posts" className="unselected" activeClassName="selected">Posts</NavLink></li>
               <li><NavLink to="/photo" className="unselected" activeClassName="selected">Photo</NavLink></li>
               <li><NavLink to="/contacts" className="unselected" activeClassName="selected">Contacts</NavLink></li>
            </ul>
         </div >
      )
   }
}