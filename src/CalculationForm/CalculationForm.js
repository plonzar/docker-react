import React from 'react';
import './CalculationForm.css';
import FormInput from './FormInput/FormInput';
import FormSelect from "./FormSelect/FormSelect";
import calculate from './helpers/CalculationFormHelpers';

export class CalculationForm  extends React.Component {
    availalbleOperations = ['+', '-', '*', '/'];

    constructor(props) {
        super(props);

        this.state = {
            numberOne: null,
            numberTwo: null,
            operation: '+',
            result: null
        }
    }

    numberOneChanged(value) {
        this.setState((prev) => ({
            ...prev,
            numberOne: value
        }));
    }

    numberTwoChanged(value) {
        this.setState((prev) => ({
            ...prev,
            numberTwo: value
        }));
    }

    operationChanged(value) {
        this.setState((prev) => ({
            ...prev,
            operation: value
        }));
    }

    resultChanged(value) {
        this.setState((prev) => ({
            ...prev,
            result: value
        }));
    }

    onCalcualte(event) {
        event.preventDefault();
        const result = calculate(this.state.numberOne, this.state.numberTwo, this.state.operation);
        this.resultChanged(result);
    }

    renderResult() {
        return (
            this.state.result !== null ? 
                <div className="result">
                    Result: {this.state.result}
                </div> :
                ''
        );
    }

    render() {
        return (
            <form className="form-container" onSubmit={(event) => this.onCalcualte(event)}>
                <FormInput
                    onChange={this.numberOneChanged.bind(this)}
                    value={this.state.numberOne}
                    name="numberOne"
                    label="No. One:"/>
                <FormInput
                    onChange={this.numberTwoChanged.bind(this)}
                    value={this.state.numberTwo}
                    name="numberTwo"
                    label="No. Two:"/>
                <FormSelect 
                    onChange={this.operationChanged.bind(this)}
                    value={this.state.operation}
                    operations={this.availalbleOperations}
                    label="Operation:"
                    name="operation"/>
                <button 
                    type="submit"
                    className="button">
                        Calculate!
                </button>
                
                {this.renderResult()}
            </form>
        )
    }
}

