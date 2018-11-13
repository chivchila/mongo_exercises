const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if (err){
        return console.log('Error connecting to the server');
    }
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({_id: 
    //         new ObjectID('5bbf4afca79913f5016c0e44')}, 
    //     {
    //         $set: {
    //             completed:false
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }
    // ).then((result) => {
    //     console.log('All good');
        
    // }) ;
    db.collection('Users').findOneAndUpdate(
        {
            name: 'Lena'
        }, 
        {
            $set: {
                name:'Ivona'
            },
            $inc: {
                age: 1
            }
        },
        {
            returnOriginal: false
        }
        ).then((result) => {
            console.log('All good');
            
        }) ;
        //client.close();
});