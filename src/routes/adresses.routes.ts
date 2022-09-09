import { Router } from "express";
import adressesControler from "../controllers/adresses.controllers";

const routes = Router()

export const adressesRoutes = () => {
    
    routes.post('/adresses',adressesControler)
    
    return routes
}

