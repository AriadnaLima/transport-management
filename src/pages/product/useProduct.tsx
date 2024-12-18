import { useEffect, useState } from "react";
import { useProductService } from "../../services/product";
import { IProduct } from "../../models/product";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export interface ICreateProduct {
   category: number,
   value: string
}

export function useProduct() {
    const [productList, setProductList] = useState([] as IProduct[])
    const [selectedProduct, setSelectedProduct] = useState({} as IProduct)
    const [product, setProduct] = useState({} as ICreateProduct)
    const [open, setOpen] = useState(false)

    const { getProduct, createProduct } = useProductService();

    async function handleGetProducts() {
        try {
            const products = await getProduct()
            setProductList(products as IProduct[])
        } catch (error) {
            toast.warning('Não foi possivel carregar a lista de produtos')
        }
    }

    async function handleCreateProduct() {
        try {
            await createProduct(product)
            toast.success('Produto salvo com sucesso!')
            handleGetProducts();
            setProduct({} as ICreateProduct)
            setOpen(false)
        } catch (error) {
            let err = 'Não foi possivel salvar o produto';
            if ((error as AxiosError).response?.data) {
                err = (error as AxiosError).response?.data as string;
            }
            toast.warning(err)
        }
    }


    useEffect(() => {
        handleGetProducts();
    }, [])


    return {
        productList,
        setSelectedProduct,
        selectedProduct,
        setProduct,
        product,
        open,
        setOpen,
        handleCreateProduct
    }
}