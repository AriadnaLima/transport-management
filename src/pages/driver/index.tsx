import InfoDetail from "./InfoDetail/InfoDetail";
import List from "./List/List";
import { useDriver } from "./useDriver";
import Modal from "../../components/modal/Modal";
import CreateDriver from "./createDriver";

function Driver() {
    const {
        driverList,
        setSelectedDriver,
        selectedDriver,
        setDriver,
        driver,
        open,
        setOpen,
        handleCreateDriver
    } = useDriver()
    return (
        <>
            <Modal
                isOpen={open}
                onClose={() => setOpen(false)}
                title={"Criar motorista"}
                content={() => <CreateDriver
                    setDriver={setDriver}
                    driver={driver}
                    handleCreateDriver={handleCreateDriver}
                />}
            />
            <List
                driverList={driverList}
                setDriverSelected={setSelectedDriver}
            />
            <InfoDetail
                driverSelected={selectedDriver}
                setOpen={() => setOpen(true)}
            />
        </>
    )
}

export default Driver;