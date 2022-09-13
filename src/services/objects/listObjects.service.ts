import { AppDataSource } from "../../data-source";
import { Itens } from "../../entities/objects.entity";

const listObjectsService = async () => {

    const ItensRepository = AppDataSource.getRepository(Itens) 

    const DadosItens = await ItensRepository.find()

    return DadosItens
}

export default listObjectsService