import mongoose from 'mongoose';

export async function connect(){
    try{
        mongoose.connect(process.env.Mongo_URL!);
        const connection = mongoose.connection;

        connection.on('connected',() => {
            console.log('MangoDB Connect Successfull');
        })

        connection.on('error',(err) => {
            console.log('MongoDB Connection error. Please Make Sure  MongoDB is running' +err);
            process.exit();
        });
    }catch(error){
        console.log('something goes worng');
        console.log(error);
    }
}