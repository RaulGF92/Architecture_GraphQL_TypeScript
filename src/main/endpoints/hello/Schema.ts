//Schema.ts (Hello)
import { GraphQLObjectType, GraphQLString } from 'graphql';
import * as GraphQLDate from 'graphql-date';

const Schema = new GraphQLObjectType({
    name: "hello",
    fields: {
        message: {
            type: GraphQLString,
            description: "Message send it to user"
        },
        timeOfCreation: {
            type: GraphQLDate,
            description: "Time of Entity creation"
        }
    }
});

export default Schema;
