const mongoose = require('mongoose');

const url = "mongodb+srv://samia26khan:sam44@cluster0.jmcac6n.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0"

//asynchronous func - Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
    
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;