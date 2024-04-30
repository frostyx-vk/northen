import React from 'react'
import './PrivacyPolicy.css'
import { dataPrivacy } from './../../components/data'

export default function PrivacyPolicy() {
    return (
        <main className="content">
            <div className='wrapper'>
                <div className="flatpage-header">
                    <h1>{dataPrivacy[0].title}</h1>
                </div>
                <div className='flatpage-content'>
                    {dataPrivacy[0].description}
                </div>
            </div>
        </main>
    )
}
