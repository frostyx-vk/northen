import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { contactList } from '../../api/index'
import { ReactComponent as PhoneIcon } from '../../svg/phone.svg'
import { ReactComponent as TelegramIcon } from '../../svg/telegram.svg'
import logo from '../../illustration/logo.png'
import Nav from '../Nav/Nav'
import Modal from '../Modal/Modal'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

export default function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [burgerIsOpen, setburgerIsOpen] = useState(false);

    const handlerMenu = () => {
        setburgerIsOpen((prev) => !prev);
    };

    let contact = {
        phone: null,
        telegram: null
      }
    
      if (contactList.length > 0) {
        contact.phone = contactList[0].phone.trim();
        contact.telegram = contactList[0].telegram.trim();
      }

    useEffect(() => {
        if (burgerIsOpen) {
            document.body.style.overflow = 'hidden';

            return () => {
                document.body.style.overflow = 'auto';
            };
        };
    });
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
                        <a href={`tel: ${contact.phone}`}>
                            <PhoneIcon />
                            {contact.phone}
                        </a>
                    </div>
                    <div className={'header__contacts-telegram'}>
                        <a href={`https://${contact.telegram}`} target="_blank" className={'contact'}>
                            <TelegramIcon />
                            {contact.telegram}
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
            {
            burgerIsOpen ? <div onClick={handlerMenu}><span className="burger-close">&times;</span></div> : <div className="burger" onClick={handlerMenu}><span></span></div>
            }
            {
                burgerIsOpen && <BurgerMenu contatPhone={contact.phone} contactTelegram={contact.telegram} handlerMenu={handlerMenu}/>
            }
        </div>
    )
}
