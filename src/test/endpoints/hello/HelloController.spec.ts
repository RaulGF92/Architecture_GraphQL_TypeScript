//HelloController.spec.ts (Hello Controller)
import { expect, should } from 'chai';
import * as chai from 'chai';
import "mocha";

import HelloController from '../../../main/endpoints/hello/HelloController';
import { GraphQLObjectType } from 'graphql';

let _should = should();
let _expect = 

describe("constuctor", () => {
    it("be not null", () => {
        let helloController = new HelloController("/test");
        _should.exist(helloController);
    });
});

describe("getQuery", () => {
    it("be GraphQLObjectType", () => {
        let helloController = new HelloController("/test");
        _should.exist(helloController.getQuery());
        expect(helloController.getQuery()).to.be.instanceOf(GraphQLObjectType);
    });
});

describe("getMutation", () => {
    it("be GraphQLObjectType", () => {
        let helloController = new HelloController("/test");
        _should.exist(helloController.getQuery());
        expect(helloController.getMutation()).to.be.instanceOf(GraphQLObjectType);
    });
});