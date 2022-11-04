import React from "react";
import arturica from "../assets/ARTURICA.jpeg";
import camelot from "../assets/CAMELOT.jpeg";
import epika from "../assets/EPIKA.jpeg";
import ginebra from "../assets/GINEBRA.jpeg";
import lancelot from "../assets/LANCELOT.jpeg";
import morgana from "../assets/MORGANA.jpeg";
import percebal from "../assets/PERCEBAL.jpeg";
import tom from "../assets/TOM.jpeg";
import "./Carrousel.css";


const carrousel = () => {
  return (
    <div className="carrousel">
        {/* lancelot */}
        <article className="card">
            <img src={lancelot} alt="lancelot" className="card__img"></img>
            <div className="card__data">
                <h2 className="card__title">LANCELOT</h2>
                <p className="card__description">BURGER | KETCHUP | MOSTAZA | CEB_MORADA | PEPINILLOS | BACON | CHEDDAR</p>
                <a href="#" className="card_btn"></a>
            </div>
        </article>
        {/* arturica */}
        <article className="card">
            <img src={arturica} alt="arturica" className="card__img"></img>
            <div className="card__data">
                <h2 className="card__title">ARTURICA</h2>
                <p className="card__description">BURGER | LECHUGA | TOMATE | CHEDDAR | MAYONESA</p>
                <a href="#" className="card_btn"></a>
            </div>
        </article>
        {/* camelot */}
        <article className="card">
            <img src={camelot} alt="camelot" className="card__img"></img>
            <div className="card__data">
                <h2 className="card__title">CAMELOT</h2>
                <p className="card__description">BURGER | MAYONESA DE OLIVA | TOMATE FRESCO EN RODAJAS | CHEDDAR</p>
                <a href="#" className="card_btn"></a>
            </div>
        </article>
        {/* epika */}
        <article className="card">
            <img src={epika} alt="epika" className="card__img"></img>
            <div className="card__data">
                <h2 className="card__title">EPIKA</h2>
                <p className="card__description">BURGER | BACON | CHEDDAR | BARBACOA</p>
                <a href="#" className="card_btn"></a>
            </div>
        </article>
        {/* ginebra */}
        <article className="card">
            <img src={ginebra} alt="ginebra" className="card__img"></img>
            <div className="card__data">
                <h2 className="card__title">GINEBRA</h2>
                <p className="card__description">BURGER | ALIOLI | CEBOLLA CRISPY | CHEDDAR</p>
                <a href="#" className="card_btn"></a>
            </div>
        </article>
        {/* morgana */}
        <article className="card">
            <img src={morgana} alt="morgana" className="card__img"></img>
            <div className="card__data">
                <h2 className="card__title">MORGANA</h2>
                <p className="card__description">BURGER | BACON | CHEDDAR | BARBACOA | COLESLAW | SALSA CESAR</p>
                <a href="#" className="card_btn"></a>
            </div>
        </article>
        {/* percebal */}
        <article className="card">
            <img src={percebal} alt="percebal" className="card__img"></img>
            <div className="card__data">
                <h2 className="card__title">PERCEBAL</h2>
                <p className="card__description">BURGER | MOSTAZA | KETCHUP | CEBOLLA FRESCA | CHEDDAR</p>
                <a href="#" className="card_btn"></a>
            </div>
        </article>
        {/* tom */}
        <article className="card">
            <img src={tom} alt="tom" className="card__img"></img>
            <div className="card__data">
                <h2 className="card__title">TOM</h2>
                <p className="card__description">BURGER | CHEDDAR</p>
                <a href="#" className="card_btn"></a>
            </div>
        </article>
        
    </div>
  )
}
export default carrousel