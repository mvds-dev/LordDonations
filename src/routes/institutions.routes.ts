import { Router } from "express";
import { institutionCreateController } from "../controllers/institutions.controllers";

const routes = Router();

const institutionsRoutes = () => {
	routes.post("", institutionCreateController);

	return routes;
};

export default institutionsRoutes;
