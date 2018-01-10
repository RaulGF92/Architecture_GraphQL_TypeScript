import GraphQLController from '../../GraphQLController';
import { GraphQLObjectType } from 'graphql';

//Intern dependencies
import query from './Query';
import mutation from './Mutation';

export default class UserController extends GraphQLController {
    
    private _query : any;
    private _mutation : any;

    public constructor(path: String) {
        super(path);
    }

    public getMutation() {
        return this._mutation;
    }

    public getQuery() {
        return new GraphQLObjectType({
            name: 'userApi',
            fields: () => ({
                ...this._query,
            })
        });
    }
}