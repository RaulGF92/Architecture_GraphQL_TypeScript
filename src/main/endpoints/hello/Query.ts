//Query.ts (Hello)
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLScalarType
} from 'graphql';

//Bussines dependencies
import HelloBusiness from '../../business/hello/HelloBusiness';

//GraphQL Endpoint Intern dependencies
import Hello from './Hello';
import Schema from './Schema';

const query = {
    hello: {
        type: Schema,
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