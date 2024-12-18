import React, { useState } from "react";
import "./list.css";
import { CgMenuRight } from "react-icons/cg";
import { IProduct } from "../../../models/product";
import ItemList from "../ItemList/ItemList";

export interface IProps {
    productList: IProduct[];
    setProductSelected: React.Dispatch<React.SetStateAction<IProduct>>
}

function List({ productList, setProductSelected }: IProps) {
    return (
        <div className="list">
            <div className="title">
                Produtos
                <div className="list-icon"> <CgMenuRight /></div>
            </div>
            <h4>Quantidade: {productList?.length}</h4>
            <div className="content-items">
                {productList?.map(product => {
                    return <ItemList product={product} setProductSelected={setProductSelected} />
                })}
            </div>

        </div>
    )
}

export default List;