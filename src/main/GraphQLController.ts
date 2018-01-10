import { GraphQLSchema, GraphQLType, GraphQLInputObjectType, GraphQLObjectType, GraphQLObjectTypeConfig } from 'graphql';
import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchemaConfig } from 'graphql/type/schema';

export default abstract class GraphQLController {
    private path: String;

    constructor(path: String) {
        this.path = path;
    }

    public getPath() {
        return this.path;
    }

    public getBuildSchema() {
        let query = this.getQuery();
        let mutation = this.getMutation();

        let hasQuery = (query != undefined) || (query != null);
        let hasMutation = (mutation != undefined) || (mutation != null);

        if ((!hasMutation && !hasQuery) || (hasMutation && !hasQuery))
            throw new Error("Not init well");

        if (hasMutation && hasQuery) {
            return new GraphQLSchema({
                query: this.getQuery(),
                mutation: this.getMutation()
            });
        }

        if (!hasMutation && hasQuery) {
            return new GraphQLSchema({
                query: this.getQuery()
            });
        }
    }

    public getGraphqlHttp() {
        return graphqlHTTP({
            schema: this.getBuildSchema(),
            graphiql: true,
        });
    }

    abstract getQuery(): any;
    abstract getMutation(): any;

}