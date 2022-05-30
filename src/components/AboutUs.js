import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./AboutUs.css";


function AboutUs() {
  return (
    <>
      <Header />
      <div className="row">
        <div class="col-sm-6">
            
          <img src="https://wegotthiscovered.com/wp-content/uploads/2022/05/Spy-x-Family-anya.png"/> 
          <p>Hello World, ByeBye World.</p>
        </div>
        <div class="col-sm-6">
          
            <ul>
              Pituchai Mitpakdee, Education
              <li>Computer Science at KMUTT (College)</li>
              <li>Student at Potisarn Pittayakorn School (High School)</li>
              <li>Bharat Vidtayarai School (primary School)</li>
            </ul>

            <ul>
                3 favorite subjects 
                <li>Computer, because I can a game in that class</li>
                <li>Chemical. it's easy for me, because My father is fertilizer scientist</li>
                <li>English, I can talk to everyone in the world</li>
            </ul>

            <ul>
                3 favorite movies 
                <li>Vikings, King Ragnar declare a war to everyone</li>
                <li>Peaky Blinders, Gangster in England</li>
                <li>3 idiots, 3 best friend study together  </li>
            </ul>
          
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
