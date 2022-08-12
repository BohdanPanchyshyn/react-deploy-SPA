const Icons = {
   man: "http://simpleicon.com/wp-content/uploads/business-man-3.png",
   woman: "https://icon-library.com/images/woman-icon-png/woman-icon-png-10.jpg",
   dog: "https://cdn2.iconfinder.com/data/icons/creatype-veterinary-and-pet-glyph/64/1_dog_collar_belt_label_pet_collar_tag-512.png",
   phone: "https://cdn-icons-png.flaticon.com/512/15/15886.png",
}

export function checkGender(gender) {
   if (gender === "male") {
      return Icons.man;
   } else if (gender === "female") {
      return Icons.woman;
   } else {
      return Icons.dog;
   }
}

const Contact = ({ firstName, lastName, phone, gender }) => {
   return (
      <div>
         <div className="line"></div>
         <div className="contact">
            <div className="hoverStyleContact">
               <p>
                  <img id="genderImg" src={checkGender(gender)} alt="gender" />
                  <p> {firstName} {lastName}</p>
                  <p className="phone_tag_p">
                     {phone}
                     <img id="genderImg" src={Icons.phone} alt="phone" />
                  </p>
               </p>
            </div>
         </div>
      </div>
   )
}


export default Contact;