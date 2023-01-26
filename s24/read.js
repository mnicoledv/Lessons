//Read Operation
//Query Operators

//Comparison Operator


//greater than $gt

db.users.find(
    {
        age: {$gt:50}
    }
);

//greater than or equal to $gte

db.users.find(
    {
        age: {$gte:50}
    }
);

//equal to $et

db.users.find(
    {
        age: {$eq:65}
    }
);

//even without the <eq> keyword it will still work (age: 65)

//less than $lt

db.users.find(
    {
        age: {$lt: 65}
    }
)

//less than or equal $lte

db.users.find(
    {
        age: {$lte: 65}
    }
)

//not equal to $ne

db.users.find(
    {
        age: {$ne: 65}
    }
)

//using keyword

db.users.find(
    {
        lastName: {
            $in: ["Hawking", "Doe"]
        }
    }
)

//Excercise 4: Search courses with HTML and React 

db.users.find(
    {
        courses: {
            $in: ["HTML", "React"]
        }
    }
);

//Logical Operators
//$or

db.users.find(
    {
        $or: [
            {firstName: "Neil"}
        ]
    }
);

// You may add another criteria

db.users.find(
    {
        $or: [
            {firstName: "Neil"},
            {age: 25},
            {age: {$gte:50}}
        ]
    }
);

// $and operator

// age not equal to 82 and 86
// phone number is 123456789


db.users.find(
    {
        $and: [

        
            {age: {$ne: 82}},
            {age: {$ne: 76}},
            {"contact.phone": "1213456789"}
        ]
    }
);

//can omit $and operator, can also be:

db.users.find(
    {
         age: {$ne: 82},
         age: {$ne: 76},
         "contact.phone": "123456789"

    }
);

//Field Projection

db.users.find(
    {firstName: "Jane"},
    {firstName: 1, _id:0},
);

//find document of Jane and return only the fields: firstName, lastName, and phone number



//Query Operator 
    // $regex
db.users.find(
    {
        firstName: {$regex: 'N', $options: '1'}
    }
);

//Excercise 5: 
/*
    Find users with letter "S" in their firstname and letter "D" in their last name.
    This is not case sensitive
    show only first and last name and hide the id field
*/
db.users.find(
    {firstName: {$regex: 'S', $options: 'i'}},
    {lastName: {$regex: 'D', $options: 'i'}}

);

/*Solution:

db.users.find(

    {
        firstName: {$regex: 'n', $options: 'i'},
        lastName: {$regex: 'D', $options: 'i'}
    },

    {
     firstName: 1, lastName: 1, _id: 0
    }

);
*/