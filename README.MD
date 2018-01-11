# Introduction

This code is a basic template for start GraphQL backend service in **TypeScript**. For start to develop the app you only need know some concepts, a continue it will be explain it ,or if you don't need explanations only make run the project with this commands.

# Run the project

You need upgrade the project using NPM dependencies, go to your **Project PATH** and put:

```bash
    npm upgrade
```

For run all test of app only need put:

```bash
    npm test
```

Then you must run the project in dev mode using this code:

```bash
    npm run dev
```

Finaly, for check if the service is run correctly you only need put this link in your browser and then the GraphQL IDE going to appear:

```URL
    http://localhost:8880/hello
```

# Instructions

## Endpoints

This layer is group on **Endpoint** that it is a set of entities, which its working together, can it make a correct service's GraphQL.

The Endpoint entity is agrouped in four entities and its are contains in the same folder. For example in Hello's Endpoint folder we have :

* Controller (HelloController.ts)
* Schema (Schema.ts)
* Query (Query.ts)
* Mutation [**Optional**] (Mutation.ts)
* Model Class [**Optional**] (Hello.ts)

### *Controller*

The Controller is the class which it is comunicate with HTTP layer and binding us endpoint entity to a especific URL path. Because a controller can be of any protocol, the code have a especific **GraphQLController**, for binding the endpoint entities to GraphQL protocol. This class is use in the **App** class and contains the graphQL HTTP router using in **HttpRouter**.

When we create a new Controller we shall extend us class from **GraphQLController**. And the TypeScript say us that we need implement some constructor and functions are example are this:

```TypeScript
class MyController extends GraphQLController {

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
```

### Init the controllers in the App

For your controller work in the code you must insert the controller in  controllers's array inside **App** class . Go to **App** class and on it code you will looking a array, insert the controller in array,something like this code:

```TypeScript
    public controllers = [
        new HelloController("/hello"),
        new UserController("/user")
        //add new controllers
    ];
```

When you are init the controller you shall **try don't have two controllers with the same path**, otherwhise the app it brokes if the controllers's array have this error.

### Add more Queries or Mutations

When you have a entity that have some relationship or you like put other entities in the same endpoint you only need put the queries or the mutations in its field that correspond.

In the case of Query:

```TypeScript
    public getQuery() {
        return new GraphQLObjectType({
            name: 'get',
            fields: () => ({
                ...this.query,
                ...this.otherQuery
            })
        });
    }
```

In the case of Mutation:

```TypeScript
    public getMutation() {
        return new GraphQLObjectType({
            name: 'post',
            fields: () => ({
                ...this.mutation,
                ...this.otherMutation
            })
        });
    }
```

### *Query, Mutation and Schema*

The **Query** and **Mutation** is located in independients files (Query.ts and Mutation.ts). In GraphQL documentation is init with a **GraphQLObjectType**, but in this code mutations and queries are **Object** types that then in controller's class will be init in GraphQLObjectType. We have a example in following code:

```TypeScript
const query = {
    hello: {
        type: Schema,
        description: "Say hello to the visitants",
        args: {
            name: { type: GraphQLString }
        },
        resolve: function (parent: any, args: any) {
            //Now here you must call Business Layer
            let bussiness = new HelloBusiness();
            if (args.name == undefined)
                return new Hello(bussiness.getHelloEmpty());
            return new Hello(bussiness.getHello(args.name));
        }
    }
};
export default query;
```

The query and mutation have the same structure and import a type tag which is a import Schema class. In the especial case of **Mutation,the creation is Optional but when you create the controller you need init mutation as null** for avoid errors.

```TypeScript
    public constructor(path: String) {
        //IF DON'T HAVE MUTATION IMPLEMENTATION PUT NULL
        super(path,Query,null);
        //Only need put main Query is a check of minimal requeriments
    }
```

**Schema** is a **GraphQLObjectType** class ubicate on Schema.ts , it indicate the form of petition response of this controller, is the same like GraphQL theory and we don't explain it but we put a example next:

```TypeScript
const Schema = new GraphQLObjectType({
    name: "hello",
    fields: {
        message: {
            type: GraphQLString,
            description: "Message send it to user"
        },
        timeOfCreation: {
            type: GraphQLDate,
            description: "Time of Entity creation"
        }
    }
});

export default Schema;
```

### *Model class*

When you create a respond to send you must create a object with the same properties than **Schema** class, this take a lot of time and is recomendable you use a class to help to creation and validation of data to response. This class is totaly opcional and don't need exist on endpoint for have a correct function of code, but help in code develope. Following have a example:

```TypeScript
export default class Hello {
    message: string;
    timeOfCreation: Date;

    constructor(message: string) {
        this.message = message;
        this.timeOfCreation = new Date();
    }
}
```

## Business

The business layer is responsible of all implementations of business rules, manage all data changes and send it back to endpoints layer. This layer scape of us architecture vision, but you can devel here in busines folder or make a bridge with a existent or existents business.

## DAO

The DAO is the layer to access to the persistent data this access between business, but you can acess throught endpoint layer. Like business this layer escape of us architecture vision and can build here in DAO folder or make a bridge with a existant DAO.