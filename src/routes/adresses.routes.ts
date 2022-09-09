import { Express } from 'express'
import { adressesControler, listAdressesControler } from "../controllers/adresses.controllers";


const adressesRoutes = (app:Express) => {
    
    app.post('/addresses',adressesControler)
    app.get('/addresses',listAdressesControler)
    
}

export { adressesRoutes }
