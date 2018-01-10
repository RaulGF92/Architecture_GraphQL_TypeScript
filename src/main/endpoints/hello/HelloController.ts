import GraphQLController from '../../GraphQLController';
import * as graphqlHTTP from 'express-graphql';
import { buildSchema, GraphQLObjectType,GraphQLScalarType } from 'graphql';
import { GraphQLSchema } from 'graphql/type/schema';
import { GraphQLString } from 'graphql/type/scalars';

//Import intern dependencies - SHALL include all dependencies
import query from './Query';
import mutation from './Mutation';
import { Hello,HelloObjectType } from './Hello';

export default class HelloController extends GraphQLController {

    public constructor(path: String) {
        super(path);
    }

    public getQuery(){
        return new GraphQLObjectType({
            name: 'get',
            fields: () => ({
                ...query,
            })
        });
    }

    public getMutation(){
        return new GraphQLObjectType({
            name: 'post',
            fields: () => ({
                ...mutation,
            })
        });
    }

}