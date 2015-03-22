var connect           = require('connect')
    route             = require('connect-route')
    filecache         = require('filecache')
    jade              = require('jade')
    nib               = require('nib')
    nodemailer        = require('nodemailer')
    querystring       = require('querystring')
    sendmailTransport = require('nodemailer-sendmail-transport')
    stylus            = require('stylus')

    app         = connect()
    port        = '8081'
    files       = __dirname + '/static'
    views       = __dirname + '/views/'
    fcOptions   = {
                    watchDirectoryChange: true,
                    gzip: true,
                    deflate: true
                  }
    transporter = nodemailer.createTransport(sendmailTransport({
                    path: '/usr/sbin/sendmail'
                  }))

// Use compression
app.use(filecache(files, fcOptions, function(err, cache) {
}).httpHandler())

// Set up Stylus
function compile(str, path) {
  return stylus(str)
  .set('filename', path)
  .set('compress', true)
  .set('debug', false)
  .set('sourcemap')
  .use(nib())
  .import('nib');
}
app.use(stylus.middleware({
  src: files,
  compile: compile
}))

// Routes
app.use(route(function (router) {
  router.get('/', function (req, res, next) {
    res.end(jade.renderFile(views + 'index.jade', {title: 'Home'}))
  })
  router.get('/about', function (req, res, next) {
    res.end(jade.renderFile(views + 'about.jade', {title: 'About'}))
  })
  router.get('/resume', function (req, res, next) {
    res.end(jade.renderFile(views + 'resume.jade', {title: 'Résumé'}))
  })
}))

// 404
app.use (function onNotFound(req, res, next) {
  res.writeHead(404, {'content-type': 'text/html'})
  res.end(jade.renderFile(views + 'error.jade', {status: 404}))
})

// 500
app.use(function onError(err, req, res) {
  res.writeHead(500, {'content-type': 'text/html'})
  jade.renderFile(views + 'error.jade', {status: 500})
  res.end()
});

// Listen
app.listen(port, function() {
  console.log('Listening on ' + port)
})
