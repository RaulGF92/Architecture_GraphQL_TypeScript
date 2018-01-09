import * as colors from 'colors';
import HttpServer from './HttpServer';
import GraphQLController from './controllers/GraphQLController';
import HelloController from './controllers/hello/HelloController';

export default class App {

    public server : HttpServer;
    public controllers = [
        new HelloController("/hello"),
        //New controllers
    ];

    constructor() {
        this.server = new HttpServer(8880);
        this.controllers.forEach((controller) => {
            if (!this.existPath(controller)) {
                this.server.getApp().use(controller.getPath(), controller.getGraphqlHttp());
                console.info("HttpServer", "Binding " + controller.constructor.name + " in path: " + colors.blue(controller.getPath().toString()));
            }
        });
    }

    init() {
        console.log(colors.green('               Starting GraphQL API                    '));
        console.log(colors.green('-------------------------------------------------------'));
        this.server.initApp();
    }

    existPath(controllerToCheck: GraphQLController) {
        return this.controllers.filter((controller) => {
            if (controller.getPath() === controllerToCheck.getPath())
                return true;
            return false;
        }).length <= 1;
    }
}









