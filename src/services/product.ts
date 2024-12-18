import { IProduct } from "../models/product";
import { ICreateProduct } from "../pages/product/useProduct";
import provider from "../provider/axios";

export function useProductService(){
    async function getProduct() {
        try {
            const response = await provider.get("/product");
            return response?.data?.map((item: IProduct) => {
                return {
                    ...item,
                    category: getCategoryName(item.category as number)
                    }  
            }) as IProduct[];
        } catch(err) {
            throw err
        }
    }

    async function createProduct(payload: ICreateProduct) {
        try { await provider.post("/product", payload);
        } catch(err) {
            throw err;
        }
    }

    function getCategoryName(category: number) {
        const names = [
            'Eletronico',
            'Combustivel'
        ]
        return names[category - 1]
    }

    return {
        getProduct,
        createProduct
    }
} 