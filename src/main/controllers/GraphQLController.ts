import { GraphQLSchema } from 'graphql';

export default interface GraphQLController {
    
    getBuildSchema() : GraphQLSchema;
    getBusiness() : object;
    getPath() : String;
    getGraphqlHttp() : any;
}