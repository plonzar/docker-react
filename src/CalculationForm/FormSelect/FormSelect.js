import React from 'react';
import './FormSelect.css';

const FormSelect = (props) => {

    const renderOptions = () => {
        return props.operations.map(operation => <option value={operation} key={operation   }>{operation}</option>)
    }

    return (
        <div className="form-group-select">
            <label className="form-item-label">{props.label}</label>
            <select
                name={props.name}
                className="form-item-input"
                onChange={(event) => props.onChange(event.target.value)}
                value={props.value}
            >
                {renderOptions()}
            </select>
        </div>
    );
}

export default FormSelect;