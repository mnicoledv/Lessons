//CRUD Operations

//Create 
    // InsertOne
    // InsertMany

/*
    Syntax: 
        db.collectionName.insertOne({object})
        db - default
        insertOne - built in method

        - Javascript Comparison
        - object.objectName.method ({object})

*/

db.users.insertOne(
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 21,
        contact: {
            phone: "87654321",
            email: "janedoe@mail.com"
        },
        courses: ["CSS", "JavaScript", "PHP"]
    }
);

//insertMany()

/*
    Syntax: 
        db.collectionName.insertMany([{objectA}, {objectB}])
*/

db.users.insertMany([
    {
        firstName: "Stephen",
        lastName: "Hawking",
        age: 76,
        contact: {
            phone: "87654321",
            email: "stephenhawking@mail.com"
        },
        courses: ["Python", "React", "PHP"],
        department: "none"
    },
    {
        firstName: "Neil",
        lastName: "Armstrong",
        age: 82,
        contact: {
            phone: "87654321",
            email: "neilarmstrong@mail.com"
        },
        courses: ["React", "Laravel", "SaSS"],
        department: "none"
    }
]); 


//Read/Update

/*

    Syntax: 
        -db.collectionName.find()
                query, projection
        -db.collectionName.find({field:value});
*/

db.users.find();
// it returns all documents

//using a single query
//returns document/s that passes the query/filter
// this is case sensitive
db.users.find({firstName: "Stephen"});


//using multiple query parameters
//depends on the key value pairs declared (inserted) inside the collection

/*
    Syntax:
        db.collectionName.find({fieldA:valueA, fieldB:valueB});
*/

db.users.find({
    lastName: "Armstrong",
    age: 82,

});

//update()

/*

    db.collectionName.updateOne(
        {criteria},
        {$set: 
            {field:value}
        }
    );
    db.collectionName.updateMany();
*/

db.users.insertOne({
    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "0000000",
        email: "test@mail.com"
    },
    courses: [],
    department: "none"
});

//update a single document
db.users.updateOne(
    {
        firstName: "Test",
    },
    {
        $set:{
            firstName: "Bill",
            lastName: "Gates",
            age: 65,
            contact: {
                phone: "123456789",
                email: "bill@mail.com"
            },
            courses: ["PHP", "Laravel", "HTML"],
            department: ["Operations"],
            status: "active"
        }
    }
);

//Excercise 1: Update document with first name "Jane" with field department = none
//use insertOne method

db.users.insertOne({
    firstName: "Jane",
    lastName: "Doe",
    age: 0,
    contact: {
        phone: "0000000",
        email: "jane@mail.com"
    },
    courses: [],
    department: "none"
});

//update a single document
db.users.updateOne(
    {
        firstName: "Jane",
    },
    {
        $set:{
            firstName: "Maria",
            fieldDepartment: ["none"],
        }
    }
);

//update multiple documents at once

/*

    Syntax: db.collectionName.updateMany({criteria}, {Set: {field:value}});

*/

db.users.updateMany(
    {
        department: "none"
    },
    {
        $set: {
            department: "HR"
        }
    }
);

//insert another document for replaceOne
db.users.insertOne({

    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "0000000",
        email: "jane@mail.com"
    },
    courses: [],
    department: "none"

});

//replacing the whole document should not be practice (only if necessary)

db.users.replaceOne(
    {
        firstName: "Test"
    },
    {
        firstName: "Billy",
        lastName: "Crawford",
        age: 35,
        contact: {
            phone: "11213456789",
            email: "billycrawford@mail.com"
        },
        courses: ["React", "Node", "Express"],
        department: "Finance",
    }
);

//Excercise 2: Update the status field of Bill Gates, use the keyword $unset
//clue: updateOne()
``
db.users.updateOne(
    {
        firstName: "Bill",
    },
    {
        $unset:{
           status: ["active"],
        }
    }
);

//Delete
    // deleteOne();
    // deleteMany();

//deleteOne

/*
    Syntax: 

        dv.collectionName.deleteOne({Criteria});
*/

//create a default document


db.users.insertOne({

    firstName: "Test",
    lastName: "Test",
    age: 0,
    contact: {
        phone: "0000000",
        email: "jane@mail.com"
    },
    courses: [],
    department: "none"

});

// using deleteOne()

db.users.deleteOne(
    {
        firstName: "Test"
    }
);

// delete multiple documents

// be careful using deleteMany() method. If there is no criteria provided, it will delete all documents in the database.

// do not use db.collectionName.deleteMany(); (with no criteria)


//Q: How to add back deleted documents

db.users.insertMany(
    [
        {
            firstName: "Jane",
            lastName: "Doe",
            age: 0,
            contact: {
                phone: "0000000",
                email: "jane@mail.com"
            },
            courses: ["CSS", "JavaScript", "PHP"],
            department: "HR"
        },
        {
            firstName: "Stephen",
            lastName: "Hawking",
            age: 76,
            contact: {
                phone: "87654321",
                email: "stephenhawking@mail.com"
            },
            courses: ["Python", "React", "PHP"],
            department: "HR"
        },
        {
            firstName: "Neil",
            lastName: "Armstrong",
            age: 82,
            contact: {
                phone: "87654321",
                email: "neilarmstrong@mail.com"
            },
            courses: ["React", "Laravel", "SaSS"],
            department: "HR"
        }


    ]
   
);

// Advanced Queries

    //Retrieving data with complex data structures is also a good skill for any developer to have

    //Real world examples of data can be as complex as having two or more layers of nested objects and arrays

    //learning to query this kind of data is also essential to ensure that we are able to retrieve any information that we would need in our application

//Excercise 3: Retrieve documents that has phone number 87654321
//query on nested fields.

db.users.find({
    contact: {
        phone: ["87654321"]
    },

});

//Solution: use dot notation (mongoDB is objects)


db.users.find({
    "contact.phone": "87654321"
    },
);


//Query an array with exact elements
// CSS, JS, PHP

db.users.find({
   courses: ["CSS", "JavaScript", "PHP"] 
});

//Query an embedded document

db.users.find(
    {
        contact: {
            phone: "87654321",
            email: "stephenhawking@mail.com"
        },
    }
    
);

//Query an array without regard to order
//React, Python
//$all

db.users.find(
    {
        courses: {
            $all: ["React", "Python"]
        }
    }
);
