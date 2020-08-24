import React, {useRef} from 'react'
import {Close} from './icons';
import useOutsideClick from '../utils/customHooks/useOutsideClick'

function Modal({children, type, state, setState, clickOk}){
    const ref = useRef()

    useOutsideClick(ref, ()=> setState(false))
    return(
        <section data-modal={type ? type : ''} data-grid="column center" className={`${state ? 'target' : ''}`}>

            {!type.includes("warning") && !type.includes("success") && !type.includes("danger") && !type.includes("inline") ?
                <button data-btn="fechar" onClick={()=>setState(false)}>
                    <Close/>
                </button>
            : ''}
            <div className="modal-content" data-cell="shrink" ref={ref}>
                {children}
                {type.includes("warning") || type.includes("success") || type.includes("danger") || type.includes("inline") ? 
                    <button data-btn="fechar" onClick={(e)=>{
                        e.preventDefault()
                        e.stopPropagation()
                        setState(false)
                    }}>
                        <Close/>
                    </button> : ''
                }
                {type.includes("buttons") ?
                    <section data-grid="small-spacing end" className="section-btns-modal">
                        <button data-btn="danger"  onClick={()=>setState(false)}>Cancelar</button>
                        <button data-btn="success" onClick={clickOk}>Ok</button>
                    </section>
                    : ''
                }
            </div>
        </section>
    )
}

export {
    Modal
}