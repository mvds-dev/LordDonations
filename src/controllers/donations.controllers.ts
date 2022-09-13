import { Request, Response } from 'express'
import "express-async-errors"

import listDonationsService from '../services/donations/listDonations.service'

export const listDonationsControler = async (req: Request, res: Response) => {

    const listDonations =  await listDonationsService()
    
    return res.status(200).send(listDonations)
}
