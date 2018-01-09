import Business from '../Business';
import DAO from '../../dao/DAO';

export default class UserBusiness implements Business {
    
    dao : DAO;

    public toObject(){
        
        for(var f in this){
            console.log(f);
        }

        return {};
    }

}