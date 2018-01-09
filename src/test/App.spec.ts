import { expect, should } from 'chai';
import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
import 'mocha';

import App from '../main/App';
import HelloController from '../main/controllers/hello/HelloController';


chai.use(chaiHttp);

describe('dummy test', () => {
  it('should return true', () => {
    expect(true).to.equal(true);
  });
});

describe('exitPath', () => {
  it('should return true', () => {
    let app = new App();
    app.controllers = [new HelloController("/hello"),new HelloController("/hello2"),new HelloController("/hello3")];
    expect(app.existPath(app.controllers[0])).to.equal(true);
  });
  it('should return false', () => {
    let app = new App();
    app.controllers = [new HelloController("/hello"),new HelloController("/hello"),new HelloController("/hello3")];
    expect(app.existPath(app.controllers[0])).to.equal(false);
  });
});

describe('---init---', () => {
  it('should access to entry point', () => {
    let app = new App();
    app.init();
    chai.request(app.server.getApp())
      .get("/hello")
      .end((err, res) => {
        res.should.have.status(200);
      });
  });
  it('should not access to imaginary entry point', () => {
    let app = new App();
    app.init();
    chai.request(app.server.getApp())
      .get("/hellosafas")
      .end((err, res) => {
        res.should.have.status(400);
      });
  });
});

