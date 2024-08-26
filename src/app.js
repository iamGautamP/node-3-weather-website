// express helps us create and run node js webservers which will offer users to interact in a entirely different way with our node js applications
// instead of needing to run command s from the terminals to interact with our node js application, we would be able to visit the url in browser to 
// interact with the node js application, with the node server we can serve up whatever our application needs.
 
// like imagine i am trying to create a portfolio websiye to show off my work then we can create a node server that serves up all of the assest the browser
// will nees to load like HTML documents, CSS files for styling the page, client side javascript and may be some images of my work.
// we can also take the other approach with the server and instead of serving up a website we can serve up an HTTP json based API that would be similar 
// to the weather API where we are exchanging json data back and forth with the server

// we'll start with creating simpler webservers and then we'll be creating http json based APIs with database storage, authentication, email sending and more 
// and the tool we use to create the node servers is "Express" library from npm packages

// in this directory : webserver we used : npm init -y
// then created src and in that we installed npm i express@some version

// importing express:
// const express = require('express') // express is a single function and not a javascript object

// we call the express only a single time right below and all we do to generate the application is below"
// const app = express() // the express function doesnot take in any arguments instead we confugure our server by using various methods provided
// on the application itself and now we can begin to tell our express application what to do.

// example : imagine we owned the following domain : app.com and if someone visits app.com we want tos show them something may be the homepage for
// our company website and we;ll have other pages as well like app.com/help or app.com/about etc and all of this is going to run on a single express
// server where we have setup our multiple routes like the root route(app.com) and other routes like /help and /baout and we could add other routes as wee
// so how do we set up our server to send a response when someone tries to get something at a soecific route? we set that up suing a method on app
// and it is app.get() and this let's us cofigure what the server should do when someone tries to get the resource at the specific url, may be we
// should be sending back HTML or may be we should be sending back JSON. Now the get method takes in two arguments and the first is the route, so the
// partial URL and that would be nothing for app.com and it will be /help for app.com/help and /about for app.com/about adn it also takes in a function
// and the function is where is we wanna describe what we wanna do when someone visits this particular route, so in this case when someone visits the homepage
// app.comthis function would describe what to send back to them. This function gets called with two very important arguments. the first is an object
// containing information about incoming request to the server, this is commonly called REQ(short for request) and the other argument is the response
// and this contains a bunch of methods allowing us to customize waht we gonna send back to the requester, this is commonly called RES (short for response)
//// now down below we can go ahead and look at request and figure out what we wanna do, we could do something like read data from database
// or create some HTML and we could use various methods on response to actually send a response back

// let's display some very basic text response in the browser and to get that done we'll use response.send() which allows us to send something to the
// requester, if someone is making a request using npm request library, this is what they will get and if they are making a request from the browser
// this is what will get displayed
// app.get('', (req, res) => { // root route/homepage
//     res.send('hello express')
// })

// now we need to start the server up, currently the server is not up and running and for that we need to start one more method on app which we'll use a single time
// in our application and that is app.listen()

// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 

//this starts up the server and it has it's listen on specific port, for the moment we're gonna use a common development port which is
// port 3000 which is obviously not the default port, when you visit a website you donot provide ports because there are default ports, for ex: the 
// http based website it is port 80, we'll discuss later to use those port
// optional argument we pass to the listen method is a callback function which just runs when the server is up and running. the process of starting
// up a server is an asynchronous process, though it will happen almost instantly and here we can print a little message to the console just letting
// the person who is running the application know that the server did start correctly. this message is never going to display to someone on the browser
// and that is what the Hello express message for in the res.send()

