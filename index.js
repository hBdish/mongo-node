import express from 'express'
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from 'express-fileupload'

const PORT = 80
const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api/v1',  router)

async function start() {
    try {
        await mongoose.connect('mongodb://admin:root@127.0.0.1:81/test?authSource=admin')
        app.listen(PORT, () => {
            console.log("server started on " + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}


start()

