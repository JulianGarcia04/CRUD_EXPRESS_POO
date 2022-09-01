import {Op, Sequelize} from "sequelize";


class OptionsConnection {
    protected sequelize:Sequelize = new Sequelize({
        database: "clientes",
        username: "root",
        password: "",
        host: "localhost",
        port: 3306,
        dialect: "mysql"
    })

    protected async authenticate():Promise<void>{
        try {
            await this.sequelize.authenticate();
            await this.sequelize.sync({alter: true});
        } catch (error) {
            console.log(error);
        }
    }
}

export default OptionsConnection;

