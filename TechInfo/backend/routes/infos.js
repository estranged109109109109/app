const express = require('express');
const oracledb = require('oracledb');
const dbconfig = require('../config/dbconfig.js');
const router = express.Router();

const Info = require('../schemas/info');

router.get('/:pgmNo/:elem',async(req,res)=>{
    try{
        const result = await Info.find({PGMNO: req.params.pgmNo, $or :[{ELEMENT: req.params.elem}]}, {"_id": false});
        res.json(result);
    }catch(err){
        res.send(err);
    }
});

module.exports =router;