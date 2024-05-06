import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='nav-block'>
            <ul className={"header__nav-list"}>
                <Link to='/about'>
                    О нас
                </Link>
                <Link to='/prices'>
                    Цены
                </Link>
                <Link to='/partners'>
                    Партнёрам
                </Link>
                <Link to='/contacts'>
                    Контакты
                </Link>
                <Link to='https://github.com/frostyx-vk/northen'>
                    Repository
                </Link>
            </ul>
        </div>
    )
}
