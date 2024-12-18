import React from "react";
import "./infoDetail.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillProduct } from "react-icons/ai";
import { IProduct } from "../../../models/product";

export interface IProps {
    productSelected: IProduct
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function InfoDetail({ setOpen, productSelected }: IProps) {
    return (
        <div className="info">
            <div className="header">
                Informações de Produtos
                <BsPlusCircleFill size={30} color="#588291" onClick={() => setOpen(true)} cursor="pointer"/>
            </div>
            <div className="items">
                <div className="item-card">
                    <div className="icon-item-card"><AiFillProduct size={50} color="#1f1f2e" /></div>
                    <div className="item-title">
                        Categoria do produto
                        <div className="item-body">
                            {productSelected?.category}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoDetail;