import React from "react";
import "./infoDetail.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { GiHandTruck } from "react-icons/gi";
import { IDelivery } from "../../../models/delivery";
import { format } from "date-fns";


export interface IProps {
    deliversSelected: IDelivery
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleFinishDelivery: (deliveryId: number) => Promise<void>
}

function InfoDetail({ setOpen, deliversSelected, handleFinishDelivery }: IProps) {
    return (
        <div className="info">
            <div className="header">
                Informações de Entrega
                <BsPlusCircleFill size={30} color="#588291" onClick={() => setOpen(true)} cursor="pointer"/>
            </div>
            <div className="details">
                <div className="card-details">
                    <div className="title">Data de criação</div>
                    <span>{deliversSelected?.createAt && format(new Date(deliversSelected?.createAt), "dd/MM/yyyy")}</span>
                </div>
                <div className="card-details">
                    <div className="title">Ultima atualização</div>
                    <span>{deliversSelected?.updateAt && format(new Date(deliversSelected?.updateAt), "dd/MM/yyyy")}</span>
                </div>
                <div className="card-details">
                    <div className="title">Status de entrega</div>
                    <span>{!deliversSelected?.finishAt ? 'em Rota' : 'Finalizada'}</span>
                </div>
            </div>
            <div className="items">
                <div className="item-card">
                    <div className="icon-item-card"><GiHandTruck size={50} color="#1f1f2e" /></div>
                    <div className="item-title">
                        Placa do caminhão
                        <div className="item-body">
                            {deliversSelected?.truck?.plate}
                        </div>
                    </div>
                    <div className="item-title">
                        Motorista em Rota
                        <div className="item-body">
                            {deliversSelected?.driver?.name}
                        </div>
                    </div>
                    <div className="item-title">
                        Localidade
                        <div className="item-body">
                            {deliversSelected?.loc}
                        </div>
                    </div>
                    {deliversSelected?.id && !deliversSelected?.finishAt &&
                        <button onClick={() => handleFinishDelivery(deliversSelected?.id)}>Finalizar Entrega</button>}
                </div>
            </div>
        </div>
    )
}

export default InfoDetail;