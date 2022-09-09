import { AppDataSource } from "../../data-source";
import { Addresseses } from "../../entities/Addresses.entities";

const listAdressesService = async () => {

    const AddressesesRepository = AppDataSource.getRepository(Addresseses) 

    const DadosAddresseses = await AddressesesRepository.find()

    return DadosAddresseses
}

export default listAdressesService