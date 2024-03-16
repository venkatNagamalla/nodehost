
const express = require("express")
const app = express()
const {open}  = require("sqlite")
const sqlite3 = require("sqlite3")
const path = require("path")
const dbPath = path.join(__dirname,"app.db")
let db = null

const initializeDbAndServer = async() => {
    try{
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        })
        app.listen(process.env.PORT || 3004,()=>{
            console.log("app starting")
        })
    }
    catch(e){
        console.log(`server error: ${e.message}`)
        process.exit(1)
    }
}

initializeDbAndServer()

app.get("/", async(request, response)=>{
    response.send("Hello ")
})