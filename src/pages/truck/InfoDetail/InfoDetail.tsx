import React from "react";
import "./infoDetail.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { ITruck } from "../../../models/truck";

export interface IProps {
    truckSelected: ITruck
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function InfoDetail({ setOpen, truckSelected }: IProps) {
    return (
        <div className="info">
            <div className="header">
                Informações de Entrega
                <BsPlusCircleFill size={30} color="#588291" onClick={() => setOpen(true)} cursor="pointer"/>
            </div>
            <div className="items">
                <div className="item-card">
                    <div className="icon-item-card"><FaTruck size={50} color="#1f1f2e" /></div>
                    <div className="item-title">
                        Placa do caminhão
                        <div className="item-body">
                            {truckSelected?.plate}
                        </div>
                    </div>
                    <div className="card-details">
                        <div className="item-title">Status do caminhão</div>
                        <div className="item-body">{truckSelected?.Delivery?.length ? 'em Rota' : 'Parado'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoDetail;