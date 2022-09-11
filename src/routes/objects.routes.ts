import { Express } from 'express'
import { listObjectsControler } from "../controllers/objects.controllers";
import { verifyUserAuthMiddleware } from '../middlewares/verifyAuth.middleware';
import { deleteObjectsController } from '../controllers/objects.controllers';
import { updateObjectsController } from '../controllers/objects.controllers';
import { createObjectsController } from '../controllers/objects.controllers';

const objectsRoutes = (app:Express) => {
    
    app.get('/objects',listObjectsControler);
    app.delete("/objects/:objectId", verifyUserAuthMiddleware,deleteObjectsController);
    app.post("/objects", verifyUserAuthMiddleware, createObjectsController);
    app.patch("/objects/:objectId", verifyUserAuthMiddleware, updateObjectsController);
}

export { objectsRoutes }
