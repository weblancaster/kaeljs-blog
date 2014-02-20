
/**
 * Module dependencies.
 */

// App config
var express = require('express')
    , exphbs  = require('express3-handlebars')
    , http = require('http')
    , path = require('path')
    , app = express();

// DB config
var NeDB = require('nedb')
    , pathDB = './db/articles'
    , db = new NeDB({ filename: pathDB, autoload: true });

// Routes
var routes = require('./routes');

// Handlebars config
app.engine('handlebars', exphbs({
        defaultLayout: 'main'
    })
);


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// index route
app.get('/', routes.listArticles(db));

// article
app.get('/blog/:title', routes.article(db));

// about page
app.get('/about', routes.about(db));

// lab page
app.get('/lab', routes.lab(db));

// initialize server and log a message
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
