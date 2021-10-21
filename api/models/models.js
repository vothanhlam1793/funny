exports._create = function (Model, data, cb){
    var model = new Model(data);
    model.save(function(e, r){
        if(cb){
            cb(e,r);
        } else {

        }
    })
}

exports._update = function (Model, id, data){

}

exports._read = function (Model, id){

}

exports._find_all = function (Model, cb){
    Model.find({}, (e, r) => {
        if(cb){
            cb(e, r);
        }
    })
}

exports._delete = function (Model, id){

}