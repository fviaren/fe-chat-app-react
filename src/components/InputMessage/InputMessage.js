import React from 'react';

import './InputMessage.css';

const inputMessage = (props) => {
    return (
        <div className="InputContainer">
            <div className="InputBlock">
                <input 
                    className="MessageField" 
                    type="text"
                    placeholder="Message"
                    onChange={props.changed}
                    value={props.value}
                />
                <button 
                    className="SendButton" 
                    onClick={props.clicked}  
                >
                    Send
                </button>
            </div>
        </div>
    )
}

export default inputMessage;