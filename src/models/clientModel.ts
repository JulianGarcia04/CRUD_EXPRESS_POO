import ClientSchema from "../Schema/clientSchema";

class ClientModels extends ClientSchema {
    modelClient = new ClientSchema().tableCreate()
    async createClients(body:any){
        let data = await this.modelClient.create(body);
        return data
    }

    async getData(){
        let data = await this.modelClient.findAll();
        return data
    }

    async updateData(id:any, body:any){
        let clientUpdate = await this.modelClient.update(body, {
            where: {id:id}
        })
        return clientUpdate;
    }

    async deleteData(id:any){
        let deleteData = await this.modelClient.destroy({
            where: {id:id}
        })
        return deleteData
    }
}

export default ClientModels;