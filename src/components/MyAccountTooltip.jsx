import React, { useState } from 'react';
import { UserIcon, CompanyIcon } from "../assets/svg";
import {
    Link
} from "react-router-dom";

const MyAccountTooltip = ({ showTooltipExternal }) => {

    const [showTooltip, setShowTooltip] = useState(false);
    if (showTooltip || showTooltipExternal) {
        return (
            <div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} className="section-tooltip">
                <div className="triangleTooltip" ></div>
                <div className="innerTooltip">
                    <Link to="/minha_conta/dados_gerais">
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", paddingBottom: ".5rem" }}>
                            <img src={UserIcon} alt="userIcon" /> Minha Conta
                    </div>
                    </Link>
                    <hr />
                    <Link to="/minha_empresa/dados_principais">
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", paddingTop: ".5rem" }}>
                            <img src={CompanyIcon} alt="companyIcon" /> Minha Empresa
                    </div>
                    </Link>
                </div>
            </div>
        )
    } else return null
}

export default MyAccountTooltip;