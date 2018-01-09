import { GraphQLSchema } from 'graphql';

export default interface GraphqlController {
    
    getBuildSchema() : GraphQLSchema;
    getBusiness() : object;
    getPath() : String;
    getGraphqlHttp() : any;
}