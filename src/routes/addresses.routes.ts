import { Express } from 'express'
import { createAdressesControler, listAdressesControler, deleteAdressesControler, updateAdressesControler } from "../controllers/adresses.controllers";
import { verifyInstitutionAuthMiddleware } from '../middlewares/verifyInstitutionAuth.middleware';


const adressesRoutes = (app:Express) => {
    
    app.post('/addresses',createAdressesControler)
    app.get('/addresses',listAdressesControler)
    app.delete('/addresses/:id', verifyInstitutionAuthMiddleware, deleteAdressesControler)
    app.patch('/addresses/:id', updateAdressesControler)
    
}

export { adressesRoutes }
