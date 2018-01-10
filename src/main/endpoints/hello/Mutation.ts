import { GraphQLObjectType, GraphQLString, GraphQLScalarType } from 'graphql';
import { HelloObjectType,Hello } from './Hello';
import HelloBusiness from '../../business/hello/HelloBusiness';

const mutation = {
    changeName: {
        type: HelloObjectType,
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