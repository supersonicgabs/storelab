import React, {memo} from 'react';
import '../styles/main.sass';
import {Add, Remove, Plus, Minus, Prev, Next, Edit, Active} from '../components/icons';

const Button = memo(
    function Button({type, disabled, id, className, children, onClick, style}){
        return(
            <button data-btn={type ? type : ""} disabled={disabled} type="button" id={id} className={className} onClick={onClick} style={style}>{children}</button>
        )
    }
)

const ButtonAdd = memo(
    function ButtonAdd({id, link, onClick}){
        return(
            <Button type="icon-inline-success" className="icon" id={id} onClick={onClick}>
                <Add />
            </Button>        
        )
    }
)

const ButtonEdit = memo(
    function ButtonEdit({id, link, onClick}){
        return(
            <Button type="icon-inline-blue" className="icon" id={id} onClick={onClick}>
                <Edit />
            </Button>        
        )
    }
)

const ButtonActive = memo(
    function ButtonAdd({id, link, onClick}){
        return(
            <Button type="icon-inline-normal" className="icon" id={id} onClick={onClick}>
                <Active />
            </Button>        
        )
    }
)

const ButtonRemove = memo(
    function ButtonRemove({id, link, onClick}){
        return(
            <Button type="icon-inline-danger" className="icon" id={id} onClick={onClick}>
                <Remove />
            </Button>
        )
    }
)

const ButtonPlus = memo(
    function ButtonPlus({id, link, onClick}){
        return(
            <Button type="icon-plus" className="icon" id={id} onClick={onClick}>
                <Plus />
            </Button>        
        )
    }
)

const ButtonMinus = memo(
    function ButtonMinus({id, onClick}){
        return(
            <Button type="icon-minus" className="icon" id={id} onClick={onClick}>
                <Minus />
            </Button>        
        )
    }
)

const ButtonPrev = memo(
    function ButtonPrev({id, onClick}){
        return(
            <Button type="icon-navigation" className="icon" id={id} onClick={onClick}>
                <Prev />
            </Button>
        )
    }
)

const ButtonNext = memo(
    function ButtonNext({id, onClick}){
        return(
            <Button type="icon-navigation" className="icon" id={id} onClick={onClick}>
                <Next />
            </Button>
        )
    }
)

const ButtonBack = memo(
    function ButtonBack({ id, onClick }){
        return (
            <Button type="icon-grey" className="icon" id={id} onClick={onClick}>
                <Prev />
            </Button>
        )
    }
)

export{
    Button,
    ButtonAdd,
    ButtonEdit,
    ButtonRemove,
    ButtonPlus,
    ButtonMinus,
    ButtonBack,
    ButtonPrev,
    ButtonNext,
    ButtonActive
}

