import React from 'react'
import './Statistic.css'

export default function Statistic() {
    return (
        <div className={"content-statistics"}>
            <div className={"content-statistics__left"}>
                <div className={"content-statistics__company-info"}>
                    <div className={"content-statistics__company-number"}>8</div>
                    <div className={"content-statistics__company-text"}>
                        лет
                        на рынке
                    </div>
                </div>
            </div>
            <div className={"content-statistics__middle"}>
                <div className={"content-statistics__company-info middle"}>
                    <div className={"content-statistics__company-number"}>15</div>
                    <div className={"content-statistics__company-text"}>
                        сотрудников
                    </div>
                </div>
            </div>
            <div className={"content-statistics__right"}>
                <div className={"content-statistics__company-info"} style={{marginTop: '26px'}}>
                    <div className={"content-statistics__company-number"}>4</div>
                    <div className={"content-statistics__company-text"}>
                        года
                        средний срок работы<br/>с клиентом
                    </div>
                </div>
            </div>
        </div>
    )
}
