import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
    return (
        <div className="form-group">
            <label className="form-item-label">{props.label}</label>
            <input
                className="form-item-input"
                name= {props.name}
                type="number" 
                value={props.value} 
                onChange={(event) => props.onChange(event.target.value)}
            />
        </div>
    );
}

export default FormInput