//HelloController.ts (Hello)
import {
    buildSchema,
    GraphQLObjectType,
    GraphQLScalarType,
    GraphQLSchema,
    GraphQLString
} from 'graphql';
import * as graphqlHTTP from 'express-graphql';

//Main Controller class
import GraphQLController from '../../GraphQLController';

//Import intern dependencies - SHALL include all dependencies
import Query from './Query';
import Mutation from './Mutation';
import Hello from './Hello';
import Schema from './Schema';

export default class HelloController extends GraphQLController {

    public constructor(path: String) {
        //IF DON'T HAVE MUTATION IMPLEMENTATION PUT NULL
        super(path,Query,Mutation);
        //Only need put main Query is a check of minimal requeriments
    }

    public getQuery() {
        return new GraphQLObjectType({
            name: 'get',
            fields: () => ({
                ...this.query,
            })
        });
    }

    public getMutation() {
        return new GraphQLObjectType({
            name: 'post',
            fields: () => ({
                ...this.mutation,
            })
        });
    }

}