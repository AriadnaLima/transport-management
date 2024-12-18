import React from "react";
import "./itemList.css";
import { IDelivery } from "../../models/delivery";

export interface IProps {
  delivery: IDelivery;
  setDeliversSelected: React.Dispatch<React.SetStateAction<IDelivery>>
}

function ItemList({ delivery, setDeliversSelected }: IProps){
    return (
        <div className="item" onClick={() => setDeliversSelected(delivery)}>
          <div className="card">
            <div className="del-title">#{delivery.id}</div>
            {delivery.valuable && <div className="del-indicator">Valioso</div>}
            {delivery.dangerous && <div className="del-indicator">Perigoso</div>}
          </div>
          <div>
            <div className="price">R$ {delivery.value}</div>
          </div>
        </div>
        

    )
}

export default ItemList;