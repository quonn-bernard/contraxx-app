import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongo = null;
 
const connectMemoryDB = async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();
 
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const dropMemoryDB = async () => {
  if (mongo) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongo.stop();
  }
};

export {
  connectMemoryDB,
  dropMemoryDB,
}