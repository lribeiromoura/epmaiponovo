import React from 'react'
import DezPorcentoFull from '../songs/dezporcento/10 - Com vocal.mp3';
import DezPorcentoSemVocal from '../songs/dezporcento/10 - Sem Vocal.mp3';


export default function DezPorcento() {
    return (
        <div>
            <h1>10%</h1>
            <h2>Música Completa</h2>
            <audio controls>
                <source src={DezPorcentoFull} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>

            <h2>Música Sem Vocal</h2>
            <audio controls>
                <source src={DezPorcentoSemVocal} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}
