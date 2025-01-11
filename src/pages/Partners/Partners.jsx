import React, { useState } from 'react'
import './Partners.css'
import { dataParthnersApplications } from './../../components/data'
import { advantageList } from '../../api/index'
import Application from './../../components/Application/Application'
import Modal from './../../components/Modal/Modal'

export default function Partners() {
    const [modalIsOpenOrderBtn, setmodalIsOpenOrderBtn] = useState(false);

    return (
        <main className="content">
            <Modal isOpen={modalIsOpenOrderBtn} onClose={() => (setmodalIsOpenOrderBtn(false))} />
            <div className="wrapper">
                <h1>Преимущества работы с Northen</h1>
                {
                    advantageList && advantageList.map((item, i) => {
                        return <div key={i} className="parthners-block">
                            <div>
                                <img src={item.image} width={150} alt="image" />
                            </div>
                            <div className="parthners-description">
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
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
