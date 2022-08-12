import { Component } from "react";
import Contracts from "../../components/contacts/Contracts";
import "./users.css";

export default class UsersPage extends Component {
   render() {
      return (
         <div >
            <div className="pageusr">
               <Contracts />
            </div>
         </div>
      )
   }
}