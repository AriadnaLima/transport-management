import { ICreateTruck } from '../useTruck'
import './createtruck.css'

interface IProps {
    setTruck: React.Dispatch<React.SetStateAction<ICreateTruck>>
    truck: ICreateTruck
    handleCreateTruck: () => void;
}

function CreateTruck({ setTruck, truck, handleCreateTruck }: IProps) {

    return (
        <div className="content">
            <div className="content-input">
                <div className='title-container'>
                    <span>Placa</span>
                </div>
                <input
                    type="text"
                    className="text-input"
                    value={truck.plate}
                    onChange={(e) => setTruck(prev => ({ ...prev, plate: e.target.value }))}
                    placeholder={'HYZ-9999'}
                />
            </div>

            <button onClick={() => handleCreateTruck()}>Salvar</button>
        </div>

    )
}

export default CreateTruck;