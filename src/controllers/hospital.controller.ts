import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import config from 'config';
import Hospital from '../models/hospital';
import { ErrorHandler, handleError } from '../error';

const router = Router();

router.post('/', async(req: Request, res: Response) => {
    try{
        const {name, active_patients, max_capacity, employees } = req.body;
        let hospital = await Hospital.findOne({name});
        if(hospital){
            const custom = new ErrorHandler(400, 'Hospital already exists');
            handleError(custom, req, res);
        }
        hospital = new Hospital({
            name,
            active_patients,
            max_capacity,
            employees
        });
        await hospital.save();

        const payload = {
            user: {
                id: hospital._id
            }
        }

        jwt.sign(payload, config.get('jwt_secret'), {expiresIn: 3600}, (err, token) => {
            if(err) throw err
            res.status(200).json({
                msg: 'Hospital created',
                data: {token}
            })
        })
        

    }catch(error){
        const custom = new ErrorHandler(500, 'Server Error');
        handleError(custom, req, res);
    }
});

export default router;