//UserController.ts (User)
import { GraphQLObjectType } from 'graphql';

//Main GraphQL controller class
import GraphQLController from '../../GraphQLController';

//GraphQL endpoint Intern dependencies
import Query from './Query';
import Mutation from './Mutation';
import Schema from './Schema';
import User from './User';

export default class UserController extends GraphQLController {

    public constructor(path: String) {
        //IF DON'T HAVE MUTATION IMPLEMENTATION PUT NULL
        super(path,Query,Mutation);
        //Only need put main Query is a check of minimal requeriments
    }

    public getMutation() {
        return this.mutation;
    }

    public getQuery() {
        return new GraphQLObjectType({
            name: 'userApi',
            fields: () => ({
                ...this.query,
            })
        });
    }
}