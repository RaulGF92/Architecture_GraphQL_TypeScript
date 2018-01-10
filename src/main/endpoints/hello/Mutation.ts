//Mutation.ts (Hello)
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLScalarType
} from 'graphql';

// Business Layer
import HelloBusiness from '../../business/hello/HelloBusiness';

// GraphQL Endpoint Intern Dependencies 
import Hello from './Hello';
import Schema from './Schema';

const mutation = {
    changeName: {
        type: Schema,
        description: "Change the default name of hello query.",
        args: {
            name: { type: GraphQLString }
        },
        resolve: function (parent: any, args: any) {
            if (args.name == undefined)
                return new Hello("Can't change the User name default");
            var business = new HelloBusiness();
            business.setDefaultName(args.name);
            return new Hello("The name was changed");
        }
    }
};

export default mutation;