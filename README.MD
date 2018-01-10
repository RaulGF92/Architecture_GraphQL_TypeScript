# Basic GraphQL backend architecture

This code is a basic template for start GraphQL backend service in **TypeScript**. For start to develop the app you only need know some concepts, a continue it will be explain it ,or if you don't need explanations only make run the project with this commands.

## Run the project

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

## Instructions

### Endpoints

The Endpoints is the layer that contain all GraphQL services. This layer is group in **Endpoint** that it is a set of entities, which it working together can it make a correct service's GraphQL.

The Endpoint entity is agruped in four entities and its is contains in the same folder. For example in Hello's Endpoint folder we have :

* Controller (HelloController.ts)
* Schema (Schema.ts)
* Query (Query.ts)
* Mutation [**Optional**] (Mutation.ts)
* Model Class [**Optional**] (Mutation.ts)

## Controller

The Controller is the class which it is comunicate with HTTP layer and binding us endpoint in a especific path. Because a controller can be of any protocol, the code have a especific **GraphQLController**. This class is use in the **HTTPServer** and contains the graphQL HTTP router.

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

### Business

The business layer is responsible of implementation of all the business rules,and contains some sets of functions that acts when a GraphQLController petition occurs.

The comunication between The bussiness layer and Controller layer is throught a JavaScript object (this is a technique requeriment), and is controller responsability parse  its function to a object throught **toObject** function.

```TypeScript
    //SHALL implement this function in Business layer
    toObject() : object; 
```  

### DAO

The DAO is the layer to access to the data, you must implement a access point to data from any database plataform.