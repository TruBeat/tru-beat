import React from 'react';
import './volume.css';
import { SpeakerHigh } from 'phosphor-react';
import { SpeakerLow } from 'phosphor-react';

const volume = (props) => { 
    return (
        <div className="Volume">
            <button className="Button_High"> <SpeakerHigh size={23} /> </button>
            <button className="Button_Low"> <SpeakerLow size={23} /> </button>
        </div>
    );
}

export default volume;