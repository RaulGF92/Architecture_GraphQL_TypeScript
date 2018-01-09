import  GraphQLController  from '../GraphQLController';
import  Business  from '../../business/Business';
import * as graphqlHTTP from 'express-graphql';
import  { GraphQLSchema }  from 'graphql/type/schema';
import  { GraphQLString }  from 'graphql/type/scalars';
import  UserBusiness  from '../../business/users/UserBusiness';
import { buildSchema, GraphQLObjectType } from 'graphql';


export default class UserController implements GraphQLController {

    private business: Business;
    private path: String;

    public constructor(path: String) {
        this.path = path;
        this.business = new UserBusiness();
    }

    public getGraphqlHttp() {
        return graphqlHTTP({
            schema: this.getBuildSchema(),
            rootValue: this.getBusiness(),
            graphiql: true,
        });
    }

    public getBusiness() {
        return {
            hello: () => { return "Hola Primo"; }
        };
    }

    public getBuildSchema() {
        return new GraphQLSchema({
            query: new GraphQLObjectType({
                name: "hello",
                fields: {
                    hello: { type: GraphQLString }
                }
            }),
        });
    }

    public getPath() {
        return this.path;
    }

}