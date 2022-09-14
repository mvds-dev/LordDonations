import { AppDataSource } from "../../data-source";
import { Addresseses } from "../../entities/Addresses.entities";

import { AppError } from "../../erros/appError";

const updateAdressesService = async ( id:string, {city ,state , number, cep, district}: any) => {

    const AddressesesRepository = AppDataSource.getRepository(Addresseses) 

    const DadosAddresseses = await AddressesesRepository.find()

    const idExist = DadosAddresseses.find(user => user.id === id)

    if(!idExist){
        throw new AppError(404, "Address not found")
    }

    const dadosUpdateAdresses = {
        id:id,
        city,
        state,
        number,
        cep,
        district,
    }

    const updateUser = await AddressesesRepository.save(dadosUpdateAdresses)

    return updateUser
}

export default updateAdressesService