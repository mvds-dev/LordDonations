import { AppDataSource } from "../../data-source";
import { Itens } from "../../entities/objects.entity";

const listObjectsIsActiveService = async () => {

    const ItensRepository = AppDataSource.getRepository(Itens) 

    const DadosItens = await ItensRepository.find({where: {status: { name: 'active'}}})

    return DadosItens
}

export default listObjectsIsActiveService