import { AppDataSource } from "../../data-source";
import { Addresseses } from "../../entities/Addresses.entities";
import { Institutions } from "../../entities/institution.entity";
import { Users } from "../../entities/users.entity";

import { AppError } from "../../erros/appError";

const updateAdressesService = async ( {tokenId, addressId}: any, {city ,state , number, cep, district}: any) => {

    const institutionsRepository = AppDataSource.getRepository(Institutions);
    const institution = await institutionsRepository.findOne({where: {id: tokenId}, relations: {address: true}});
    
    const usersRepository = AppDataSource.getRepository(Users);
    const user = await usersRepository.findOne({where: {id: tokenId}, relations: {address: true}});

    console.log(user);
    if(!institution && !user) throw new AppError(401, "invalid token");
    if(!institution?.address && !user?.address) throw new AppError(404, "address not found");
    const doesInstitutionOwnAddress = institution?.address.id === addressId;
    const doesUserOwnAddress = user?.address.id === addressId;
    if(!doesInstitutionOwnAddress && !doesUserOwnAddress) throw new AppError(404, "address not found");

    const AddressesesRepository = AppDataSource.getRepository(Addresseses);

    const dadosUpdateAdresses = {
        id:addressId,
        city,
        state,
        number,
        cep,
        district,
    };

    const updateUser = await AddressesesRepository.save(dadosUpdateAdresses);

    return updateUser
}

export default updateAdressesService