// in the console we can start the server bu using node src/app.js and we'll notice that after the running the command we will not be brought back to the 
// command prompt to run something else and that is because the node process is still up and running, with the notes app or weather app there were some 
// discrete task that needed to be completed and when that task was done the node process was closed. With the webservers it's never gonna close unless
// we stop it because it's job is to stay up and running listening and processing new incoming requests and so is someone does visit the root of our website
// will get a response right away. we can shut is down with ctrl + c and bring us back to the command prompt.
// now that our server is up and running , let's visit it in the browser, go to new tab in the browser and since we are sunning this server on the
// local machine we are only gonna be able to access it off of our machine and we're not gonna be able to access it from a real domain, we'll see how to 
// do that sort of thing when we explore production deployment. For noe the server is noly accessible on our machine and we can access it at local host
// localhost:3000 since that is that port we chose to listen on, we'll see hello express that we send, so when we visited that url(localhost:3000) on
// the browser it went off to our server and the express server found the matching route which is the one above app.get("") for the root and it processed
// the request using our handler and the handler used response.send() to send back a text response that we see on the browser homepage
// now to set up second route we just set up call to app.get() down the root call to go to the help page adn we set up the function is the similar ways
// the handler function like above to tell the express server what to do

// app.get('/help', (req, res) => {
//     res.send('Help Page')
// })

// we may now need to restart our server and then visit : localhost:3000/help
// note the app.listen should be at the end of all route calls

// if we go to localhost:3000/about which is not yet set we get cannot GET /about .. later we'll see how to set up 404 page not found error for
// routes we donot have support set up for

// let's set up a weather route and render a page title

// app.get('/weather', (req, res) => { //localhost:3000/weather
//     res.send('Weather Page')
// })

// // let's set up about page
// app.get('/about', (req, res) => { //localhost:3000/about
//     res.send('About Page')
// })


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 

// ========================================================================================

// commenting all abov e and restarting from here:

// above we have our express server in place and four routes setupa dn for each we are sending a text response which gets shown in the browser and
// in reality we are never going to send back just a string, we're either going to send HTML designed tobe rendered in the browser or we gonna send
// back JSON designed to be consumed and used by code, Let's explore how to do both of this: using res.send() we just change what we pass inside:
// So imagine that i want to render some HTML then we could remove the contents of the string and put HTML right inside of the string


// const express = require('express')

// const app = express() 

// app.get('', (req, res) => {
//     res.send('<h1>Weather</h1>') // sending back HTML
// })

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'Gautam',
//         age:26
//     }) // sending back json say, now when we visit this page we get a json response back, express is gonna detect we provided with object(json) and it will automatically stringify the json for us and send to the requester correctly
// })

// app.get('/weather', (req, res) => { 
//     res.send('Weather Page')
// })

// app.get('/about', (req, res) => { // we can also send an array of objects:
//     res.send([
//         {
//             name:'Gautam',
//             age:26,
//             location:'Assam'
//         },
//         {
//             name:'Rajat',
//             age:24,
//             location:'Rajasthan'
//         }
//     ])
// })


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 


// =========================================================================================================

// we are sending HTML and JSON data now but typing HTML like above in a string in a javascript file will get out of hand really quickly as we add
// more to the given webpage and hence it would be nice if we write our HTML in seperate HTML files and have the express server those up
// so we want our express server to serve up an entire directory of assests that could contain HTML files, CSS files, client side javascript videos
// images and more

// let's first create the directory named public in the web-server directory containing all the assets
// let's put index.html in it (index.html is a special file which gets served up by default at the root of the website)
// we now need the path to the public folder and we need the absolute path from the root of your machine, we need this to point express to the public folder
// __dirname and __filename --> print and see

// console.log(__dirname) // give absolute path to current working directory
// console.log(__filename) // gives absolute path to current file

// so we can manipulate the __dirname to get the path to public directory using the path core module of node js(so no installation), let's import it

// const path = require('path')
// const express = require('express')

// console.log(path.join(__dirname, '../public')) // ../public takes us out of src and then takes to public

// const app = express() 

// to serve up the static contents of public directory

// const publicDirectorypath = path.join(__dirname, '../public')
// app.use(express.static(publicDirectorypath)) // app.use is a way to customize our server we'll see later

