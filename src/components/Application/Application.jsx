import React from 'react'
import './Application.css'

export default function Application({ title, descrip, name, call }) {
    return (
        <div className="content-relation">
            <h2>{title}</h2>
            <p>
                {descrip}
            </p>
            <div className="content-trust__button-block">
                <div className="content-trust__button" onClick={() => call(true)}>
                    <h2 className="content-relation__button_name">{name}</h2>
                    <svg className="content-trust__button-shadowleft" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M37.5651 64.1298L64.1304 37.5645L26.5651 0L-0.000236511 26.5645L37.5651 64.1298Z" fill="url(#paint0_linear_0_2560)"></path>
                        <defs>
                            <linearGradient id="paint0_linear_0_2560" x1="80.163" y1="48.0973" x2="48.0981" y2="80.1627" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#25B2E7"></stop>
                                <stop offset="1" stopColor="#25B2E7" stopOpacity="0.01"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg className="content-trust__button-svg-adapt" xmlns="http://www.w3.org/2000/svg" width="291" height="88" viewBox="0 0 291 88" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 44L44.0725 88H246.927H247L246.949 87.9781L291 44L246.927 0H44.0725H44L44.0472 0.0253279L0 44Z" fill="#25B2E7"></path>
                    </svg>
                    <svg className="content-trust__button-svg" xmlns="http://www.w3.org/2000/svg" width="371" height="88" viewBox="0 0 371 88" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 44L44.0725 88H326.927H327L326.945 87.9828L371 44L326.927 0H44.0725H44L44.0529 0.0195929L0 44Z" fill="#25B2E7"></path>
                    </svg>
                    <svg className="content-trust__button-shadowright" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                        <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M26.5653 64.1298L0 37.5645L37.5653 0L64.1306 26.5645L26.5653 64.1298Z" fill="url(#paint0_linear_0_2559)"></path>
                        <defs>
                            <linearGradient id="paint0_linear_0_2559" x1="-16.0327" y1="48.0973" x2="16.0322" y2="80.1627" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#25B2E7"></stop>
                                <stop offset="1" stopColor="#25B2E7" stopOpacity="0.01"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}
