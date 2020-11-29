import {Express} from 'express';
import hospital_controller from "./controllers/hospital.controller";

const routes = (app: Express):void => {
    app.use('/api/hospital', hospital_controller);
};

export default routes;