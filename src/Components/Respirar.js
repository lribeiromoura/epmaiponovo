import React from 'react'
import respirarFull from '../songs/respirar/Respirar - Full.mp3';

export default function Respirar() {
    return (
        <div>
            <h2>Música Completa</h2>
            <audio controls>
                <source src={respirarFull} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}
