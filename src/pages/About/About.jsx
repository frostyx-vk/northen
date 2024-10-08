import React, { useState } from 'react'
import Statistic from './../../components/Statistic/Statistic'
import Application from './../../components/Application/Application'
import Modal from './../../components/Modal/Modal'
import './About.css'
import aboutLogo from '../../illustration/aboutLogo.png'
import { dataAboutApplications } from './../../components/data'
import { specilaizationList, technologyList } from '../../api/index'

export default function About() {
    const [modalIsOpenAboutBtn, setModalIsOpenAboutBtn] = useState(false);

    return (
        <main className="content">
            <Modal isOpen={modalIsOpenAboutBtn} onClose={() => (setModalIsOpenAboutBtn(false))} />
            <div className='wrapper'>
                <div className="about-title">
                    <h2>О компании</h2>
                </div>
                <div className="about-title__img">
                    <img src={aboutLogo} alt="nothen - web developer company" />
                </div>
                <Statistic />
                <div className="about-specialization">
                    <div className="about-specialization__block">
                        <h3>Наша специализация</h3>
                        <div className="about-specialization__items">
                            {
                                specilaizationList.map((data, index) => {
                                    return <div key={index} className="about-specialization__item">
                                        <div className="about-specialization__item-title">
                                            <p>{data.name}</p>
                                            <img src={data.image} alt="image"/>
                                        </div>
                                        <div className="about-specialization__item-description">
                                            <p>{data.description}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="about-technology">
                    <h3>Наши технологии</h3>
                    <div className="about-technology__items">
                        {
                            technologyList.map((data, i) => {
                                return <div key={i} className="about-technology__item">
                                    <img src={data.image} alt="image" width={120} height={120} />
                                    <p>{data.name}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="about-technology">
                    <h3>О нашей профессии</h3>
                    <div className="about-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-cKePJ1ArLI?si=RcmwGbOtsKXhV-8n"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
            {
                dataAboutApplications.map((data, i) => {
                    return <Application key={i} title={data.title} descrip={data.descr} name={data.nameBtn} call={setModalIsOpenAboutBtn} />
                })
            }
        </main>
    )
}
