import * as express from 'express';

export default class HttpServer {
    private app: any;
    private PORT: number;

    public constructor(portOfService: number) {
        this.app = express();
        this.PORT = portOfService || 8080;
    }

    public initApp() {
        this.app.listen(this.PORT, () => {
            console.info("HttpServer", "The server was started in http://localhost:"+this.PORT);
        })
    }

    public setPort(port: number) {
        this.PORT = port;
    }
    public getPort() {
        return this.PORT;
    }
    public getApp() {
        return this.app;
    }
}