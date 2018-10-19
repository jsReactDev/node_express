const promise = require('bluebird');
const options = {
    promiseLib: promise
}
const pgp = require('pg-promise')(options);
const connection = 'postgres://postgres@localhost:5432/e-commerce';
const db = pgp(connection);

function getProducts(req,res,next){
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

function getProduct(req,res,next){
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

function createProduct(req,res,next){
    db.none('insert into public.products(name) values(${name})',req.body)
        .then(()=>{
            res.status(200)
                .json({
                    status : 'success',
                    message:'item add to products'
                });
        })
        .catch((err)=>{
            console.log(err);
            return next(err);
        });
}
function editProduct(req,res,next){
    db.none("update public.products set name=${name} where id = '"+req.params.id+"'",req.body)
        .then(()=>{
            res.status(200)
                .json({
                    status:'success',
                    message:'edit success product'
                });
        })
        .catch((err)=>{
            return next(err);
        })
}
function deleteProduct(req,res,next){
    db.none("delete from public.products where id = '"+req.params.id+"'")
        .then(()=>{
            res.status(200)
                .json({
                    status:'success',
                    message:'delete success product'
                });
        })
        .catch((err)=>{
            return next(err);
        })
}

module.exports = {
    getProducts : getProducts,
    getProduct : getProduct,
    createProduct: createProduct,
    editProduct: editProduct,
    deleteProduct: deleteProduct
};