// now as we run the server then in the localhost:3000 we see the index.html content since index.html has a special meaning when related to webservers
// and now even if we remove the root route below, since we have made sure that something (index.html) loads when we donot explicitly provide a path
// and hence we are never going to see what is in the app.get('', ) wala res.send() and so we can remove this root path safely
// express is goinf to work through the application until it finds a match for that route and in the case of our express static call, it is going to
// find a match index.html and that's going to match the root url, because the file has a special name


// let's do the same for help and about routes : using html page for them too

// now we remove both the routes for help and about and in the browser we use localhost:3000/help.html and localhost:3000/about.html to render their
// contents

// app.get('/weather', (req, res) => { 
//     res.send({
//         forecast: "It is snowing",
//         location: 'Philadelphia'
//     })
// })


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 

// ========================================================================================================================

// now let's us learn to serve up CSS(to add some styles to application),clinet side JS(to add some dynamic user interaction), Images and More in the html file
// we need to put the css files in the public folder since that is the only directory set up to be exposed by the web server
// we create a subdirectory called css in public just to be more organised and add style.css which is then used in html files for the changes to take affect
// similarly we create js folder in public directory and in that we create app.js which is then used in index.html for it's effect to be seen
// slly to serve up an image we create an img folder in public directory and use an image in it in the about.html for it's effect to be seen
// so we saw how we can use different assets in our webserver as we build our websites

// const path = require('path')
// const express = require('express')

// const app = express() 

// const publicDirectorypath = path.join(__dirname, '../public')
// app.use(express.static(publicDirectorypath))

// app.get('/weather', (req, res) => { 
//     res.send({
//         forecast: "It is snowing",
//         location: 'Philadelphia'
//     })
// })


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 

// =======================================================================================================================================

// in above code we set up express to correctly serve up the static assets and we chose to put all of our static assets in the public directory
// and everything inside of there was made available via the webserver to the users on the browser
// now static means that the assets are static meaning they do not change, we can refresh the page in the browser as many times we want we would get the
// exact same content of those assets and so far our webpage is static and not dynamic

// HERE WE WILL LEARN TO USE TEMPLATE ENGINE TO RENDER DYNAMIC WEBPAGES USING EXPRESS:
// the template engine we are going to use here is called Handlebars : it will allow us to do two very important things
// It is going to help us render dynamic documents as opposed to static ones and the other thing is create code that we can reuse across pages
// think of index.html as an example, we would want to put a header and foooter in it and this header and footer will be shared across all html pages
// for consistency purposes, without the template engine we need to write a header and footer in the index.html and then we have to copy it to other
// html webpages and so change in any one we'll have to make changes in all by visiting them one by one
// we will need npm handlebars but we need to integrate handlebars to express by using a plugin from npm called hbs, hbs uses handlebars behind the 
// scenes and makes it easy to integrate with express
// install npm i hbs@4.0.1
// lets set it up now : we need to tell express which template engine we installed and we do that by using  a new method on app called app.set()
// when working with express it expects all of our views(handlebar templates) to live in a specific folder in the root of the project(web-servers) 
// called views in which we can put in the handlebars views
// let's create a view index.hbs that replaces the homepage (index.html) --> we need to delete the index.html from the public directory
// now since i donot want to delete for when i come back and see  so i change the name from index.html --> Aindex.html in the public directory
// just copied the index.html content to index.hbs and now to render index.hbs we use app.get() method instead od sending path to it

// Note : The name of the views directory has to be views in the root directory else the code will fail and this is just the default location
// that express exects the views to live in

// we can customize that but to do that we have to tell express where to look and for that we need to create a brand new path similar to the 
// publicDirectorypath, say we changed the name from views -> templates and then we have to make express look at the templates by adding a path




// const path = require('path')
// const express = require('express')

// const app = express() 

// const publicDirectorypath = path.join(__dirname, '../public')
// app.use(express.static(publicDirectorypath))

// const viewsPath = path.join(__dirname, '../templates') // if we changed the name of views to template say and now we need to use app.set() to mkae express know about it

// app.set('view engine','hbs') // set allows to set a value for a given express setting, we have a key(the setting name) and we have a value(the module name)
// // this line sets up the hbs(template engine : handlebars) into express

