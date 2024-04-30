import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
    const navigate = useNavigate();

    const [timeLeft, setTimeLeft] = useState(3);
    useEffect(() => {
        if (!timeLeft) return;
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
            if (timeLeft === 1) {
                navigate('/');
            };
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timeLeft]);

    return (
        <main className="content">
            <div id="notfound">
                <div className={"notfound"}>
                    <div className={"notfound-404"}>
                        <div></div>
                        <h1>404</h1>
                    </div>
                    <h2>Страница не найдена</h2>
                    <p>Запрашиваемая страница не существует</p>
                    <p>Переход на домашнюю страницу через {timeLeft}... </p>
                </div>
            </div>
        </main>
    )
}
