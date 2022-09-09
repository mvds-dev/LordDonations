import { Express } from 'express'
import { createAdressesControler, listAdressesControler, deleteAdressesControler } from "../controllers/adresses.controllers";


const adressesRoutes = (app:Express) => {
    
    app.post('/addresses',createAdressesControler)
    app.get('/addresses',listAdressesControler)
    app.delete('/addresses/:id',deleteAdressesControler)
    
}

export { adressesRoutes }