// app.set('views', viewsPath) // here we tell express that views is in viewsPath, we an customize the views name and also the path as long as we set the views path correctly to point express to it


// // we need to set up a route to serve up the index.hbs as homepage and we use render to send this dynamic file and in render we just provide the name
// // of the particular view we want to use (no need for the file extention .hbs) .. we cna now go and see on the localhost:3000 to see the effect
// // app.get('',(req, res) => {
// //     res.render('index')
// // })

// // we can make it dynamic by providing values to the index.hbs from here(node js), for that we pass a second argument to the render which is an object
// // that contains the values we want that view to access
// app.get('',(req, res) => {
//     res.render('index', {
//         title: "Weather App",
//         name: "Gautam Prasad"
//     }) // we now have to modify  the index.hbs file to be able to access this by passing {{title}} in h1 tags and passing {{name}} in some other tag needed say p tag
// })


// // Now let's do this for the about page --> before that we need to delete the about.html in public, but here i change its name to Aabout.html
// // create about.hbs page in the views and copy the content of the about.html first and then create a route for it here

// // NOTE: we still need the public directory since we have our css and img and js directories in it

// app.get('/about', (req, res) => { // visit localhost:3000/about
//     res.render('about', {
//         title: 'About Me',
//         name:"Gautam"
//     })
// })


// // let's do the same for the help page:
// app.get('/help', (req, res) => {
//     res.render('help', {
//         title:'Help',
//         message: "This is a help page"
//     })
// })


// app.get('/weather', (req, res) => { 
//     res.send({
//         forecast: "It is snowing",
//         location: 'Philadelphia'
//     })
// })


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 



// AFTER ALL THOSE DISCUSSIONS ABOVE LET'S MAKE THE CODE CLEANER AND IN ONE PLACE: you can go to express.com API reference page for documentations of all that we learned


// const path = require('path')
// const express = require('express')

// const app = express() 

// // dEFINE PATHS FOR EXPRESS CONFIG
// const publicDirectorypath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates') 

// // SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
// app.set('view engine','hbs')
// app.set('views', viewsPath) 

// // Setup static directory to serve
// app.use(express.static(publicDirectorypath))


// app.get('',(req, res) => {
//     res.render('index', {
//         title: "Weather App",
//         name: "Gautam Prasad"
//     }) 
// })


// app.get('/about', (req, res) => { 
//     res.render('about', {
//         title: 'About Me',
//         name:"Gautam"
//     })
// })


// app.get('/help', (req, res) => {
//     res.render('help', {
//         title:'Help',
//         message: "This is a help page"
//     })
// })


// app.get('/weather', (req, res) => { 
//     res.send({
//         forecast: "It is snowing",
//         location: 'Philadelphia'
//     })
// })


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 


// Now lets learn about partials with handlebars:
// partials as the name suggests allows you to create a little template which is a part of bigger webpage
// some parts of the webpage like header and footer that we are gonna be using across multiple pages in your site
// for this we need to reqire the hbs module that we installed, the .hbs extention we used above were supported by vs code
// and after that we will be telling the hbs module where we will be putting our partials which are also files with an .hbs extentions similar to the 
// ones in the templates/views directory
// here is what we will do : create two more directories in templates : views : containing the views files like index, help, about and the the partials
// directories which will contain all the partials
// but note that since the views path is now changed hence we neeed to chane the viewsPath to include this change : ./templates/views
// and now we can tell the hbs that we'll put our partials in the partials directory : using this hbs.registerPartials(partialsPath)
// we can now start to files in the partials directory like file for header , file for footer and then we can use this files in other hbs files in views
// to use this partials in say help.hbs we use {{>header(name of partials file)}}
// Note: nodemon if we are using doesnot pickup the the changes in the .hbs extensions and hence to make it pick up changes of the extensions too
// we need to use nodemon src/app.js -e (-e flag for extensions)

// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')

// const app = express() 

// // dEFINE PATHS FOR EXPRESS CONFIG
// const publicDirectorypath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views') 

// // define path for hbs config
// const partialsPath = path.join(__dirname,"../templates/partials")


// // SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
// app.set('view engine','hbs')
// app.set('views', viewsPath) 

// //set the hbs foe the partials location:
// hbs.registerPartials(partialsPath)

// // Setup static directory to serve
// app.use(express.static(publicDirectorypath))


// app.get('',(req, res) => {
//     res.render('index', {
//         title: "Weather App",
//         name: "Gautam Prasad"
//     }) 
// })


// app.get('/about', (req, res) => { 
//     res.render('about', {
//         title: 'About Me',
//         name:"Gautam"
//     })
// })


// app.get('/help', (req, res) => {
//     res.render('help', {
//         title:'Help',
//         message: "This is a help page"
//     })
// })


// app.get('/weather', (req, res) => { 
//     res.send({
//         forecast: "It is snowing",
//         location: 'Philadelphia'
//     })
// })


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 

// // NOW LET'S MAKE THE PARTIALS MORE DYNAMIC SO THAT THEY CAN BE USED IN ALL THE VIEWS FILES:
// // let's make headers and footers partials

// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')

// const app = express() 

// // dEFINE PATHS FOR EXPRESS CONFIG
// const publicDirectorypath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views') 

// // define path for hbs config
// const partialsPath = path.join(__dirname,"../templates/partials")


// // SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
// app.set('view engine','hbs')
// app.set('views', viewsPath) 

// //set the hbs foe the partials location:
// hbs.registerPartials(partialsPath)

// // Setup static directory to serve
// app.use(express.static(publicDirectorypath))


// app.get('',(req, res) => {
//     res.render('index', {
//         title: "Weather App",
//         name: "Gautam Prasad"
//     }) 
// })


// app.get('/about', (req, res) => { 
//     res.render('about', {
//         title: 'About Me',
//         name:"Gautam"
//     })
// })


// app.get('/help', (req, res) => {
//     res.render('help', {
//         title:'Help',
//         name:'Gautam',
//         message: "This is some Helpful Text"
//     })
// })


// app.get('/weather', (req, res) => { 
//     res.send({
//         forecast: "It is snowing",
//         location: 'Philadelphia'
//     })
// })


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 



//========================================================================================================================

// Now let's set up a 404 page on the express server: for pages that donot exist or do not have support for in the webserver
// we'll set up a route handler for this error page using app.get() at last

// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')

// const app = express() 

// // dEFINE PATHS FOR EXPRESS CONFIG
// const publicDirectorypath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views') 

// // define path for hbs config
// const partialsPath = path.join(__dirname,"../templates/partials")


// // SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
// app.set('view engine','hbs')
// app.set('views', viewsPath) 

// //set the hbs foe the partials location:
// hbs.registerPartials(partialsPath)

// // Setup static directory to serve
// app.use(express.static(publicDirectorypath))


// app.get('',(req, res) => {
//     res.render('index', {
//         title: "Weather App",
//         name: "Gautam Prasad"
//     }) 
// })


// app.get('/about', (req, res) => { 
//     res.render('about', {
//         title: 'About Me',
//         name:"Gautam"
//     })
// })


// app.get('/help', (req, res) => {
//     res.render('help', {
//         title:'Help',
//         name:'Gautam',
//         message: "This is some Helpful Text"
//     })
// })


// app.get('/weather', (req, res) => { 
//     res.send({
//         forecast: "It is snowing",
//         location: 'Philadelphia'
//     })
// })

// // this will be a catch for help 404s
// app.get('/help/*', (req, res) => {
//     res.render('404', {
//         title:'404',
//         name:'Gautam',
//         errorMessage:"Help article not found"
//     })
// })

// // this will be a catch for any generic 404s
// app.get('*', (req, res) => { // here we need first argument that is matched by everything that is not served by the webserver and got that express provides us with wild card character *
//     res.render('404', {
//         title:'404',
//         name:'Gautam',
//         errorMessage:"Page Not Found"
//     })
// }) 
// // this app.get() for the 404 page should come at last for the fact that how express end sup matching the incoming requests with the correct route handler
// // when express gets an incoming requests, it starts to look for a match, so first it will look for a match in the public folder, and then if not found
// // it continues looking for a match and looks up in the handler functions in order they are written in the code : root, about, help, weather etc and if no
// // match is found then there should be the * app.get() for the page not found error

