import React from 'react'
import AllPageContact from './AllPageContact'

function Exhibition() {
    return (
        <div className="other-container">
            <div className="big-container">
                <h1 className="h1-height">EXHIBITION</h1>
                <p className="p-height extra-padding-right-container font-size-20 color-brown">
                    An exhibition is a public event at which pictures, sculptures, or other objects of interest are displayed, for example at a museum or art gallery.
                </p>
            </div>

            <div className="small-container exhibition-bg">
                <h2 className="color-gold h1-height">WHO CAN PARTICIPATE ?</h2>
                <ul className="ul-color-white">
                    <li>Why consistent writing makes you a better designer</li>
                    <li>5 soft skills every product designer should master</li>
                    <li>The UX Writing Starter-Kit</li>
                </ul>
            </div>

            <AllPageContact />
        </div>
    )
}

export default Exhibition