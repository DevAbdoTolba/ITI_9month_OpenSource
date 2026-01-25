### 1
```js
use FacultySystemDB
```

### 2
```js
db.createCollection("student")
```

### 3
```js
db.student.insertOne(
  {
    fName:"Mrihan",
    lName:"Mohamed",
    age:26,
    faculty:{
      name:"FCI",
      address:"Minia"
    },
    grades:[
      {
        cname:"c#",
        grade:60,
        pass:true
      },
      {
        cname:"JS",
        grade:100,
        pass:true
      }
    ],
    isFired:false
  })
```

6975e9ae41b66778dc628ca0

```js
db.student.insertMany([
  {
    fName:"Abdo",
    lName:"Mohamed",
    age:26,
    faculty:{
      name:"FCI",
      address:"Minia"
    },
    grades:[
      {
        cname:"c#",
        grade:60,
        pass:true
      },
      {
        cname:"JS",
        grade:100,
        pass:true
      }
    ],
    isFired:false
  },
  {
    fName:"Tolba",
    lName:"Mohamed",
    age:26,
    faculty:{
      name:"FCI",
      address:"Minia"
    },
    grades:[
      {
        cname:"c#",
        grade:60,
        pass:true
      },
      {
        cname:"JS",
        grade:100,
        pass:true
      }
    ],
    isFired:false
  },
  {
    fName:"Khaled",
    lName:"Mohamed",
    age:26,
    faculty:{
      name:"FCI",
      address:"Minia"
    },
    grades:[
      {
        cname:"c#",
        grade:60,
        pass:true
      },
      {
        cname:"JS",
        grade:100,
        pass:true
      }
    ],
    isFired:true
  }
])
```

    '0': ObjectId('6975ebbe41b66778dc628ca1'),
    '1': ObjectId('6975ebbe41b66778dc628ca2'),
    '2': ObjectId('6975ebbe41b66778dc628ca3')


### 4

``` js
db.student.find()
```

```js
db.student.find({"fName":"Tolba"})
```

```js
db.student.find({
  "$or":[
    {"fName" : "Ahmed"},
    {"lName" : "Ahmed"}
  ]
})
```

```js
db.student.find({
  "fname" : {
    "$ne" : "Ahmed"
  }
})
```

```js
db.student.find({
  "age" : {
    "$lt" : 21
  }
})
```

```js
db.student.find({"isFired": true})
```

```js
db.student.find({
  "age" : {
    "$gte" : 21
  },
  faculty: {
    "$ne" : null
  }
})
```

```js
db.student.find({
  "fName" : "Tolba"
  },
  {
    "fName" : 1, "lName" : 1, "isFired" : 1, "_id" : 0
  }
)
```

### 5

```js
db.student.updateOne({
  "fName" : "Khaled"
  }, {
    "$set" : {
      "fName" : "Khalood"
    }
  }
)
```

```js
db.student.updateMany({
  "fName" : "Khaled"
  }, {
    "$set" : {
      "fName" : "Khalood"
    }
  }
)
```


```js
db.student.replaceOne(
  {"fName" : "Khalood"},
  {
    fName:"Khalieed",
    lName:"Ahmed",
    age:26,
    faculty:{
      name:"FCI",
      address:"Minia"
    },
    grades:[
      {
        cname:"c#",
        grade:60,
        pass:true
      },
      {
        cname:"JS",
        grade:100,
        pass:true
      }
    ],
    isFired:true
  }
)
```

### 6

```js
db.student.deleteMany({"isFired" : true})
```


### 7

```js
db.studentTest.drop()
```

### 8

```js
db.dropDatabase()
```

### 9

```js
use FacultySystemV2
```

```js
db.createCollection("student")
db.createCollection("faculty")
db.createCollection("course")
```

```js
db.student.insertOne({
  "FirstName" : "Tolba",
  "LastName"  : "Ahmed",
  "isFired"   : false,
  "FacultyID" : 1,
  "Courses"   : [
    {
      "CourseID": 0,
      "grade"   : 15
    },
    {
      "CourseID": 1,
      "grade"   : 20
    },
  ]
})
```

```js
db.faculty.insertOne({
  "Faculty Name" : "CCIT",
  "Address"      : "Aswan"
})
```

```js
db.course.insertOne({
  "Course Name" : "JAVA",
  "Final Mark" : 51
})
```