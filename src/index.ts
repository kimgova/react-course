import app from './app';
import config from 'config';
import DB_Connection from './repositories/db';


let port = config.get('port');

if(!port){
    process.exit(1);
}

const PORT:number = parseInt(port as string, 10);
const db_connection: DB_Connection = new DB_Connection();
const {connect_db} = db_connection;

const server = app.listen(PORT, () => {
    connect_db();
    console.log(`Listening on port ${PORT}`)
});

type ModuleId = string | number;

interface WebpackHotModule {
    hot?: { //?no requerido
        data: any,
        accept(dependencies: string[], callback? : (updateDependencies: ModuleId[])=> void):void;
        accept(dependency: string[], callback? : ()=> void):void;
        accept(errHandler?: (err:Error)=>void):void;
        dispose(callback: (data:any)=>void):void;
    }
}

declare const module: WebpackHotModule;
if(module.hot){
    module.hot.accept();
    module.hot.dispose(() => server.close());
}