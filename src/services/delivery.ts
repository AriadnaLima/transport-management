import { IDelivery } from "../models/delivery";
import { ICreateDelivery } from "../pages/home/useDelivery";
import provider from "../provider/axios";

export function useDeliveryService(){
    async function getDelivery() {
        try {
            const response = await provider.get("/delivery");
            return response?.data as IDelivery[];
        } catch(err){
            console.log(err)
        }
    }

    async function createDelivery(payload: ICreateDelivery){
        try {
            const response = await provider.post("/delivery", payload);
            return response;
        } catch(err) {
            throw err;
        }
    }

    async function updateDelivery(deliveryId: number){
        try {
            const response = await provider.put("/delivery", { deliveryId });
        } catch(err){
            throw err;
        }
    }

    return {
        getDelivery,
        createDelivery,
        updateDelivery
    }
}

