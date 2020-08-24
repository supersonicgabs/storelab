import React from 'react'
import { ButtonAdd, ButtonEdit, ButtonRemove, ButtonActive } from '../components/buttons'

function ListTable({ content, checkbox, checkboxClick, details, edit, remove, detailsClick, editClick, removeClick, hiddenId, shortList }) {
    const getKeys = () => Object.keys(content[0]);
    const getHeader = () => getKeys().map((key, index) => key !== 'active' ? <td data-cell="1of4" className={`${index === 0  && hiddenId ? 'hidden' : ''}`} key={index}>{key}</td> : '')
    const getRowsData = () => {
        return content.map((row, index) => (
            <tr key={index} data-grid="row small-spacing justify center" className={!shortList ? (row.Status?.value==="Ativo" ? 'active' : row.Status?.value==="Inativo" ? 'inactive' : row.Status?.value==="not-delivered" ? 'not-delivered' : 'total-delivered') : ''} id={row.Id?.value}>
                {checkbox ? <td data-cell="shrink" style={{ width: 30 }} key="selectAll"><input id={row.Id?.value} type="checkbox" data-checkbox onChange={checkboxClick} /></td> : ''}
                <RenderRow key={index} data={row} keys={getKeys()} hiddenId={hiddenId} />
                {details ? <td data-cell="shrink" key="btnDetails" style={!shortList ? { width: 120 } : null}><ButtonAdd id={row.Id?.value} onClick={detailsClick} /></td> : ''}
                {edit ? <td data-cell="shrink" key="btnEdit" style={!shortList ? { width: 120 } : null}><ButtonEdit id={row.Id?.value} onClick={editClick} /></td> : ''}
                {remove ? <td data-cell="shrink" key="btnRemove" style={!shortList ? { width: 120 } : null}>{row.Status ? (row.Status?.value==="Ativo" ? <ButtonRemove id={row.Id?.value} onClick={removeClick} /> : <ButtonActive id={row.Id?.value} onClick={removeClick} />) : <ButtonRemove id={row.Id?.value} onClick={removeClick} />}</td> : ''}
            </tr>
        ))
    }

    function selectAllCheckbox() {
        const allCheckbox = document.querySelectorAll('[data-checkbox]')
        allCheckbox.forEach(check => check.checked === true ? check.checked = false : check.checked = true)
    }

    return (
        <div className="responsive-table">
            <table data-table={`${shortList ? 'short' : ''}`}>
                {!shortList ? <thead>
                    <tr data-grid="row small-spacing justify center">
                        {checkbox ? <td data-cell="shrink" style={{ width: 30 }} key="selectAllLabel"><input id="selectAll" type="checkbox" onClick={selectAllCheckbox} /></td> : ''}
                        {getHeader()}
                        {details ? <td style={!shortList ? { width: 120 } : null} key="btnDetails">Detalhes</td> : ''}
                        {edit ? <td style={!shortList ? { width: 120 } : null} key="btnEdit">Editar</td> : ''}
                        {remove ? <td style={!shortList ? { width: 120 } : null} key="btnRemover">Remover</td> : ''}
                    </tr>
                </thead> : ''}
                <tbody>
                    {getRowsData()}
                </tbody>
            </table>
        </div>
    )
}

const RenderRow = ({ keys, data, className, shrinkFirst, hiddenId }) => {
    return keys.map((key, index) => typeof data[key] !== 'boolean' ? <td className={`${className} ${index === 0  && hiddenId ? 'hidden' : ''}`} data-cell={`${index === 0 && shrinkFirst ? 'shrink' : '1of4'}`} key={index}>
        {/* <span className={`${key==="pagamento" || key === "Saldo de Abertura" ? 'successColor' : key==="despesa" ? 'dangerColor' : key==="subtotal" ? 'blueColor' : ''}`}> */}
        <span className={`${data[key].type === "success" && "successColor"}`}>
            {data[key].value}
        </span>
    </td> : '')
}

function SimpleTable({ content, className, shrinkFirst }) {
    if (content) {

        const getKeys = () => Object.keys(content[0]);
        const getHeader = () => getKeys().map((key, index) => key !== 'active' ? <td data-cell={`${index === 0 && shrinkFirst ? 'shrink' : '1of4'}`} key={index}>{key}</td> : '')
        const getRowsData = () => {
            return content.map((row, index) => (
                <tr key={index} data-grid="row spacing justify center">
                    <RenderRow key={index} data={row} keys={getKeys()} shrinkFirst={shrinkFirst} />
                </tr>
            ))
        }
        return (
            <div className="responsive-table">
                <table className={className}>
                    <thead>
                        <tr data-grid="row spacing justify center">
                            {getHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {getRowsData()}
                    </tbody>
                </table>
            </div>
        )
    }
    else {
        return ('')
    }
}


export {
    ListTable,
    SimpleTable
}