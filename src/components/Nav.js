import React from "react"
import "../style.css"

export default function Nav() {
    return (
        <nav className="nav">
            <img src={require("../images/logo-journal.png")} alt="journal logo" className="nav__img" />
            <h3 className="nav__title">my travel journal.</h3>
        </nav>
    )
}