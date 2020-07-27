const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})



// const task=new Task({
//     description:"Clean"
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((err)=>{
//     console.log(err)
// })