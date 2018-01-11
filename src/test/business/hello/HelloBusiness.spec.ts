//HelloBusiness.spec.ts (Hello Business)
import { expect, should } from 'chai';
import * as chai from 'chai';
import "mocha";

import HelloBusiness from '../../../main/business/hello/HelloBusiness';

describe("getHelloEmpty()",() => {
    it("Shall return a 'Hello User'",() => {
        let business = new HelloBusiness();
        expect(business.getHelloEmpty()).to.equal("Hello User");
    });
    it("Shall return a 'Hello Jimmy'",() => {
        let business = new HelloBusiness();
        business.setDefaultName("Jimmy");
        expect(business.getHelloEmpty()).to.equal("Hello Jimmy");
    });
});

describe("getHello",() => {
    it("Shall return a 'Hello Ramon'",() => {
        let business = new HelloBusiness();
        expect(business.getHello("Ramon")).to.equal("Hello Ramon");
    });
});