// // we have set up the app.get() with * for generic matching and every time this is matched then this HTML page is rendered but waht is someone is on help
// // page and then uses /help/test and there is no such page then again there will be this matching and the same html page will show up but we want 
// // for this case some specific message/html page to show up and for that we may need to use another app.get('/help/*) and here we can say something more specific 


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 



// ==================================================================================================================================
// STYLING THE APPLICATION : we'll focus on css folder and one of our views say index.hbs, the goal is to write some style that will make the 
// index.hbs page look better and the same styles could be used throughout the handlebars views

// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')

// const app = express() 

// // dEFINE PATHS FOR EXPRESS CONFIG
// const publicDirectorypath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views') 

// // define path for hbs config
// const partialsPath = path.join(__dirname,"../templates/partials")


// // SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
// app.set('view engine','hbs')
// app.set('views', viewsPath) 

// //set the hbs foe the partials location:
// hbs.registerPartials(partialsPath)

// // Setup static directory to serve
// app.use(express.static(publicDirectorypath))


// app.get('',(req, res) => {
//     res.render('index', {
//         title: "Weather App",
//         name: "Gautam Prasad"
//     }) 
// })


// app.get('/about', (req, res) => { 
//     res.render('about', {
//         title: 'About Me',
//         name:"Gautam"
//     })
// })


// app.get('/help', (req, res) => {
//     res.render('help', {
//         title:'Help',
//         name:'Gautam',
//         message: "This is some Helpful Text"
//     })
// })


// app.get('/weather', (req, res) => { 
//     res.send({
//         forecast: "It is snowing",
//         location: 'Philadelphia'
//     })
// })


// app.get('/help/*', (req, res) => {
//     res.render('404', {
//         title:'404',
//         name:'Gautam',
//         errorMessage:"Help article not found"
//     })
// })


// app.get('*', (req, res) => { 
//     res.render('404', {
//         title:'404',
//         name:'Gautam',
//         errorMessage:"Page Not Found"
//     })
// }) 


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 



// =====================================================================================================================================



// CREATING API END POINTS AND ACCESSING API FROM BROWSER:
//  so right now we have this two distinct applications, on the backend we know how to take an address and convert that into a forecast and on the front end 
// we know how to get our web application up and running in the browser, the real question is how do we integrate these two together, we need is for the browser
// to be able to communicate with the server passing an address along and then the server needs to convert that address intoa forecast and pass it back to
// the browser, so that browser can render forecast data to the screen. we need to create our own http JSON endpoints with express

// Big picture goal here is : allow users to be able to fetch forecast for their location from their weather website, the will be able to pull up a url
// in the browser, where there will be a form, they type their address as input and click a button and after somtime the weather information shows up

// for this we need to fill the route '/weather' that we created, here we want this route to use the geocode and forecast functions we created earlier
// to get the json data and then that json data in sent back to the browser and the browser will be able to render the forecast

// the browser needs to send the adress input to this '/weather' route : we'll use a query string as part of the URL, the server will then read the query string value
// to get the address information
// see the products and the weather route below to understand


// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')
// const { endianness } = require('os')

// const app = express() 

// // dEFINE PATHS FOR EXPRESS CONFIG
// const publicDirectorypath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views') 

// // define path for hbs config
// const partialsPath = path.join(__dirname,"../templates/partials")


// // SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
// app.set('view engine','hbs')
// app.set('views', viewsPath) 

// //set the hbs foe the partials location:
// hbs.registerPartials(partialsPath)

// // Setup static directory to serve
// app.use(express.static(publicDirectorypath))


// app.get('',(req, res) => {
//     res.render('index', {
//         title: "Weather App",
//         name: "Gautam Prasad"
//     }) 
// })


