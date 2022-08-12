import { Component } from "react";

export default class HomePage extends Component {
   render() {
      return (
         <div className="homepage">
            <div >
               <div className="homepage-block">
                  <p className="styleTextH1">AUDI</p>
               </div>
               <div className="homepage-block2">
                  <p className="styleTextH2">RS-6</p>
               </div>
               <div className="homepage-block2">
                  <div className="blockLine">
                     <div id="line" className="lineFirst">
                     </div>
                     <div id="line" className="lineSecond">
                     </div>
                     <div id="line">
                     </div>
                  </div>
                  <p className="styleTextH3">Sport editions</p>
               </div>
            </div>

         </div>
      )
   }
}