//UserBusiness.ts (User Business)
import Business from '../Business';
import DAO from '../../dao/DAO';

export default class UserBusiness implements Business {
    
    dao : DAO;

    public hello(){
        return "Hola Raúl";
    }
    
    public toObject(){
        return Object.getPrototypeOf(this);
    }

}