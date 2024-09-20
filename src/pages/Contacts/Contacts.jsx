import React, { useState } from 'react'
import './Contacts.css'
import Application from './../../components/Application/Application'
import Modal from './../../components/Modal/Modal'
import { dataContactsApplications } from './../../components/data'
import { contactList } from '../../api/index'


export default function Contacts() {
    const [modalIsOpenContansBtn, setModalIsOpenContansBtn] = useState(false);

    return (
        <main className="content">
            <Modal isOpen={modalIsOpenContansBtn} onClose={() => (setModalIsOpenContansBtn(false))} />
            <div className="wrapper">
                <div className="contacts__block">
                    <div className="contacts__title">
                        <h1>Контактная информация</h1>
                    </div>
                    <div className="contacts__content-block">
                        <div className="contacts__content">
                            {   
                                contactList && contactList.map((data, i) => {
                                    return <div className="contacts__office" key={i}>
                                        <h2>{data.address.city}</h2>
                                        <div>
                                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path id="Shape" fillRule="evenodd" clipRule="evenodd"
                                                    d="M0 7C0 12.2 7 20 7 20C7 20 14 12.2 14 7C14 3.1 10.9 0 7 0C3.1 0 0 3.1 0 7ZM4.5 7C4.5 5.6 5.6 4.5 7 4.5C8.4 4.5 9.5 5.6 9.5 7C9.5 8.4 8.4 9.5 7 9.5C5.6 9.5 4.5 8.4 4.5 7Z"
                                                    fill="#25B2E7"></path>
                                            </svg>
                                            {data.address.source}
                                        </div>
                                        <div className="contacts__office-contacts">
                                            <h2>
                                                <a href="tel:{data.phone}" itemProp="telephone">
                                                    <svg width="15" height="20" viewBox="0 0 15 20" fill="#25B2E7">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                            d="M5.0188 17.0639C5.0188 18.168 5.92218 19.0714 7.02632 19.0714C8.13045 19.0714 9.03383 18.168 9.03383 17.0639C9.03383 15.9598 8.13045 15.0564 7.02632 15.0564C5.92218 15.0564 5.0188 15.9598 5.0188 17.0639ZM0 2.00752C0 3.11165 0.903383 4.01504 2.00752 4.01504C3.11165 4.01504 4.01504 3.11165 4.01504 2.00752C4.01504 0.903383 3.11165 0 2.00752 0C0.903383 0 0 0.903383 0 2.00752ZM0 7.02632C0 8.13045 0.903383 9.03383 2.00752 9.03383C3.11165 9.03383 4.01504 8.13045 4.01504 7.02632C4.01504 5.92218 3.11165 5.0188 2.00752 5.0188C0.903383 5.0188 0 5.92218 0 7.02632ZM0 12.0451C0 13.1492 0.903383 14.0526 2.00752 14.0526C3.11165 14.0526 4.01504 13.1492 4.01504 12.0451C4.01504 10.941 3.11165 10.0376 2.00752 10.0376C0.903383 10.0376 0 10.941 0 12.0451ZM14.0526 2.00752C14.0526 0.903383 13.1492 0 12.0451 0C10.941 0 10.0376 0.903383 10.0376 2.00752C10.0376 3.11165 10.941 4.01504 12.0451 4.01504C13.1492 4.01504 14.0526 3.11165 14.0526 2.00752ZM5.0188 12.0451C5.0188 13.1492 5.92218 14.0526 7.02632 14.0526C8.13045 14.0526 9.03383 13.1492 9.03383 12.0451C9.03383 10.941 8.13045 10.0376 7.02632 10.0376C5.92218 10.0376 5.0188 10.941 5.0188 12.0451ZM10.0376 12.0451C10.0376 13.1492 10.941 14.0526 12.0451 14.0526C13.1492 14.0526 14.0526 13.1492 14.0526 12.0451C14.0526 10.941 13.1492 10.0376 12.0451 10.0376C10.941 10.0376 10.0376 10.941 10.0376 12.0451ZM10.0376 7.02632C10.0376 8.13045 10.941 9.03383 12.0451 9.03383C13.1492 9.03383 14.0526 8.13045 14.0526 7.02632C14.0526 5.92218 13.1492 5.0188 12.0451 5.0188C10.941 5.0188 10.0376 5.92218 10.0376 7.02632ZM5.0188 7.02632C5.0188 8.13045 5.92218 9.03383 7.02632 9.03383C8.13045 9.03383 9.03383 8.13045 9.03383 7.02632C9.03383 5.92218 8.13045 5.0188 7.02632 5.0188C5.92218 5.0188 5.0188 5.92218 5.0188 7.02632ZM5.0188 2.00752C5.0188 3.11165 5.92218 4.01504 7.02632 4.01504C8.13045 4.01504 9.03383 3.11165 9.03383 2.00752C9.03383 0.903383 8.13045 0 7.02632 0C5.92218 0 5.0188 0.903383 5.0188 2.00752Z"></path>
                                                    </svg>
                                                    {data.phone}</a>
                                            </h2>
                                            <h2>
                                                <a href="mailto:{data.email}" className="contact" itemProp="email">
                                                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd"
                                                            d="M20 2L18 0L16 2L14 0L12 2L10 0L8 2L6 0L4 2L2 0L0 2L2 4L0 6L2 8L0 10L2 12L0 14L2 16L4 14L6 16L8 14L10 16L12 14L14 16L16 14L18 16L20 14L18 12L20 10L18 8L20 6L18 4L20 2ZM10 11L4 6V4L10 8L16 4V6L10 11Z"
                                                            fill="#25B2E7"></path>
                                                    </svg>
                                                    {data.email}</a>
                                            </h2>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9f144daf1f0f945f92a855cb2eb1a4d45d2c28e4a1af4cd135591ce3940b3856&amp;source=constructor"
                            width="656" height="400" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
            {
                dataContactsApplications.map((data, i) => {
                    return <Application key={i} title={data.title} descrip={data.descr} name={data.nameBtn} call={setModalIsOpenContansBtn} />
                })
            }
        </main>
    )
}
