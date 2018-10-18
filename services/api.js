const promise = require('bluebird');
const options = {
    promiseLib: promise
}
const pgp = require('pg-promise')(options);
const connection = 'postgres://postgres@localhost:5432/e-commerce';
const db = pgp(connection);

function getList(req,res,next){
    db.any("SELECT * FROM public.products")
        .then(function(data){
            res.status(200)
                .json({
                    status : 'success',
                    data:data
                });
        })
        .catch(function(err){
            return next(err);
        });
}

function getOne(req,res,next){
    db.any("SELECT * FROM public.products where id='"+req.params.id+"'")
        .then(function(data){
            res.status(200)
                .json({
                    status : 'success',
                    data:data
                });
        })
        .catch(function(err){
            return next(err);
        });
}

module.exports = {
    getList : getList,
    getOne : getOne
};
