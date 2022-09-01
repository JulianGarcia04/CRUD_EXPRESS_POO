import express, {Express} from 'express';
import morgan from "morgan";
import ClientCotroller from './controllers/clienteController';


class configServer {
    protected app:Express = express();
    constructor() {
        this.app.set('PORT', 4000);
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(new ClientCotroller().router)
    }
}

export default configServer;