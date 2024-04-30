import React, { useState } from 'react'
import './HomePage.css'
import { ReactComponent as Arrow } from './../../svg/arrow-r.svg'
import { dataWebSolutions, dataTabSolutions } from './../../components/data'

export default function HomePage() {
    const [content, setContent] = useState('dev');

    function handleClick(type) {
        setContent(type);
    };

    return (
        <main className="content">
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
                        <div style={{height: '250px'}}>
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
        </main>
    )
}
