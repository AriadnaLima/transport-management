import { ITruck } from "../models/truck";
import { ICreateTruck } from "../pages/truck/useTruck";
import provider from "../provider/axios";

export function useTruckService(){
    async function getTruck() {
        try {
            const response = await provider.get("/truck");
            return response?.data as ITruck[];
        } catch(err) {
            throw err
        }
    }

    async function createTruck(truck: ICreateTruck){
        try {
            await provider.post("/truck", truck);
        } catch(err) {
            throw err
        }
    }

    return {
        getTruck,
        createTruck
    }
}