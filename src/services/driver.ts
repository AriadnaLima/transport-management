import { IDriver } from "../models/driver";
import { ICreateDriver } from "../pages/driver/useDriver";
import provider from "../provider/axios";

export function useDriverService(){
    async function getDriver() {
        try {
            const response = await provider.get("/driver");
            return response?.data as IDriver[];
        } catch(err) {
            console.log(err)
        }
    }

    async function createDriver(driver: ICreateDriver){
        try {
            await provider.post("/driver", driver);
        } catch(err) {
            console.log(err);
        }
    }

    return {
        getDriver,
        createDriver
    }
}