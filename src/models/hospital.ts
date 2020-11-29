import {Schema, model, Document} from 'mongoose';

const HospitalSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    active_patients: {
        type: Number,
    },
    max_capacity: {
        type: Number,
    },
    employees: {
        type: Number,
    },
    creation_date: {
        type: Date,
        default: Date.now
    },
    modification_date: {
        type: Date,
        default: Date.now
    }

});

interface IHospitalSchema extends Document{
    name: string,
    active_patients: number,
    max_capacity: number,
    employees: number,
    creation_date: Date,
    modification_date: Date
};

export default model<IHospitalSchema>('Hospital', HospitalSchema);