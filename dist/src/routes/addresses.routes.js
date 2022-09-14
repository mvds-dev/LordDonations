"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adressesRoutes = void 0;
const adresses_controllers_1 = require("../controllers/adresses.controllers");
const adressesRoutes = (app) => {
    app.post('/addresses', adresses_controllers_1.createAdressesControler);
    app.get('/addresses', adresses_controllers_1.listAdressesControler);
    app.delete('/addresses/:id', adresses_controllers_1.deleteAdressesControler);
    app.patch('/addresses/:id', adresses_controllers_1.updateAdressesControler);
};
exports.adressesRoutes = adressesRoutes;
