const conne=require("../config/conn")
function createUser(name,email,phone){
    const sql=`INSERT INTO users (name,email ,phone)VALUES ?,?,?`
    conne.execute(sql,[name,email,phone],(err,res)=>{
        if (err) return console.log("failed to create new user", err)
            console.log("user  created successfully",res)

    })
}
module.exports=createUser