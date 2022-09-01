import { Router, Request, Response } from 'express'
import ClientModels from '../models/clientModel'

class routerClient extends ClientModels{
    public router:Router = Router()
    
    constructor(){
        super();
        this.router.post('/clientes', async (req: Request, res: Response) =>{
            const body = req.body;
            let client = await this.createClients(body);
            res.json(client);
        })

        this.router.get('/clientes', async (req:Request, res:Response)=>{
            let clients = await this.getData();
            res.json(clients);
        })
        this.router.put('/clientes/:id', async (req: Request, res: Response)=>{
            const {id} = req.params;
            const body = req.body;
            const updateData = await this.updateData(id, body)
            res.json(updateData)
        });
        this.router.delete('/clientes/:id', async (req: Request, res: Response)=>{
            const id = req.params.id
            let data = await this.deleteData(id);
            res.json(data)
        });
    }

}

export default routerClient