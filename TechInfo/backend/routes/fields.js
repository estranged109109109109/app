const express = require('express');
const oracledb = require('oracledb');
const dbconfig = require('../config/dbconfig.js');
const router = express.Router();

const Info = require('../schemas/field');

router.get('/:tableNm',async(req,res)=>{
    try{
        const result = await Info.find({TBL_NM: req.param.tableNm}, {"_id": false});
        res.json(result);
    }catch(err){
        res.send(err);
    }
});

module.exports =router;