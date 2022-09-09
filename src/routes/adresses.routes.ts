import { Express } from 'express'
import adressesControler from "../controllers/adresses.controllers";


const adressesRoutes = (app:Express) => {
    
    app.post('/addresses',adressesControler)
    
}

export { adressesRoutes }
