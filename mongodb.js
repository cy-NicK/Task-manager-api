//CRUD

// const mongodb=require('mongodb')
// const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID

const {MongoClient,ObjectID}=require('mongodb')

const databaseName='task-manager'
const connectionURL='mongodb://127.0.0.1:27017'

// const id=new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{useUnifiedTopology:true},(error,client)=>{
    if(error){
        return console.log("Error Detected..")
    }

    const db=client.db(databaseName)
    // db.collection('users').deleteMany({
    //     age:23
    // }).then((r)=>{
    //     console.log(r)
    // }).catch((e)=>{
    //     console.log(e)
    // })

    db.collection('tasks').deleteOne({
        description:'Update'
    }).then((r)=>{
        console.log(r)
    }).catch((err)=>{
        console.log(err)
    })

})