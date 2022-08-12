import { Component } from "react";
import "./photoPage.css";


const photo = {
   audi_r8: require("./img/audi_r8.jpg"),
   audi_r8_2: require("./img/audi_r8_2.jpg"),
   audi_rs6: require("./img/audi_rs6.jpg"),
   audi_rs6_2: require("./img/audi_rs6_2.jpg"),
   audi_rs6_salon: require("./img/audi_rs6_salon.jpg"),
   audi_rs6_salon_2: require("./img/audi_rs6_salon_2.jpg"),
   audi_r8_salon: require("./img/audi_r8_salon.jpg"),
   audi_r8_salon_2: require("./img/audi_r8_salon_2.jpg"),

};



export default class PhotoPage extends Component {
   render() {
      return (
         <div className="backPhoto">
            <div className="photoStyle">
               <div className="blockphoto">
                  <span className="nameCar">AUDI R8</span>
                  <img className="photoSize" src={photo.audi_r8} />
               </div>
               <div className="blockphoto">
                  <span className="nameCar">AUDI R8</span>
                  <img className="photoSize" src={photo.audi_r8_2} />
               </div>
               <div className="blockphoto">
                  <span className="nameCar">AUDI RS 6</span>
                  <img className="photoSize" src={photo.audi_rs6} />
               </div>
               <div className="blockphoto">
                  <span className="nameCar">AUDI RS 6</span>
                  <img className="photoSize" src={photo.audi_rs6_2} />
               </div>
               <div className="blockphoto">
                  <span className="nameCar">AUDI R8 salon</span>
                  <img className="photoSize" src={photo.audi_r8_salon} />
               </div>
               <div className="blockphoto">
                  <span className="nameCar">AUDI R8 salon</span>
                  <img className="photoSize" src={photo.audi_r8_salon_2} />
               </div>
               <div className="blockphoto">
                  <span className="nameCar">AUDI RS 6 salon</span>
                  <img className="photoSize" src={photo.audi_rs6_salon} />
               </div>
               <div className="blockphoto">
                  <span className="nameCar">AUDI RS 6 salon</span>
                  <img className="photoSize" src={photo.audi_rs6_salon_2} />
               </div>
            </div>
         </div>
      )
   }
}