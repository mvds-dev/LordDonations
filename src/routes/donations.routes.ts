import { Express } from 'express'
import { listDonationsControler } from "../controllers/donations.controllers";

const donationsRoutes = (app:Express) => {
    
    app.get('/donations/donated',listDonationsControler);
}

export { donationsRoutes }
