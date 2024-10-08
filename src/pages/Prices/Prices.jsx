import React, { useState } from 'react'
import { serviceList } from '../../api/index'
import './Prices.css'
import Modal from './../../components/Modal/Modal'


export default function Prices() {
    const [modalIsOpenPricesBtn, setModalIsOpenPricesBtn] = useState(false);

    return (
        <main className="content">
            <Modal isOpen={modalIsOpenPricesBtn} onClose={() => (setModalIsOpenPricesBtn(false))} />
            <div className="wrapper-prices">
                <h1 className="prices-title">Услуги</h1>
                <div className="prices-block">
                    {
                        serviceList && serviceList.map((data, i) => {
                            return <div key={i} className="prices-content">
                                <div className="prices-content__main">
                                    <div className="prices-content__description">
                                        <h2>{data.name}</h2>
                                        <p>{data.description}</p>
                                        <ul>
                                            {
                                                data.works.map((item, i) => {
                                                    return <li key={i}>{item.text}</li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="prices-content__btn-block">
                                        <p className="prices-content__price">от {data.price} руб.</p>
                                        <a className="link-requisition" onClick={() => setModalIsOpenPricesBtn(true)}>Оставить заявку
                                            <svg width="254" height="56" viewBox="0 0 253 56" fill="none">
                                                <path id="Combined Shape" d="M28 55L27.6464 55.3536L27.7929 55.5H28V55ZM1 28L0.646447 27.6464L0.292893 28L0.646447 28.3536L1 28ZM226 55V55.5H226.207L226.354 55.3536L226 55ZM253 28L253.354 28.3536L253.707 28L253.354 27.6464L253 28ZM226 1L226.354 0.646447L226.207 0.5H226V1ZM28 1V0.5H27.7929L27.6464 0.646447L28 1ZM28.3536 54.6464L1.35355 27.6464L0.646447 28.3536L27.6464 55.3536L28.3536 54.6464ZM226 54.5H28V55.5H226V54.5ZM252.646 27.6464L225.646 54.6464L226.354 55.3536L253.354 28.3536L252.646 27.6464ZM225.646 1.35355L252.646 28.3536L253.354 27.6464L226.354 0.646447L225.646 1.35355ZM28 1.5H226V0.5H28V1.5ZM1.35355 28.3536L28.3536 1.35355L27.6464 0.646447L0.646447 27.6464L1.35355 28.3536Z" fill="#25B2E7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </main>
    )
}
