import React from 'react'
import fb from '../assets/fb.svg'
import insta from '../assets/insta.svg'
import tg from '../assets/tg.svg'
import email from '../assets/email.svg'
import whatsapp from '../assets/whatsapp.svg'

const footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <h2 className="title">Связаться со мной</h2>
            <ul className="footer-list">
                <li>
                    <a href="#"><img src={fb} alt=""></img></a>
                </li>
                <li>
                    <a href="#"><img src={insta} alt=""></img></a>
                </li>
                <li>
                    <a href="#"><img src={tg} alt=""></img></a>
                </li>
                <li>
                    <a href="#"><img src={email} alt=""></img></a>
                </li>
                <li>
                    <a href="#"><img src={whatsapp} alt=""></img></a>
                </li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default footer