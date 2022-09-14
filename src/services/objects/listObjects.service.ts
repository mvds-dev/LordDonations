import { AppDataSource } from "../../data-source";
import { Itens } from "../../entities/objects.entity";

const listObjectsService = async () => {

    const AddressesesRepository = AppDataSource.getRepository(Itens) 

    const DadosAddresseses = await AddressesesRepository.find()

    return DadosAddresseses
}

export default listObjectsService