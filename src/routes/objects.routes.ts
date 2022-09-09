import { Express } from 'express'
import { listObjectsControler } from "../controllers/objects.controllers";

const objectsRoutes = (app:Express) => {
    
    app.get('/objects',listObjectsControler)
    
}

export { objectsRoutes }
