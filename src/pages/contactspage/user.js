import { Component } from "react";
import users from "../../components/contacts/data/list_contacts";
import "./user.css";
import { checkGender } from "../../components/contacts/Contract";


export default class UserPage extends Component {

   render() {

      const index = this.props.match.params.id;
      const user = users.find(el => el.id === +index);
      return (
         <div>
            <div className="containerUser">
               <div className="userBlock">
                  <img id="genderImgUser" src={checkGender(user.gender)} alt="genderUser" />
                  <p >Name: {user.firstName} {user.lastName}</p>
                  <p >Phone: {user.phone}</p>
                  <p >University: {user.university}</p>
                  <p >Description: {user.description}</p>
               </div>
            </div>
         </div>
      )
   }
}