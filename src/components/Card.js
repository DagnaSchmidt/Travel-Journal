import React from "react"
import "../style.css"

export default function Card(props) {
    return (
        <section className="card">
            <img className="card__img" src={require(`../images/${props.img}`)} alt="place" />
            <div className="card__container">
                <div className="card__place">
                    <i class="fa-solid fa-location-dot"></i>
                    <h4 className="card__place__country">{props.country}</h4>
                    <a href={props.link} className="card__place__link" target="_blank">View on Google Maps</a>
                </div>
                <div className="card__content">
                    <h2 className="card__content__title">{props.place}</h2>
                    <h4 className="card__content__date">{props.date}</h4>
                    <p className="card__content__description">{props.description}</p>
                </div>
            </div>
        </section>
    )
}