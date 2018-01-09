import GraphqlController from '../GraphQLController';
import * as graphqlHTTP from 'express-graphql';
import { buildSchema, GraphQLObjectType } from 'graphql';
import { GraphQLSchema } from 'graphql/type/schema';
import { GraphQLString } from 'graphql/type/scalars';

export default class HelloController implements GraphqlController {

    private path: String;

    public constructor(path: String) {
        this.path = path;
    }

    public getGraphqlHttp() {
        return graphqlHTTP({
            schema: this.getBuildSchema(),
            rootValue: this.getBusiness(),
            graphiql: true,
        });
    }

    public getBusiness(){
        return {
            hello : () => {return "Hola Primo";}
        };
    }

    public getBuildSchema(){
        return new GraphQLSchema({
            query: new GraphQLObjectType({
                name : "hello",
                fields : {
                    hello : { type : GraphQLString }
                }
            }),
          });
    }

    public getPath() {
        return this.path;
    }
}