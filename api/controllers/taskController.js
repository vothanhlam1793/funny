var m = require("../models/models");
var Task = require("../models/taskModel");
exports.list_all = function(req, res){
    m._find_all(Task, function(e, r){
        if(e){
            res.send(e);
        } else {
            res.json(r);
        }
    })
}

exports.create_task = function(req, res){
    m._create(req.body, (e,r)=>{
        if(e){
            res.send(e);
        } else {
            res.join(r);
        }
    })
}