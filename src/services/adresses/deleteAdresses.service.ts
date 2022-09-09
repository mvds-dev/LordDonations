import { AppDataSource } from "../../data-source";
import { Addresseses } from "../../entities/Addresses.entities";

import { AppError } from "../../erros/appError";
const deleteAdressesService = async (id:string) => {

    const AddressesesRepository = AppDataSource.getRepository(Addresseses) 
    const DadosAddresseses = await AddressesesRepository.find()

    const idExist = DadosAddresseses.find(user => user.id === id)

    if(!idExist){
        throw new AppError(404, "Address not found")
    }

    const updateUser = await AddressesesRepository.delete(idExist)


}

export default deleteAdressesService
