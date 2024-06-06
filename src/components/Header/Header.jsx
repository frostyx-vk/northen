import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { ReactComponent as PhoneIcon } from '../../svg/phone.svg'
import { ReactComponent as TelegramIcon } from '../../svg/telegram.svg'
import logo from '../../illustration/logo.png'
import Nav from '../Nav/Nav'
import Modal from '../Modal/Modal'

export default function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div className='header-block'>
            <div className={'header__contacts'}>
                <div className={'header__contacts-logo'}>
                    <Link to='/northen'>
                        <img src={logo} alt="image" />
                    </Link>
                </div>
                <div className={'header__contacts-block'}>
                    <div className={'header__contacts-tel'}>
                        <a href="tel:+79233206666">
                            <PhoneIcon />
                            +7 (923) 320-6666
                        </a>
                    </div>
                    <div className={'header__contacts-telegram'}>
                        <a href="https://t.me/fro_styx" className={'contact'}>
                            <TelegramIcon />
                            t.me/northen
                        </a>
                    </div>
                </div>
            </div>
            <Nav />
            <div className={'header__order'}>
                <button className={'header-modalbtn'} onClick={() => setModalIsOpen(true)}>
                    Заказать<br />
                    проект
                </button>

                <Modal isOpen={modalIsOpen} onClose={() => (setModalIsOpen(false))} />
            </div>
            <div className="burger">
                <span></span>
            </div>
        </div>
    )
}