// app.get('/about', (req, res) => { 
//     res.render('about', {
//         title: 'About Me',
//         name:"Gautam"
//     })
// })


// app.get('/help', (req, res) => {
//     res.render('help', {
//         title:'Help',
//         name:'Gautam',
//         message: "This is some Helpful Text"
//     })
// })



// // to send back the json we receive from the forecast
// // now if we go to localhost:3000/products we se the empty object and now if we use localhost:3000/products?search=games&rating=5 then this queries come to the 
// // req attribute which has req.query attribute, which is also an objectt and contains all query strings as information, the search string can be fetched using 
// // res.query.search and so on
// // app.get('/products', (req, res) => {
// //     console.log(req.query) // { search: 'games', rating: '5' } we see this in the console provided we ran localhost:3000/products?search=games&rating=5 on browser
// //     res.send({
// //         products:[]
// //     })
// // })

// // making the product route better:

// app.get('/products', (req, res) => {
//     if (!req.query.search){ // if search term (query string) is not given
//         return res.send({
//             error: "you must provide a search term"
//         })
//     }
//     // if the search term is not provided then if runs and this below code doesnot run due to the return statement
//     console.log(req.query)
//     res.send({
//         products:[]
//     })
// })


// // lets do smoething similar with the weather router:
// // localhost:3000/weather gives the error, and localhost/weather?address=Assam send the static json below

// app.get('/weather', (req, res) => { 

//     if (!req.query.address){ // if the address is not provided
//         return res.send({
//             error: 'Please provide a valid address'
//         })
//     }

//     res.send({
//         forecast: "It is snowing",
//         address : req.query.address
//     })
// })




// app.get('/help/*', (req, res) => {
//     res.render('404', {
//         title:'404',
//         name:'Gautam',
//         errorMessage:"Help article not found"
//     })
// })


// app.get('*', (req, res) => { 
//     res.render('404', {
//         title:'404',
//         name:'Gautam',
//         errorMessage:"Page Not Found"
//     })
// }) 


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 



// =====================================================================================================================

// BUILDING A JSON HTTP ENDPOINT:

// HERE WE WILL USE THE CODE WE WROTE FOR geocode and forecast to get the weather for the query string address in the weather route:
// copy the utils folder from the weather-app folder and paste it in the src folder of the web servers folder:
// note both geocode and forecast code made use of request library from npm and so we nned to install it here in this web-servers directory : npm i request@2.88.0
// we can see in the weather-app folder in app.js how we called this geocode and forecast function:

//nodemon src/app.js -e js,hbs : for extensions changes to be detected by the nodemon

// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')
// const geocode = require('./utils/geocode') 
// const forecast = require('./utils/forecast')

// const app = express() 

// // dEFINE PATHS FOR EXPRESS CONFIG
// const publicDirectorypath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views') 

// // define path for hbs config
// const partialsPath = path.join(__dirname,"../templates/partials")


// // SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
// app.set('view engine','hbs')
// app.set('views', viewsPath) 

// //set the hbs foe the partials location:
// hbs.registerPartials(partialsPath)

// // Setup static directory to serve
// app.use(express.static(publicDirectorypath))


// app.get('',(req, res) => {
//     res.render('index', {
//         title: "Weather App",
//         name: "Gautam Prasad"
//     }) 
// })


// app.get('/about', (req, res) => { 
//     res.render('about', {
//         title: 'About Me',
//         name:"Gautam"
//     })
// })


// app.get('/help', (req, res) => {
//     res.render('help', {
//         title:'Help',
//         name:'Gautam',
//         message: "This is some Helpful Text"
//     })
// })



// app.get('/products', (req, res) => {
//     if (!req.query.search){ 
//         return res.send({
//             error: "you must provide a search term"
//         })
//     }
//     console.log(req.query)
//     res.send({
//         products:[]
//     })
// })



// app.get('/weather', (req, res) => { 

