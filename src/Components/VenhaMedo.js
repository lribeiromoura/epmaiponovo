import React from 'react'
import venhaMedoFull from '../songs/venhaMedo/Venha Medo - Com Voz - Bass Raia.mp3';
import venhaMedoSemVocal from '../songs/venhaMedo/Venha Medo - Sem Vocal.mp3';

export default function VenhaMedo() {
    return (
        <div>
            <h1>Venha Medo</h1>
            <h2>Música Completa</h2>
            <audio controls>
                <source src={venhaMedoFull} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>

            <h2>Música Sem Vocal</h2>
            <audio controls>
                <source src={venhaMedoSemVocal} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}
