
    
    // FOR MONGODB CLOUD CONNECTION 
    // =========================================================================================


    const mongoose = require('mongoose');


    const URI = 'mongodb+srv://cluster0.bydfo.mongodb.net/';

    
    const connectDB = async ()=>{

    try {
        await mongoose.connect(URI,
                {
                    
                    dbName:'StdMgr',
                    user: 'dbUser',
                    pass:'dbUser',
                    useNewUrlParser:true,
                    useUnifiedTopology:true
        });
       
        console.log('Mongodb connected....');
        
        }
     catch(err) {
            console.log("no connection")
            }
        
}





 module.exports = connectDB;





// FOR LOCAL DATABASE SERVER CONNECTION 
// ===============================================================================================


// const mongoose = require('mongoose');

// const URI = 'mongodb://localhost:27017';


// const connectDB = async ()=>{

// try {
//     await mongoose.connect(URI,
//     {
//         
//         dbName:'StdMgr',
//         user: 'dbUser',
//         pass:'dbUser',
//         useNewUrlParser:true,
//         useUnifiedTopology:true
    
//     });
    
//         console.log('Mongodb connected....');
//     }

// catch(err) {
//     console.log("no connection")
// }
// }



// module.exports = connectDB;