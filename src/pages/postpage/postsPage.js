import { Component } from "react";
import Post from "../../components/post/post"



const KEVIN_IMAGE = "https://media.vanityfair.com/photos/5c0afeb5c7c61667c1914394/master/w_2560%2Cc_limit/kevin-hart-tweets.jpg";
const DOG_IMAGE = "https://cdn.bhdw.net/im/smishniy-chorniy-pes-plavaie-shpalery-84161_w635.webp";
const JASON_IMAGE = "https://st2.depositphotos.com/1814084/7685/i/450/depositphotos_76857251-stock-photo-jason-statham-actor.jpg";
const contentImageJASON = "https://wallpaperaccess.com/full/1585518.jpg";
const contentImageKEVIN = "https://a.d-cd.net/4E0sS4NNoiEI91JoyZXJCkpylnM-960.jpg";
const contentImageDOG = "https://ic.pics.livejournal.com/alena_kotovich/71622990/25487/25487_600.jpg";

export default class PostsPage extends Component {
   render() {
      return (
         <div>
            <div className="postStyle">
               <Post author={{
                  name: "Jason Statham",
                  photo: JASON_IMAGE,
                  nickname: "@statham"
               }}
                  content="It`s, my great baby..."
                  image={contentImageJASON}
                  date={"31 лип."}
               />
               <Post author={{
                  name: "Kevin Hart",
                  photo: KEVIN_IMAGE,
                  nickname: "@kev_hart"
               }}
                  content="Ooyyyy shit, @statham, it`s beautiful car, now look at my black doll!"
                  image={contentImageKEVIN}
                  date={"18 лют."}
               />
               <Post author={{
                  name: "Пес",
                  photo: DOG_IMAGE,
                  nickname: "@BIG_BOSS"
               }}
                  content="Гав Гав Гав..."
                  image={contentImageDOG}
                  date={"18 черв."}
               />
            </div>
         </div>
      )
   }
}