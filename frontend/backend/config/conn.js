const mysql=require("mysql2")
const conne=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"reactDB",
    password:""
})
conne.connect((err)=>{
    if (err){
        console.log("database connection failed")
    }
    else {
        console.log ("database connected successfully")
    }
})