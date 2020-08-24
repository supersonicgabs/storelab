import React, {memo} from 'react'
import { Calendar, ArrowDown } from '../components/icons';
import maskValue, { MASKS } from '../utils/masks/index'
import { ButtonRemove } from '../components/buttons';

// const _textFormated = (el) => el.toLowerCase().replace(/-/g, "");

const Input = memo(
    function Input({ 
        type, 
        text, 
        mask, 
        pattern, 
        title, 
        className, 
        required, 
        label,  
        placeholder, 
        placeholderPosition = "flex-start",
        labelPosition = "start",
        value,
        method,
        onChange,
        maxLength,
        disabled,
        id
    }) {
    
        const handleInput = (event) => {
            const inputElement = (event.currentTarget)
            let inputValue = event.target.value;
            if (mask) {
                inputValue = maskValue([MASKS[mask]], inputValue, inputElement);
            }
            method && method(inputValue);
        }
    
        return(
            <span style={{display: "flex", flexDirection: "column", alignItems: labelPosition}} className={`${mask === "money" ? 'money' : mask === "date" ? 'date' : ''}`}>
                {label ? <label htmlFor={id}>{text}</label> : ''}
                <input
                    type={type}
                    name={id}
                    id={id}
                    value={value}
                    mask={mask}
                    pattern={pattern}
                    title={title}
                    className={`${className ? className : ''}`}
                    required={required}
                    onChange={method ? handleInput : onChange}
                    placeholder={placeholder}
                    style={{textAlign: placeholderPosition}}
                    maxLength={maxLength ? maxLength : 100}
                    disabled={disabled}
                />
                {mask === "money" ? <span className="fixed-text">R$</span> : ''}
                {mask === "date" ? <span className="fixed-icon"><Calendar className="icon-calendar" /></span> : ''}
            </span>
        )
    }    
)

const Ticker = memo(
    function Ticker({type, id, onChange, value, checked}){
        return(
            <label data-ticker={type} className="ticker">
                <input value={value} type={type} name={id} id={id} onChange={onChange} checked={checked}/>
                <div className="checkmark">
                    <span className="ticked"></span>
                </div>
            </label>
        )
    }
)

const Select = memo(
    function Select({label, text, className, id, children, onChange}){
        return(
            <span className="select">
                {label ? <label htmlFor={id}>{text}</label> : ''}
                <select name={id} id={id} className={className} onChange={onChange}>
                    {children}
                </select>
                <span className="fixed-icon icon"><ArrowDown className="icon-drop" /></span>
            </span>
        )
    }
)

const InputFile = memo(
    function InputFile({id, value, className, required, method, disabled}){
        const handleInput = (event) => {
            let inputValue = event.target.value;

            method && method(inputValue);

            const label	 = event.currentTarget.nextElementSibling
            const  labelVal = label.innerHTML;

            let fileName = '';
            fileName = event.target.value.split('\\').pop()
            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        }
        
        return(
            <>
                <input
                    type="file"
                    name={id}
                    id={id}
                    value={value}
                    className={`inputFile ${className ? className : ''}`}
                    required={required}
                    onChange={handleInput}
                    disabled={disabled}
                />
                <label data-btn="success" htmlFor={id}>
                    <span>{value ? value : 'Escolher Arquivo'}</span>
                </label>
                <ButtonRemove onClick={()=>method()} />
            </>
        )
    }
)


export {
    Input,
    Ticker,
    Select,
    InputFile
}