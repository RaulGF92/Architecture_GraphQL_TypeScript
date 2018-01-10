import {Hello,HelloObjectType} from './Hello';
import HelloBusiness from '../../business/hello/HelloBusiness';
import { GraphQLObjectType, GraphQLString, GraphQLScalarType } from 'graphql';

const query = {
    hello: {
        type: HelloObjectType,
        description: "Say hello to the visitants",
        args: {
            name: { type: GraphQLString }
        },
        resolve: function (parent: any, args: any) {
            //Now here you must call Business Layer
            let bussiness = new HelloBusiness();
            if (args.name == undefined)
                return new Hello(bussiness.getHelloEmpty());
            return new Hello(bussiness.getHello(args.name));
        }
    }
};

export default query;