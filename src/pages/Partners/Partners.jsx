import React, { useState } from 'react'
import './Partners.css'
import { dataParthners, dataParthnersApplications } from './../../components/data'
import Application from './../../components/Application/Application'
import Modal from './../../components/Modal/Modal'

export default function Partners() {
    const [modalIsOpenOrderBtn, setmodalIsOpenOrderBtn] = useState(false);

    return (
        <main className="content">
            <Modal isOpen={modalIsOpenOrderBtn} onClose={() => (setmodalIsOpenOrderBtn(false))} />
            <div className="wrapper">
                <h1>Патнерство с Northen</h1>
                {
                    dataParthners.map((item, i) => {
                        return <div key={i} className="parthners-block">
                            <div>
                                <img src={item.img} width={150} alt="image" />
                            </div>
                            <div className="parthners-description">
                                <h2>{item.title}</h2>
                                <p>{item.descr}</p>
                            </div>
                        </div>
                    })
                }
            </div>
            {
                dataParthnersApplications.map((data, i) => {
                    return <Application key={i} title={data.title} descrip={data.descr} name={data.nameBtn} call={setmodalIsOpenOrderBtn}/>
                })
            }
        </main>
    )
}
