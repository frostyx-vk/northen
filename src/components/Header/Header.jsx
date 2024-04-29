import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import { ReactComponent as PhoneIcon } from '../../svg/phone.svg'
import { ReactComponent as TelegramIcon } from '../../svg/telegram.svg'
import logo from '../../illustration/logo.png'


export default function Header() {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className={'header__contacts'}>
                <div className={'header__contacts-logo'}>
                    <Link to='/'>
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
                    <button className={'header__contacts-btn'}>Переключить режим</button>
                </div>
            </div>
            <Nav />
            <div className={'header__order'}>
                <button className={'header-modalbtn'}>
                    Заказать<br />
                    проект
                </button>
            </div>
        </div>
    )
}
