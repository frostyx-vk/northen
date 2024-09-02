import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IMaskInput } from 'react-imask';
import {createOrderPhone, createOrderOnline, serviceList, contactList} from '../../api/index'
import './Modal.css'

export default function Modal({ isOpen, onClose }) {
    const [toggle, setToggle] = useState(1);

    const [nameValue, setnNameValue] = useState('');
    const [nameValueTwo, setnNameValueTwo] = useState('');
    const [checked, setChecked] = useState('Как можно скорее');
    const [nameDirty, setNameDirty] = useState(false);
    const [textarea, setTextarea] = useState('');
    const nameError = 'Введите полностью номер'
    const checkItems = ['Как можно скорее', 'Через час', 'Вечером', 'Завтра'];

    const [checkedBudjet, setCheckedBudjet] = useState('1-3 млн');
    const checkBudget = ['До 1 млн', '1-3 млн', '3-5 млн', 'до 10 млн'];

    const buttonBlockRef = useRef();

    function requestCall() {
        if (!nameDirty && nameValue !== '') {
            setToggle(3);
            buttonBlockRef.current.classList.add('feedback-title__btn-none');
            let userFormData = new FormData();
            let convenientTime;
            if (checked === 'Как можно скорее') {
                convenientTime = 'QUICKLY';
            } else if (checked === 'Через час') {
                convenientTime = 'IN_HOUR';
            } else if (checked === 'Вечером') {
                convenientTime = 'EVENING';
            } else {
                convenientTime = 'TOMORROW';
            }
            userFormData.append('user_phone', nameValue);
            userFormData.append('convenient_time', convenientTime);
            createOrderPhone(userFormData);
        }
    };

    function leaceOrder(e) {
        if (nameValueTwo.length === 14 && textarea !== '') {
            e.preventDefault();
            setToggle(3);
            buttonBlockRef.current.classList.add('feedback-title__btn-none');
            let userFormData = new FormData();
            let budget;
            if (checkedBudjet === 'До 1 млн') {
                budget = 'ONE_MILLION';
            } else if (checkedBudjet === '1-3 млн') {
                budget = 'ONE_THREE';
            } else  if (checkedBudjet === '3-5 млн') {
                budget = 'THREE_FIVE';
            } else {
                budget = 'TEN_MILLION';
            }
            userFormData.append('description', textarea);
            userFormData.append('user_phone', nameValueTwo);
            userFormData.append('budget', budget);
            createOrderOnline(userFormData);
        }
    };

    function bluyHandler(e) {
        if (e.target.value.length < 14) {
            setNameDirty(true);
        } else {
            setNameDirty(false);
        };
    };

    const onWrapperClick = (event) => {
        if (event.target.classList.contains('modal')) onClose();
    };
    return (
        <>
            {
                isOpen && (
                    <div className="modal" onClick={onWrapperClick}>
                        <div className="modal-wrapper" >
                            <div className="modal-content">
                                <form >
                                    <div className="feedback-title__btns">
                                        <div className='feedback-title__btns-block' ref={buttonBlockRef}>
                                            <div onClick={() => setToggle(1)} className={(toggle === 1 ? 'feedback-title__btn-active' : 'feedback-title__btn')}>
                                                Заказ звонка
                                            </div>
                                            <div onClick={() => setToggle(2)} className={toggle === 2 ? 'feedback-title__btn-active' : 'feedback-title__btn'}>
                                                Заявка
                                            </div>
                                        </div>
                                        <span className="modal-close" onClick={() => onClose()}>&times;</span>
                                    </div>
                                    <div className="feedback-callSection">
                                        <div className={toggle === 1 ? 'show-content' : 'hidden-content'}>
                                            <div className="feedback-callSection__contacts">
                                                <label>Укажите контактный номер</label>
                                                <IMaskInput
                                                    onBlur={e => bluyHandler(e)}
                                                    name='name'
                                                    mask='+7(000)0000000'
                                                    type='tel'
                                                    placeholder='Введите номер'
                                                    onAccept={
                                                        (value, mask) => (setnNameValue(value))
                                                    }
                                                />
                                                {(nameDirty && nameError) && <div className='err'>{nameError}</div>}
                                            </div>
                                            <div className="feedback-callSection__time-ring">
                                                <label >Выберите время для звонка</label>
                                                <div className='feedback-callSection__ring-block' id="id_call_time">
                                                    {
                                                        checkItems.map((item) => {
                                                            return <label key={item} >
                                                                <input
                                                                    type="radio"
                                                                    name="call_time"
                                                                    checked={checked === item}
                                                                    onChange={() => setChecked(item)}
                                                                    required />
                                                                {item}
                                                            </label>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="feedback-callSection__order">
                                                <div className="content-trust__button">
                                                    <button type="button" onClick={() => requestCall()}>
                                                        <h2 className="content-relation__button_name">Заказать звонок</h2>
                                                        <svg className="content-trust__button-svg" width="257" height="61" viewBox="0 0 257 61" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 30.5L30.5947 61H226.405H227L226.547 60.8592L257 30.5L226.405 0H30.5947H30L30.4338 0.160393L0 30.5Z" fill="#25B2E7" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="feedback-callSection__order-agreement">
                                                    Отправляя данные, я даю свое<br />
                                                    <Link to='/privacy/'>
                                                        согласие на обработку персональных данных
                                                    </Link>
                                                    <a href="agreement/"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={toggle === 2 ? 'show-content' : 'hidden-content'}>
                                            <div className='feedback-requestSection__budjet' id="id_budget">
                                                <p>Бюджет</p>
                                                {
                                                    checkBudget.map((item) => {
                                                        return <label key={item}>
                                                            <input
                                                                type="radio"
                                                                name="budget"
                                                                checked={checkedBudjet === item}
                                                                onChange={() => setCheckedBudjet(item)}
                                                                required
                                                            />
                                                            {item}
                                                        </label>
                                                    })
                                                }
                                            </div>
                                            <div className="feedback-requestSection__description">
                                                <label >Опишите подробнее проект</label>
                                                <textarea
                                                    onChange={(e) => setTextarea(e.target.value)}
                                                    name="descrip"
                                                    cols="40"
                                                    rows="10"
                                                    placeholder={'Опишите проект'}
                                                    minLength={30}
                                                    required></textarea>
                                            </div>
                                            <div className="feedback-requestSection__data">
                                                <h3>Введите контактный номер</h3>
                                                <div className="feedback-requestSection__data-inputs">
                                                    <IMaskInput
                                                        name='contact'
                                                        mask='+7(000)0000000'
                                                        type='tel'
                                                        required
                                                        placeholder='Введите номер'
                                                        minLength={14}
                                                        onAccept={
                                                            (value, mask) => (setnNameValueTwo(value))
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="feedback-requestSection__order">
                                                <div className="content-trust__button">
                                                    <button type="submit" onClick={(e) => leaceOrder(e)}>
                                                        <h2 className="content-relation__button_name">Оставить заявку</h2>
                                                        <svg className="content-trust__button-svg" width="257" height="61" viewBox="0 0 257 61" fill="none">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 30.5L30.5947 61H226.405H227L226.547 60.8592L257 30.5L226.405 0H30.5947H30L30.4338 0.160393L0 30.5Z" fill="#25B2E7" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="feedback-callSection__order-agreement">
                                                    Отправляя данные, я даю свое<br />
                                                    <Link to='/privacy/'>
                                                        согласие на обработку персональных данных
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={toggle === 3 ? 'show-content' : 'hidden-content'} id="feedbackApplicationSent">
                                            <h3>Заявка отправлена!</h3>
                                        </div>
                                        <div className="feedback__contact-block">
                                            <div className="feedback-callSection__ring-you">
                                                Вы также можете связаться с нами самостоятельно по телефону или написать на почту:
                                            </div>
                                            <div className="feedback-callSection__contact-block">
                                                <div className="feedback-callSection__contact">
                                                    <a href="tel:+79233205009">
                                                        <svg width="15" height="20" viewBox="0 0 15 20" fill="#25B2E7">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.0188 17.0639C5.0188 18.168 5.92218 19.0714 7.02632 19.0714C8.13045 19.0714 9.03383 18.168 9.03383 17.0639C9.03383 15.9598 8.13045 15.0564 7.02632 15.0564C5.92218 15.0564 5.0188 15.9598 5.0188 17.0639ZM0 2.00752C0 3.11165 0.903383 4.01504 2.00752 4.01504C3.11165 4.01504 4.01504 3.11165 4.01504 2.00752C4.01504 0.903383 3.11165 0 2.00752 0C0.903383 0 0 0.903383 0 2.00752ZM0 7.02632C0 8.13045 0.903383 9.03383 2.00752 9.03383C3.11165 9.03383 4.01504 8.13045 4.01504 7.02632C4.01504 5.92218 3.11165 5.0188 2.00752 5.0188C0.903383 5.0188 0 5.92218 0 7.02632ZM0 12.0451C0 13.1492 0.903383 14.0526 2.00752 14.0526C3.11165 14.0526 4.01504 13.1492 4.01504 12.0451C4.01504 10.941 3.11165 10.0376 2.00752 10.0376C0.903383 10.0376 0 10.941 0 12.0451ZM14.0526 2.00752C14.0526 0.903383 13.1492 0 12.0451 0C10.941 0 10.0376 0.903383 10.0376 2.00752C10.0376 3.11165 10.941 4.01504 12.0451 4.01504C13.1492 4.01504 14.0526 3.11165 14.0526 2.00752ZM5.0188 12.0451C5.0188 13.1492 5.92218 14.0526 7.02632 14.0526C8.13045 14.0526 9.03383 13.1492 9.03383 12.0451C9.03383 10.941 8.13045 10.0376 7.02632 10.0376C5.92218 10.0376 5.0188 10.941 5.0188 12.0451ZM10.0376 12.0451C10.0376 13.1492 10.941 14.0526 12.0451 14.0526C13.1492 14.0526 14.0526 13.1492 14.0526 12.0451C14.0526 10.941 13.1492 10.0376 12.0451 10.0376C10.941 10.0376 10.0376 10.941 10.0376 12.0451ZM10.0376 7.02632C10.0376 8.13045 10.941 9.03383 12.0451 9.03383C13.1492 9.03383 14.0526 8.13045 14.0526 7.02632C14.0526 5.92218 13.1492 5.0188 12.0451 5.0188C10.941 5.0188 10.0376 5.92218 10.0376 7.02632ZM5.0188 7.02632C5.0188 8.13045 5.92218 9.03383 7.02632 9.03383C8.13045 9.03383 9.03383 8.13045 9.03383 7.02632C9.03383 5.92218 8.13045 5.0188 7.02632 5.0188C5.92218 5.0188 5.0188 5.92218 5.0188 7.02632ZM5.0188 2.00752C5.0188 3.11165 5.92218 4.01504 7.02632 4.01504C8.13045 4.01504 9.03383 3.11165 9.03383 2.00752C9.03383 0.903383 8.13045 0 7.02632 0C5.92218 0 5.0188 0.903383 5.0188 2.00752Z" />
                                                        </svg>
                                                        {contactList[0].phone}
                                                    </a>
                                                </div>
                                                <div className="feedback-callSection__contact">
                                                    <a href="https://t.me/northen" className="contact">
                                                        <svg width="19" height="16" viewBox="0 0 19 16" fill="#25B2E7">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.851418 6.34192L17.0068 0.101298C17.7446 -0.234097 18.4568 0.27891 18.1751 1.40989L15.424 14.394C15.232 15.3168 14.6751 15.5375 13.9039 15.1114L9.71276 12.0101L9.63016 12.0905C8.67948 13.0163 7.8426 13.8312 7.69828 13.9726C7.69311 13.9777 7.68796 13.9827 7.68282 13.9877C7.45643 14.2094 7.26951 14.3925 6.85957 14.3925C6.43402 14.3925 6.39851 14.2664 6.31301 13.9627C6.28937 13.8787 6.2619 13.7811 6.22129 13.6689L4.67963 8.93507L0.650439 7.67557C-0.24467 7.40092 -0.251209 6.78499 0.851418 6.34192ZM14.3938 2.90721L5.31196 8.6457L6.84235 13.3447L7.14514 10.1103L14.9215 3.08332C15.2629 2.77989 14.8472 2.63184 14.3938 2.90721Z" />
                                                        </svg>
                                                        {contactList[0].telegram}
                                                    </a>
                                                </div>
                                                <div className="feedback-callSection__contact">
                                                    <a href="mailto:info@northen.ru" className="contact">
                                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M20 2L18 0L16 2L14 0L12 2L10 0L8 2L6 0L4 2L2 0L0 2L2 4L0 6L2 8L0 10L2 12L0 14L2 16L4 14L6 16L8 14L10 16L12 14L14 16L16 14L18 16L20 14L18 12L20 10L18 8L20 6L18 4L20 2ZM10 11L4 6V4L10 8L16 4V6L10 11Z" fill="#25B2E7" />
                                                        </svg>
                                                        {contactList[0].email}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
