import { AppDataSource } from "../../data-source";
import { Institutions } from "../../entities/institution.entity";
import { Status } from "../../entities/status.entity";
import { Itens } from "../../entities/objects.entity";
import { AppError } from "../../erros/appError";

const institutionDonationService = async (ObjectId: any, InstitutionId: any) => {

    console.log(ObjectId)
    console.log(InstitutionId)

    const institutionRepository = AppDataSource.getRepository(Institutions)
    const itensRepository = AppDataSource.getRepository(Itens)
    const statusRepository = AppDataSource.getRepository(Status)

    const items = await itensRepository.find({relations:{status: true, institution: true}})
    const institutions = await institutionRepository.find({relations:{objects:true}})
    const statuses = await statusRepository.find()

    const item = items.find((item) => item.id === ObjectId.id);
    const institution = institutions.find((institution) => institution.id === InstitutionId)
    const status = statuses.find((status) => status.name === 'sent')

    if(item?.status.name != 'active') {
		throw new AppError(403, "Item is not active");
	}

    console.log(item)
    console.log(institution)
    console.log(status)


    return itensRepository.save({
        id: item.id,
        name: item.name,
        description: item.description,
        institution: institution,
        status: status
    })

}

export default institutionDonationService