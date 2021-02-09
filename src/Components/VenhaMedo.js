import React from 'react'
import venhaMedoFull from '../songs/venhaMedo/Venha Medo - Com Voz - Bass Raia.mp3';

export default function VenhaMedo() {
    return (
        <div>
            <h2>Música Completa</h2>
            <audio controls>
                <source src={venhaMedoFull} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}
