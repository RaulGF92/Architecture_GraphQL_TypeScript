# Basic GraphQL backend architecture

This code is a basic template for start GraphQL backend service in **TypeScript**. For start to develop the app you only know some easy concepts or if you don't need explanations only make run the project using this command.

## Run the project

You need upgrade the project using NPM dependencies, go to your **Project PATH** and put:

```bash
    npm upgrade
```

Then for run the project in dev mode you only need run this code:

```bash
    npm run dev
```

## Instructions

### Controlers

The controllers are pieces of code that control and create Http conections, or other protocols. In this case the architecture that it has,have create it a interface call **GraphqlController**. This class implements all the basic to start a new GraphQL endpoint. You SHALL implements the interface and them put in controllers array, ubicated in index main class.

```TypeScript
    let controllers = [
        new HelloController("/hello"),
        //New controllers
    ];
```

The root object added with schema is provied by Bussiness layer so you must import the Bussines class relation with this controller class and implement the **getSchema()** Function.

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