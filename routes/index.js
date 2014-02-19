/*
 * GET home page.
 */

var fs = require('fs');

exports.listArticles = function(db) {
    return function(req, res){
        db.find({}, function (error, docs) {
            if ( error ) {
                return new Error('Error on getting list of Articles');
            }

            res.render('index', {
                    articles: docs
                }
            );

        });
    }
}

exports.article = function(db) {
    return function(req, res){
        var pagePath = req.param('title');

        db.findOne({ path: pagePath }, function (error, doc) {
            if ( error ) {
                return new Error('Error on getting article');
            }

            res.render('blog', {
                    content: doc
                }
            );
        });

    }
}