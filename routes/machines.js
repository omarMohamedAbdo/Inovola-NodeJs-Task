const express = require("express");
const Machines = require("../models/machines");
const router = express.Router();

router.get('/',(req,res)=>{
    const { product_type, water_line_compatible } = req.query;
    let query = {};
    if(product_type) {
        query.product_type = product_type;
    }
    if(water_line_compatible) {
        query.water_line_compatible = water_line_compatible;
    }
    Machines.find(query,(err,machines)=>{
        if (err) return res.send(err);
        res.status(200).json(machines)
    });
});

module.exports = router;