import { UUID } from "sequelize";
import { Sequelize, DataTypes } from "sequelize";
import OptionsConnection from "../db/optionConnection";



class ClientSchema extends OptionsConnection{
    tableCreate(){
        return this.sequelize.define('Clients', {
            id: {
                type:DataTypes.UUID,
                defaultValue: UUID,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        })
    }

}

export default ClientSchema;
