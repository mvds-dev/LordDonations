import { Express } from 'express'
import { donateToInstitutionController, listDonationsControler } from "../controllers/donations.controllers";
import { verifyUserAuthMiddleware } from '../middlewares/verifyUserAuth.middleware';

const donationsRoutes = (app:Express) => {
    
    app.get('/donations/donated',listDonationsControler);
    app.post("/donations/:institutionId", verifyUserAuthMiddleware, donateToInstitutionController);
}

export { donationsRoutes }
