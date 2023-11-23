const express = require('express');
const app = express();
const cors = require('cors');
require('./db/connect');
const users = require('./db/model');

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get('/',(req,res) => {
    res.status(200).json({msg:"Everthing fine,starting using"});
})

app.get('/user/task', async (req,res) => {
    try {
        const data = await users.find();
        res.status(200).json(data);
    } catch (err) {
        console.log(`An error:${err}`);
        res.status(500).json({msg:"internal server error"});
    }
})
app.post('/user/task', async (req,res) => {
    try {
        const data = new users(req.body);
        const saved = await data.save();
        res.status(201).json({msg:"server responsed DONE"})
    } catch (err) {
        console.log(`An error occurred in proccess:${err}`);
        res.status(500).json({msg:"internal server error"});
    }
})

app.delete('/user/task', async (req,res) => {
    try {
        const { _id } = req.body;
        const data = await users.findByIdAndDelete({_id:_id});
        res.status(200).json(data);
    } catch (err) {
        console.log(`An error occurred in proccess:${err}`);
        res.status(500).json({msg:"internal server error"});
    }
})

app.patch('/user/task', async (req,res) => {
    try {
        const delte = await users.deleteMany({});
        const data = await users.create(req.body);
        res.status(200).json(data);
    } catch (err) {
        console.log(`An error occurred in proccess:${err}`);
        res.status(500).json({msg:"internal server error"});
    }
})

app.listen(port,() => {
    console.log(`server started at port ${port}`);
})