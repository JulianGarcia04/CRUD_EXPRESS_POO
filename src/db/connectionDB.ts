import OptionsConnection from "./optionConnection";


class dbConnection extends OptionsConnection {

    async validate(){
        await this.authenticate();
        console.log("Is connected")
    }
}

new dbConnection().validate();