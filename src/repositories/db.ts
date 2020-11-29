import mongoose from 'mongoose';
import config from 'config';
import { data_base } from '../interfaces/database.interface';

const data_base: data_base = config.get('data_base');

export default class DB_Connection{
    constructor() {}
    connect_db = async(): Promise<void> => {
        try{
            await mongoose.connect(data_base.mongo_uri, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            });
            console.log('Mongo connection');
        }catch(err){
            process.exit(1);
        }
    }
}