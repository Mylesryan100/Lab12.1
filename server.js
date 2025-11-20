//import the express
const express = require('express');

const path = require('path');

const app = express();

const PORT = 3000;


//MIDDLEWARE 
app.use(express.static(path.join(__dirname, 'public', 'contact')));   
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES

// GET / send back a hello message

app.get('/:location', (request, response) => {
    response.sendFile(path.join(__dirname, 'public, contact.html'))
})

    // console.log('\n URL: ' + request.url);
    // console.log('\n Method: ' + request.method);

    // console.log('\n Headers: ' + request.headers);
    // console.log(request.headers)

    // console.log("\n Params: ");
    // console.log(request.params);

    // console.log('\n Query: ');
    // console.log(request.query);


    // console.log('\n Params: ' + request.params);
   
    // response.send('<h1>Hello from Express!</h1>');

// })

app.get("/contact", (req, rest) =>{
    rest.sendFile([path.join(__dirname, 'public','contact.html')])

    
    // rest.sendFile("./public/contact")
    
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
    
})