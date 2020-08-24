import React from 'react'
import {RadiusMenu} from '../components/icons'
import {Card} from '../components/cards'

function Filter({children, clickButton, id, hasButton, txtButton}){
    const openFilter=()=>{
        const card = document.getElementById(id)
        card && card.classList.toggle('hidden')
    }
    return(
        <section className="section-filter" data-grid="column">
            <div onClick={openFilter} data-cell="shrink end">
                <RadiusMenu width="30px" height="30px" className="filter-icon" />
            </div>
            <div data-cell>
                <Card hasButton={hasButton} clickButton={clickButton} id={id} className="hidden" txtButton={txtButton}>
                    {children}
                </Card>
            </div>
        </section>
    )
}

export{
    Filter
}