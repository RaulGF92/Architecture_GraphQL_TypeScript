//GraphQLController.ts
import {
    GraphQLSchema,
    GraphQLType,
    GraphQLInputObjectType,
    GraphQLObjectType
} from 'graphql';
import * as graphqlHTTP from 'express-graphql';

export default abstract class GraphQLController {

    private path: String;
    protected query: any;
    protected mutation: any;

    constructor(path: String, query: any, mutation: any) {
        this.path = path;
        this.query = query;
        this.mutation = mutation;
    }

    public getPath() {
        return this.path;
    }

    public getBuildSchema() {
        let _query = this.query;
        let _mutation = this.mutation;

        let hasQuery = (_query != undefined) || (_query != null);
        let hasMutation = (_mutation != undefined) || (_mutation != null);

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