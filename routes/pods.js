const express = require("express");
const Pods = require("../models/pods");
const router = express.Router();

router.get('/',(req,res)=>{
    const { product_type, coffee_flavor, pack_size_in_dozens } = req.query;
    let query = {};
    if(product_type) {
        query.product_type = product_type;
    }
    if(coffee_flavor) {
        query.coffee_flavor = coffee_flavor;
    }
    if(pack_size_in_dozens) {
        query.pack_size_in_dozens = pack_size_in_dozens;
    }
    Pods.find(query,(err,pods)=>{
        if (err) return res.send(err);
        res.status(200).json(pods)
    });
});

module.exports = router;