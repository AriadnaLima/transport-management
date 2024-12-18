import { ICreateDriver } from '../useDriver'
import './createdriver.css'

interface IProps {
    setDriver: React.Dispatch<React.SetStateAction<ICreateDriver>>
    driver: ICreateDriver
    handleCreateDriver: () => Promise<void>;
}

function CreateDriver({ setDriver, driver, handleCreateDriver }: IProps) {

    return (
        <div className="content">
            <div className="content-input">
                <div className='title-container'>
                    <span>Nome do motorista</span>
                </div>
                <input
                    type="text"
                    className="text-input"
                    value={driver.name}
                    onChange={(e) => setDriver(prev => ({ ...prev, name: e.target.value }))}
                    placeholder={'João da silva'}
                />
            </div>

            <button onClick={() => handleCreateDriver()}>Salvar</button>
        </div>

    )
}

export default CreateDriver;