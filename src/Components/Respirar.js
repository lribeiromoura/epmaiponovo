import React from 'react'
import respirarFull from '../songs/respirar/Respirar - Full.mp3';
import respirarSemVocal from '../songs/respirar/Respirar - Sem Vocal.mp3';
export default function Respirar() {
    return (
        <div>
            <h1>Respirar</h1>
            <h2>Música Completa</h2>
            <audio controls>
                <source src={respirarFull} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>

            <h2>Música Sem Vocal</h2>
            <audio controls>
                <source src={respirarSemVocal} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}
