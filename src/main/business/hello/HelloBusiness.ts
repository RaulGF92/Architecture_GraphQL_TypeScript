//HelloBusiness.ts (Hello Business)
import Business from '../Business';
import DAO from '../../dao/DAO';

import HelloDAO from '../../dao/hello/HelloDAO';

export default class HelloBusiness implements Business {

    public dao: HelloDAO;
    private defaultHello = "Hello";

    constructor() {
        this.dao = new HelloDAO();
    }

    public getHelloEmpty() {
        return this.defaultHello + " " + this.dao.getDefaultUser();
    }

    public getHello(name: String) {
        return this.defaultHello + " " + name;
    }

    public setDefaultName(name: String) {
        this.dao.setDefaultUser(name);
        return;
    }
}