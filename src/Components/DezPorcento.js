import React from 'react'
import DezPorcentoFull from '../songs/dezporcento/10 - Com vocal.mp3';

export default function DezPorcento() {
    return (
        <div>
            <h2>Música Completa</h2>
            <audio controls>
                <source src={DezPorcentoFull} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}
