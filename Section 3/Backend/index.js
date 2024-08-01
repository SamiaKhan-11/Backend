//importing express
const express = require('express');
const UserRouter = require('./routers/UserRouter');
const Productrouter = require('./routers/Productrouter');
const cors = require('cors')

//Initializing express
const app = express();

const port = 5000;

//middleware
app.use( cors ({ 
    origin : 'http://localhost:3000'
}))

app.use(express.json());

app.use('/user', UserRouter);

app.use('/product', Productrouter);


//endpoint or route
// local host /
app.get('/', (req,res) => { 
    res.send('respond from express')
});

app.get('/add', (req,res) => {
    res.send('response from add')
});

app.get( '/getall', (req,res) => {
    res.send('this is getall')
});

app.get( '/update', (req,res) => {
    res.send('response from update')
});

//starting the server
app.listen(port, () => { 
    console.log('server started');
} );