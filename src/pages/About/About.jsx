import React from 'react'
import Statistic from './../../components/Statistic/Statistic'
import './About.css'
import aboutLogo from '../../illustration/aboutLogo.png'
import { dataSpecialization } from './../../components/data'
import { dataTechnology } from './../../components/data'

export default function About() {
    return (
        <main className="content">
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
            </div>
        </main>
    )
}
