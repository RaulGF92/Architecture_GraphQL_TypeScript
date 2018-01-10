import { GraphQLObjectType, GraphQLString } from 'graphql';
import * as GraphQLDate from 'graphql-date';

export class Hello {
    message: string;
    timeOfCreation: Date;

    constructor(message: string) {
        this.message = message;
        this.timeOfCreation = new Date();
    }
}

export const HelloObjectType = new GraphQLObjectType({
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


