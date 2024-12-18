import React, { useState } from "react";
import ItemList from "../../../components/ItemList/ItemList";
import "./list.css";
import { CgMenuRight } from "react-icons/cg";
import { IDelivery } from "../../../models/delivery";

export interface IProps {
    deliversList: IDelivery[];
    setDeliversSelected: React.Dispatch<React.SetStateAction<IDelivery>>
}

function List({ deliversList, setDeliversSelected }: IProps) {
    const [inRoute, setInRoute] = useState(true)

    return (
        <div>
            <div className="list">
                <div className="title">
                    Entregas
                    <div className="list-icon"> <CgMenuRight /></div>
                </div>
                <div className="tabs">
                    <span className={inRoute ? "active" : ""} onClick={() => setInRoute(true)}>Em Rota</span>
                    <span className={!inRoute ? "active" : ""} onClick={() => setInRoute(false)}>Finalizado</span>
                </div>

                <div className="content-items">
                    {inRoute && deliversList?.filter(delivery => !delivery?.finishAt).map(delivery => {
                        return <ItemList delivery={delivery} setDeliversSelected={setDeliversSelected} />
                    })}
                </div>
                <div className="content-items">
                    {!inRoute && deliversList?.filter(delivery => delivery?.finishAt).map(delivery => {
                        return <ItemList delivery={delivery} setDeliversSelected={setDeliversSelected} />
                    })}
                </div>

            </div>
        </div>
    )
}

export default List;