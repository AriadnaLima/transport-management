import { SetStateAction } from "react";
import { ITruck } from "../../models/truck";
import InfoDetail from "./InfoDetail/InfoDetail";
import List from "./List/List";
import { useTruck } from "./useTruck";
import Modal from "../../components/modal/Modal";
import CreateTruck from "./createTruck";

function Truck() {
    const {
        truckList,
        setSelectedTruck,
        selectedTruck,
        setTruck,
        truck,
        open,
        setOpen,
        handleCreateTruck
    } = useTruck()
    return (
        <>
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title={"Criar caminhão"}
                content={() => <CreateTruck
                    setTruck={setTruck}
                    truck={truck}
                    handleCreateTruck={handleCreateTruck}
                />}
            />
            <List
                truckList={truckList}
                setTruckSelected={setSelectedTruck}
            />
            <InfoDetail
                truckSelected={selectedTruck}
                setOpen={() => setOpen(true)}
            />
        </>
    )
}

export default Truck;