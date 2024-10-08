import React, { useState } from 'react'
import './Footer.css'
import footLog from '../../illustration/footLog.png'
import Modal from './../Modal/Modal'
import Nav from '../Nav/Nav'
import { contactList } from '../../api/index'

export default function Footer() {
  const [modalIsOpenFooterBtn, setModalIsOpenFooterBtn] = useState(false);

  let contact = {
    phone: null,
    email: null,
    telegram: null
  }

  if (contactList.length > 0) {
    contact.phone = contactList[0].phone.trim();
    contact.email = contactList[0].email.trim();
    contact.telegram = contactList[0].telegram.trim();
  }

  return (
    <div className='footer'>
      <Modal isOpen={modalIsOpenFooterBtn} onClose={() => (setModalIsOpenFooterBtn(false))} />
      <div className={"footer-content"}>
        <div className={"footer-content__logo-block"}>
          <img src={footLog} alt="" />
          <div className={"footer-content__logo-contact"}>
            <a href={`tel: ${contact.phone}`}>
              <svg width="15" height="20" viewBox="0 0 15 20" fill="#25B2E7">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.0188 17.0639C5.0188 18.168 5.92218 19.0714 7.02632 19.0714C8.13045 19.0714 9.03383 18.168 9.03383 17.0639C9.03383 15.9598 8.13045 15.0564 7.02632 15.0564C5.92218 15.0564 5.0188 15.9598 5.0188 17.0639ZM0 2.00752C0 3.11165 0.903383 4.01504 2.00752 4.01504C3.11165 4.01504 4.01504 3.11165 4.01504 2.00752C4.01504 0.903383 3.11165 0 2.00752 0C0.903383 0 0 0.903383 0 2.00752ZM0 7.02632C0 8.13045 0.903383 9.03383 2.00752 9.03383C3.11165 9.03383 4.01504 8.13045 4.01504 7.02632C4.01504 5.92218 3.11165 5.0188 2.00752 5.0188C0.903383 5.0188 0 5.92218 0 7.02632ZM0 12.0451C0 13.1492 0.903383 14.0526 2.00752 14.0526C3.11165 14.0526 4.01504 13.1492 4.01504 12.0451C4.01504 10.941 3.11165 10.0376 2.00752 10.0376C0.903383 10.0376 0 10.941 0 12.0451ZM14.0526 2.00752C14.0526 0.903383 13.1492 0 12.0451 0C10.941 0 10.0376 0.903383 10.0376 2.00752C10.0376 3.11165 10.941 4.01504 12.0451 4.01504C13.1492 4.01504 14.0526 3.11165 14.0526 2.00752ZM5.0188 12.0451C5.0188 13.1492 5.92218 14.0526 7.02632 14.0526C8.13045 14.0526 9.03383 13.1492 9.03383 12.0451C9.03383 10.941 8.13045 10.0376 7.02632 10.0376C5.92218 10.0376 5.0188 10.941 5.0188 12.0451ZM10.0376 12.0451C10.0376 13.1492 10.941 14.0526 12.0451 14.0526C13.1492 14.0526 14.0526 13.1492 14.0526 12.0451C14.0526 10.941 13.1492 10.0376 12.0451 10.0376C10.941 10.0376 10.0376 10.941 10.0376 12.0451ZM10.0376 7.02632C10.0376 8.13045 10.941 9.03383 12.0451 9.03383C13.1492 9.03383 14.0526 8.13045 14.0526 7.02632C14.0526 5.92218 13.1492 5.0188 12.0451 5.0188C10.941 5.0188 10.0376 5.92218 10.0376 7.02632ZM5.0188 7.02632C5.0188 8.13045 5.92218 9.03383 7.02632 9.03383C8.13045 9.03383 9.03383 8.13045 9.03383 7.02632C9.03383 5.92218 8.13045 5.0188 7.02632 5.0188C5.92218 5.0188 5.0188 5.92218 5.0188 7.02632ZM5.0188 2.00752C5.0188 3.11165 5.92218 4.01504 7.02632 4.01504C8.13045 4.01504 9.03383 3.11165 9.03383 2.00752C9.03383 0.903383 8.13045 0 7.02632 0C5.92218 0 5.0188 0.903383 5.0188 2.00752Z"></path>
              </svg>
              {contact.phone}
            </a>
          </div>
          <a className={"footer-content__logo-callme"}>
            Перезвоните мне
          </a>
        </div>

        <div className="footer-nav">
          <Nav />
        </div>

        <div className={"footer-content__order-block"}>
          <a className={"footer-content__order-btn"} onClick={() => setModalIsOpenFooterBtn(true)}>Оставить заявку
            <svg width="254" height="56" viewBox="0 0 253 56" fill="none">
              <path id="Combined Shape" d="M28 55L27.6464 55.3536L27.7929 55.5H28V55ZM1 28L0.646447 27.6464L0.292893 28L0.646447 28.3536L1 28ZM226 55V55.5H226.207L226.354 55.3536L226 55ZM253 28L253.354 28.3536L253.707 28L253.354 27.6464L253 28ZM226 1L226.354 0.646447L226.207 0.5H226V1ZM28 1V0.5H27.7929L27.6464 0.646447L28 1ZM28.3536 54.6464L1.35355 27.6464L0.646447 28.3536L27.6464 55.3536L28.3536 54.6464ZM226 54.5H28V55.5H226V54.5ZM252.646 27.6464L225.646 54.6464L226.354 55.3536L253.354 28.3536L252.646 27.6464ZM225.646 1.35355L252.646 28.3536L253.354 27.6464L226.354 0.646447L225.646 1.35355ZM28 1.5H226V0.5H28V1.5ZM1.35355 28.3536L28.3536 1.35355L27.6464 0.646447L0.646447 27.6464L1.35355 28.3536Z" fill="#25B2E7"></path>
            </svg>
          </a>
          <div className={"footer-content__order-contacts"} itemScope="" itemType="https://schema.org/Organization">
            <div>
              <a href={`mailto:${contact.email}`} className={"contact"} itemProp="email">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20 2L18 0L16 2L14 0L12 2L10 0L8 2L6 0L4 2L2 0L0 2L2 4L0 6L2 8L0 10L2 12L0 14L2 16L4 14L6 16L8 14L10 16L12 14L14 16L16 14L18 16L20 14L18 12L20 10L18 8L20 6L18 4L20 2ZM10 11L4 6V4L10 8L16 4V6L10 11Z" fill="#25B2E7"></path>
                </svg>
                {contact.email}
              </a>
            </div>
            <div>
              <a href={`https://${contact.telegram}`} target="_blank" className={"contact"}>
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.851418 6.34192L17.0068 0.101298C17.7446 -0.234097 18.4568 0.27891 18.1751 1.40989L15.424 14.394C15.232 15.3168 14.6751 15.5375 13.9039 15.1114L9.71276 12.0101L9.63016 12.0905C8.67948 13.0163 7.8426 13.8312 7.69828 13.9726C7.69311 13.9777 7.68796 13.9827 7.68282 13.9877C7.45643 14.2094 7.26951 14.3925 6.85957 14.3925C6.43402 14.3925 6.39851 14.2664 6.31301 13.9627C6.28937 13.8787 6.2619 13.7811 6.22129 13.6689L4.67963 8.93507L0.650439 7.67557C-0.24467 7.40092 -0.251209 6.78499 0.851418 6.34192ZM14.3938 2.90721L5.31196 8.6457L6.84235 13.3447L7.14514 10.1103L14.9215 3.08332C15.2629 2.77989 14.8472 2.63184 14.3938 2.90721Z" fill="#25B2E7"></path>
                </svg>
                {contact.telegram}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={"footer-politic"}>
        <a href="/privacy/">Политика конфиденциальности</a>
      </div>
    </div>
  )
}
