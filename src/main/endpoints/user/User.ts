//User.ts

/**
 * This class isn't is obligatory for a correct function of code. This class is like a builder,it is use for don't build 
 * objects all the time that you make a response in Querys or Mutations. Also a raw definition of a object don't have 
 * the validation that a TS class have.
 * 
 * Is for this, that is recomendable use this class always and implement in all endpoints.
 */

export default class User {

    private username: String;
    private email: String;
    private password: String;

    constructor(username: String, password: String, email: String) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}