//     if (!req.query.address){ 
//         return res.send({
//             error: 'Please provide a valid address'
//         })
//     }
//     geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {  // this empty object is a default value so that if the geocode doesnot return anything the destructuring works still
//         if(error){
//             return res.send({
//                 error // since the variable name is also same so we use short hand syntax
//             }) 
//         }
//         forecast(latitude,longitude, (error, forecastdata) => {
//             if (error) {
//                 return res.send({
//                     error
//                 })
//             }
//             res.send({
//                 location,
//                 forecast : forecastdata,
//                 address: req.query.address
//             })
//     })
//     })
// })




// app.get('/help/*', (req, res) => {
//     res.render('404', {
//         title:'404',
//         name:'Gautam',
//         errorMessage:"Help article not found"
//     })
// })


// app.get('*', (req, res) => { 
//     res.render('404', {
//         title:'404',
//         name:'Gautam',
//         errorMessage:"Page Not Found"
//     })
// }) 


// app.listen(3000, () => {
//     console.log('Server is up on port 3000')
// }) 



//========================================================================================================================================



// LETS LEARN ABOUT THE DEFAULT FUNCTION PARAMETERS IN THE PLAYGROUND DIRECTORY:

// now here we 'll look at the front end again, the goal is to figure out how to make an HTTP request for that forecast data from client side javascript
// in the browser, we'll be creating a form, submit it fetch the data and then on the fly re render the page to show the weather information
// we want the information to be seen in the root page(index.hbs)
// in the index.hbs we linked the javascript file that is in the js folder calles app.js, and only this view has this js file and that is intentional
// since the code that goes in app.js file in JS folder is gonna be realted to fetching the forecast and since index.hbs is the only view that needs to fetch
// the forecast, it is the only view that needs it 
// read the client side javascript file in the js folder where we use the fetch API to fetch the weather data
// after that we add a form to the index.hbs home page where we take inputs of address, click search and see the forecast of that location
// we now see the search bar and input place in the home page but it is not wired up with the client side javascript code, we address it in the
// client side javascript
// we see that the in the client side javascript the messsages are now printing to the devepoper tools console but now we want  to show them in 
// the home page of our browser instead just below the form: we make changes in index.hbs body bu using two p tags and also make some changes to the 
// client side javascript

const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode') 
const forecast = require('./utils/forecast')

const app = express() 

// dEFINE PATHS FOR EXPRESS CONFIG
const publicDirectorypath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') 

// define path for hbs config
const partialsPath = path.join(__dirname,"../templates/partials")


// SETUP HANDLEBARS ENGINE AND VIEWS LOCATION
app.set('view engine','hbs')
app.set('views', viewsPath) 

//set the hbs foe the partials location:
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectorypath))


app.get('',(req, res) => {
    res.render('index', {
        title: "Weather App",
        name: "Gautam Prasad"
    }) 
})


app.get('/about', (req, res) => { 
    res.render('about', {
        title: 'About Me',
        name:"Gautam"
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title:'Help',
        name:'Gautam',
        message: "This is some Helpful Text"
    })
})



app.get('/products', (req, res) => {
    if (!req.query.search){ 
        return res.send({
            error: "you must provide a search term"
        })
    }
    console.log(req.query)
    res.send({
        products:[]
    })
})



app.get('/weather', (req, res) => { 

    if (!req.query.address){ 
        return res.send({
            error: 'Please provide a valid address'
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {  // this empty object is a default value so that if the geocode doesnot return anything the destructuring works still
        if(error){
            return res.send({
                error // since the variable name is also same so we use short hand syntax
            }) 
        }
        forecast(latitude,longitude, (error, forecastdata) => {
            if (error) {
                return res.send({
                    error
                })
            }
            res.send({
                location,
                forecast : forecastdata,
                address: req.query.address
            })
    })
    })
})




app.get('/help/*', (req, res) => {
    res.render('404', {
        title:'404',
        name:'Gautam',
        errorMessage:"Help article not found"
    })
})


app.get('*', (req, res) => { 
    res.render('404', {
        title:'404',
        name:'Gautam',
        errorMessage:"Page Not Found"
    })
}) 


app.listen(3000, () => {
    console.log('Server is up on port 3000')
}) 

