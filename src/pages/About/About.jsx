import React, { useState } from 'react'
import Statistic from './../../components/Statistic/Statistic'
import Application from './../../components/Application/Application'
import Modal from './../../components/Modal/Modal'
import './About.css'
import aboutLogo from '../../illustration/aboutLogo.png'
import { dataSpecialization, dataTechnology, dataAboutApplications } from './../../components/data'

export default function About() {
    const [modalIsOpenAboutBtn, setModalIsOpenAboutBtn] = useState(false);

    return (
        <main className="content">
            <Modal isOpen={modalIsOpenAboutBtn} onClose={() => (setModalIsOpenAboutBtn(false))} />
            <div className='wrapper'>
                <div className="about-title">
                    О компании
                </div>
                <div className="about-title__img">
                    <img src={aboutLogo} alt="nothen - web developer company" />
                </div>
                <Statistic />
                <div className="about-specialization">
                    <div className="about-specialization__block">
                        <h3>Наша специализация</h3>
                        <div className="about-specialization__items">
                            {dataSpecialization.map((data, index) => {
                                return <div key={index} className="about-specialization__item">
                                    <div className="about-specialization__item-title">
                                        <p>{data.title}</p>
                                        <img src={data.img} alt="image" />
                                    </div>
                                    <div className="about-specialization__item-description">
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="about-technology">
                    <h3>Наши технологии</h3>
                    <div className="about-technology__items">
                        {
                            dataTechnology.map((data, i) => {
                                return <div key={i} className="about-technology__item">
                                    <img src={data.img} alt="image" width={120} height={120} />
                                    <p>{data.title}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="about-technology">
                    <h3>О нашей профессии</h3>
                    <div className="about-video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-cKePJ1ArLI?si=RcmwGbOtsKXhV-8n"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
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
