const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)//{

        
            // useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true
            // //UseNewURLParser is needed 
            // This is only needed to avoid errors in the OLDER VERSIONS
        // Aynchronous functions return a promise, so you'll need to put await in every method
        // We'll connect to the driver link of the database we have from mongoDB atlas through the config file 
        //}
        console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline.bold)
    }
    catch(err){
        console.log(`Error ${err.message}`.red)
        process.exit(1)
        // 1 shut downs the application
    }
}

//When it comes to databases, you'll need to use async and await 

module.exports = connectDB

// This is going to be used in the server.js file which will use the URI, while mongoose needs to be directly connected here
