//HelloDAO.ts (Hello DAO)
import DAO from '../DAO';

export default class HelloDAO implements DAO {

    private static defaultUser = "User";

    public setDefaultUser(user:String){
        HelloDAO.defaultUser  = user.toString();
    }

    public getDefaultUser(){
        return HelloDAO.defaultUser;
    }

}