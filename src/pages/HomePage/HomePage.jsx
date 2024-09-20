import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Arrow } from './../../svg/arrow-r.svg'
import { dataWebSolutions, dataTabSolutions, dataAboutSolutions, dataHomeApplications } from './../../components/data'
import { partnerList } from '../../api/index'
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './HomePage.css'

import mainLogo from '../../illustration/aboutLogo.png'

import Statistic from './../../components/Statistic/Statistic'
import Application from './../../components/Application/Application'
import Modal from './../../components/Modal/Modal'

export default function HomePage() {
    const [content, setContent] = useState('dev');
    const [modalIsOpenClientBtn, setModalIsOpenClientBtn] = useState(false);

    const swiper = useSwiper();

    function handleClick(type) {
        setContent(type);
    };

    return (
        <main className="content">
            <Modal isOpen={modalIsOpenClientBtn} onClose={() => (setModalIsOpenClientBtn(false))} />
            <div className="wrapper">
                <div className="content-solution__right-block">
                    <div className="content-solution__web-block">
                        <h2>Web-решения<br />для вашего бизнеса</h2>
                        <ul>
                            {
                                dataWebSolutions.map((item, i) => {
                                    return <li key={i}>
                                        <a className="content-solution__web-link" id={i}>
                                            {item.title}
                                            <Arrow />
                                        </a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="content-solution__develop-block">
                        <div style={{ height: '250px' }}>
                            <div className="content-solution__develop-tabs">
                                <button className={content === 'dev' ? 'is-active' : null} onClick={() => handleClick('dev')}>
                                    Разработка
                                </button>
                                <button className={content === 'sup' ? 'is-active' : null} onClick={() => handleClick('sup')}>
                                    Поддержка
                                </button>
                                <button className={content === 'ret' ? 'is-active' : null} onClick={() => handleClick('ret')}>
                                    Ретейнер
                                </button>
                            </div>
                            <div className="content-solution__develop-text">
                                <p>{dataTabSolutions[content]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-relation relation-slider">
                <div className="content-relation__title-block">
                    <h2>Нам доверяют</h2>
                    <p>Наши решения работают<br />
                        в крупнейших компаниях России и мира:</p>
                </div>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation
                    loop={true}
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                >{
                        partnerList.map((data, i) => {
                            return <SwiperSlide key={i}>
                                <img src={data.image} alt="image" width={300} />
                            </SwiperSlide>
                        })
                    }
                </Swiper>
                <div className="content-trust__button-block">
                    <div className="content-trust__button" onClick={() => setModalIsOpenClientBtn(true)}>
                        <h2 className="content-relation__button_name">Стать Клиентом</h2>
                        <svg className="content-trust__button-shadowleft" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                            <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M37.5651 64.1298L64.1304 37.5645L26.5651 0L-0.000236511 26.5645L37.5651 64.1298Z" fill="url(#paint0_linear_0_2560)"></path>
                            <defs>
                                <linearGradient id="paint0_linear_0_2560" x1="80.163" y1="48.0973" x2="48.0981" y2="80.1627" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#25B2E7"></stop>
                                    <stop offset="1" stopColor="#25B2E7" stopOpacity="0.01"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg className="content-trust__button-svg-adapt" xmlns="http://www.w3.org/2000/svg" width="291" height="88" viewBox="0 0 291 88" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 44L44.0725 88H246.927H247L246.949 87.9781L291 44L246.927 0H44.0725H44L44.0472 0.0253279L0 44Z" fill="#25B2E7"></path>
                        </svg>
                        <svg className="content-trust__button-svg" xmlns="http://www.w3.org/2000/svg" width="371" height="88" viewBox="0 0 371 88" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 44L44.0725 88H326.927H327L326.945 87.9828L371 44L326.927 0H44.0725H44L44.0529 0.0195929L0 44Z" fill="#25B2E7"></path>
                        </svg>
                        <svg className="content-trust__button-shadowright" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                            <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M26.5653 64.1298L0 37.5645L37.5653 0L64.1306 26.5645L26.5653 64.1298Z" fill="url(#paint0_linear_0_2559)"></path>
                            <defs>
                                <linearGradient id="paint0_linear_0_2559" x1="-16.0327" y1="48.0973" x2="16.0322" y2="80.1627" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#25B2E7"></stop>
                                    <stop offset="1" stopColor="#25B2E7" stopOpacity="0.01"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>

            <div className='wrapper'>
                <div className="content-company">
                    <div className="content-company__about">
                        <h2>{dataAboutSolutions.title}</h2>
                        <p style={{ textAlign: 'justify' }}>
                            {dataAboutSolutions.descr}
                        </p>
                        <Link to='/about'>
                            Подробнее о нас
                            <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Shape" fillRule="evenodd" clipRule="evenodd" d="M0 6.29564L19.6116 6.29564L13.3025 0L15.4032 0L22.4 6.99498L15.4032 14H13.3025L19.6116 7.7L0 7.7L0 6.29564Z" fill="#25B2E7"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className="content-company__image">
                        <img src={mainLogo} alt="Norther - web developer company" />
                    </div>
                </div>
            </div>

            <div className='wrapper'>
                < Statistic />
            </div>

            {
                dataHomeApplications.map((data, i) => {
                    return < Application key={i} title={data.title} descrip={data.descr} name={data.nameBtn} call={setModalIsOpenClientBtn} />
                })
            }
        </main >
    )
}
