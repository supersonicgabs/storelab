import React, {useState, useEffect} from 'react'
import {Input} from '../components/inputs'
import {Prev, Next} from '../components/icons'

export default function MonthPicker({setFormattedMonth}){
    const d = new Date();
    const month = [];
    month[0] = ["Janeiro", "01"];
    month[1] = ["Fevereiro", "02"];
    month[2] = ["Março", "03"];
    month[3] = ["Abril", "04"];
    month[4] = ["Maio", "05"];
    month[5] = ["Junho", "06"];
    month[6] = ["Julho", "07"];
    month[7] = ["Agosto", "08"];
    month[8] = ["Setembro", "09"];
    month[9] = ["Outubro", "10"];
    month[10] = ["Novembro", "11"];
    month[11] = ["Dezembro", "12"];
    const [actualYear, setActualYear] = useState(d.getFullYear())
    const [actualMonth, setActualMonth] = useState(d.getMonth())
    // const [formattedMonth, setFormattedMonth] = useState()
    const [inputMonth, setInputMonth] = useState(`${month[actualMonth][0]} de ${actualYear}`)

    useEffect(()=>{
        setInputMonth(`${month[actualMonth][0]} de ${actualYear}`)
        setFormattedMonth(`${month[actualMonth][1]}/${actualYear}`)
    }, [actualMonth, actualYear, month, setFormattedMonth])

    

    const getPreviousMonth = () => {
        actualMonth===0 ? setActualMonth(month.length-1) : setActualMonth(actualMonth-1)
        actualMonth===0 ? setActualYear(actualYear-1) : setActualYear(actualYear)
    }
    const getNextMonth = () => {
        actualMonth===11 ? setActualMonth(0) : setActualMonth(actualMonth+1)
        actualMonth===11 ? setActualYear(actualYear+1) : setActualYear(actualYear)
    }

    return(
        <p data-month>
            <Input value={inputMonth} setMethod={setInputMonth} mask="name" type="text" text="Nome" label={false} required={true} />
            <button className="prev" onClick={getPreviousMonth} data-btn="icon-clear">
                <Prev />
            </button>
            <button className="next" onClick={getNextMonth} data-btn="icon-clear">
                <Next />
            </button>
        </p>

    )
}