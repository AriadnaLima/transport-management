import React from "react";
import "./infoDetail.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { IDriver } from "../../../models/driver";
import { MdEmojiPeople } from "react-icons/md";

export interface IProps {
    driverSelected: IDriver
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function InfoDetail({ setOpen, driverSelected }: IProps) {
    return (
        <div className="info">
            <div className="header">
                Informações de Motorista
                <BsPlusCircleFill size={30} color="#588291" onClick={() => setOpen(true)} cursor="pointer"/>
            </div>
            <div className="items">
                <div className="item-card">
                    <div className="icon-item-card"><MdEmojiPeople size={50} color="#1f1f2e" /></div>
                    <div className="item-title">
                        Nome do motorista
                        <div className="item-body">
                            {driverSelected?.name}
                        </div>
                    </div>
                    <div className="card-details">
                        <div className="item-title">Status do motorista</div>
                        <div className="item-body">{driverSelected?.Delivery?.length ? 'em Rota' : 'Livre'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoDetail;