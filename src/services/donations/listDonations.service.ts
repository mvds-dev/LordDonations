import { AppDataSource } from "../../data-source";
import { Itens } from "../../entities/objects.entity";

const listDonationsService = async () => {

    const ItensRepository = AppDataSource.getRepository(Itens) 

    const DadosItens = await ItensRepository.find({relations: {status: true}})

    const statusReceived = DadosItens.find(element => element.status.name === "received");

    return statusReceived
}

export default listDonationsService