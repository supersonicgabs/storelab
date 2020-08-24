import React from 'react'
import {Button, ButtonRemove, ButtonAdd, ButtonEdit, ButtonActive} from './buttons'
import {Ticker, Input} from '../components/inputs'
import {SimpleTable} from '../components/tables'

function Card({children, hasButton, txtButton, clickButton, id, className, ref, value, typeButton = "filled-success"}){
    return(
        <section data-card id={id} className={className} ref={ref} data-value={value}>
            <div className="container">
                {children}
            </div>
            {hasButton ? <Button type={typeButton} className="full-btn" onClick={clickButton}>{txtButton}</Button> : null}
        </section>
    )
}

function MediaCard({urlImg, children, interaction, multiple, id, removeClick, detailsClick, editClick, status, multipleChange}){
    return(
        <section data-grid="small-spacing">
            {interaction ?            
                <div data-cell="1of3 shrink" data-grid="column center small-spacing">
                    <div data-cell="shrink">
                        {status ? (status===true ? <ButtonRemove id={id} onClick={removeClick} /> : <ButtonActive id={id} onClick={removeClick} />) : <ButtonRemove id={id} onClick={removeClick} />}
                        {/* <ButtonRemove link="http://www.google.com.br" onClick={removeClick} /> */}
                    </div>
                    <div data-cell="shrink">
                        <ButtonAdd id={id} onClick={detailsClick} />
                    </div>
                    <div data-cell="shrink">
                        <ButtonEdit id={id} link="http://www.google.com.br" onClick={editClick} />
                    </div>
                    <div data-cell="shrink">
                        <Ticker type="checkbox" id={id} />
                    </div>
                    {multiple ?
                        <div data-cell="shrink" style={{width: '50px'}}>
                            <Input onChange={multipleChange} type="number" id={id} label="false" required={true} />
                        </div>
                        :
                        ''
                    }
                </div> : ''
            }
            <section data-cell="2of3" data-card="media">
                <div data-grid="cols-2" className="fullHeight">
                    <div data-grid="justify">
                        <div className="img-container">
                            {urlImg ? <img src={urlImg} alt="" /> : ''}
                        </div>
                    </div>
                    <section data-grid="column justify">
                        <div className="infos">
                            {children}
                        </div>
                    </section>
                </div>
            </section>
        </section>
    )
}

function TableCard({content, shrinkFirst}){
    return(
        <section data-card="table">
            <SimpleTable content={content} className="container" shrinkFirst={shrinkFirst} />
        </section>        
    )
}

export {
    Card,
    MediaCard,
    TableCard
}