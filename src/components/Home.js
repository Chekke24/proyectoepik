import React from "react";
import epikLogo from "../assets/epikLogo.jpg";
// import wsp from "../wsp/css/instagram.css";


const Home = () => {
  return (
    <div>
      
      <input type="checkbox" id="btn-nav" className="checkbox"></input>
      <header>
          <div className="header-container">
            <img className="header-logo" src={epikLogo} ></img>
            <label for="btn-nav" class="btn-label">
              <div className="header-button"></div>
          </label>
          </div>
    </header>
    
    <nav className="menu">
      <ul className="options">
        <li className="li2"><a href="https://api.whatsapp.com/send?phone=3434602638" target="_blank">WHATSAPP</a></li>
        <li className="li3"><a href="https://instagram.com/epikburgerpna?igshid=YmMyMTA2M2Y=" target="_blank">INSTAGRAM</a></li>
        
      </ul>


           
    </nav><br></br><br></br><br></br><br></br><br></br><br></br>
      <h1 className='App-title'>¿QUIENES SOMOS?</h1>
      <h3 className="App-subtitle">Somos una hamburgueseria joven con el sueño de crecer y darnos a conocer dia a dia un poco mas.
       Creada a partir de la idea de dos amigos que con esfuerzo, compromiso y dedicación logramos emprender este viaje hacia un proyecto
       anhelado el cual esta avocado a ofrecer productos y servicios de calidad para quienes nos den
        la oportunidad de ser nuestros clientes.</h3>
       <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       <h4 className="Select">NUESTRAS EPIK (TAMBIEN VEGGIE):</h4><br></br><br></br>


       {/* <a className="btn-wsp" href="https://api.whatsapp.com/send?phone=3434602638" target="_blank"></a><i className="icon-wsp"></i> */}

       
       </div>
       
  )
}
export default Home;