import * as colors from 'colors';
import HttpServer from './HttpServer';
import GraphqlController from './controllers/GraphqlController';
import HelloController from './controllers/HelloController';

console.log(colors.green('               Starting User API                    '));
console.log(colors.green('----------------------------------------------------'));

let server = new HttpServer(8880);
let controllers = [new HelloController("/hello")];

controllers.forEach((controller) => {
    if (!existPath(controller)){
        server.getApp().use(controller.getPath(), controller.getGraphqlHttp());
        console.info("HttpServer","Binding "+controller.constructor.name+" in path: "+colors.blue(controller.getPath().toString()));
    }
});

server.initApp();

function existPath(controllerToCheck : GraphqlController) {
    return controllers.filter((controller) => {
        if (controller.getPath() == controllerToCheck.getPath())
            return true;
        return false;
    }).length > 1;
}