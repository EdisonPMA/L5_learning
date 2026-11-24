const express=require("express")
const conne=require("./config/conn")
const userRouter=require("./routes/user.route")
const app=express()
const port=3000
app.use(express.json())
app.use("/api/user/",userRouter)
conne
app.listen(port,()=>{
    console.log(`server is running successfully on port:${port}`)
})