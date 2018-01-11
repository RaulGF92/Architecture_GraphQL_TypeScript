//App.ts 
import * as colors from 'colors';

import HttpServer from './HttpServer';

import GraphQLController from './GraphQLController';
import HelloController from './endpoints/hello/HelloController';

export default class App {

    public server: HttpServer;

    public controllers = [
        new HelloController("/hello"),
        //add new controllers
    ];

    constructor() {
        this.server = new HttpServer(8880);
    }

    init() {
        console.log(colors.green('               Starting GraphQL API                    '));
        console.log(colors.green('-------------------------------------------------------'));
        this.controllers.forEach((controller) => {
            if (this.notExistOtherPath(controller)) {
                this.server.getApp().use(controller.getPath(), controller.getGraphqlHttp());
                console.info("HttpServer", "Binding " + controller.constructor.name + " in path: " + colors.blue(controller.getPath().toString()));
            }
        });
        this.server.initApp();
    }

    notExistOtherPath(controllerToCheck: GraphQLController) {
        return this.controllers.filter((controller) => {
            if (controller.getPath() === controllerToCheck.getPath())
                return true;
            return false;
        }).length <= 1;
    }
}









