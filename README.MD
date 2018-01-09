# Basic GraphQL backend architecture

This code is a basic template for start GraphQL backend service in **TypeScript**. For start to develop the app you only need know some concepts, a continue it will be explain it ,or if you don't need explanations only make run the project with this commands.

## Run the project

You need upgrade the project using NPM dependencies, go to your **Project PATH** and put:

```bash
    npm upgrade
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

### Controlers

The controllers are pieces of code that control and create Http conections, or other types of protocols. In this case the architecture that it has this code, have create it a interface call **GraphqlController**. This class implements all the basic to start a new GraphQL endpoint. You SHALL implements the interface and them put in controllers array, ubicated in index main class.

```TypeScript
    let controllers = [
        new HelloController("/hello"),
        //New controllers
    ];
```

Other thing we have keep in mind is the initialization of GraphQl service, This is initializated using the Schema object and the root object.The Schema object is provided in the controller using the **getSchema()** function, you can look this schema taked of **HelloController** class.

```TypeScript
    public getBuildSchema(){
        return new GraphQLSchema({
            query: new GraphQLObjectType({
                name : "hello",
                fields : {
                    hello : { type : GraphQLString }
                }
            }),
          });
    }
```

The root object is provided by Bussiness layer, so you must import the Bussines class related with controller class that you are implementing, and implement the **getBusiness()** Function.

```TypeScript
    public getBusiness(){
        return new MyBusinessClass().toObject();
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