import React from "react"
import "../style.css"

export default function Main() {
    return (
        <section className="main">
            <img src={require('../images/grid.png')} alt="grid of random photos" className="main__img" />
            <h1 className="main__title">Online Experiences</h1>
            <p className="main__text">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}