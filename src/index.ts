import configServer from "./app";
import './db/connectionDB';

class Server extends configServer{

    private PORT:number = this.app.get('PORT');

    constructor() {
        super();
    }

    listen():void{
        this.app.listen(this.PORT, () => {
            console.log(`Listening to port ${this.PORT}`);
        });
    }

}

new Server().listen();