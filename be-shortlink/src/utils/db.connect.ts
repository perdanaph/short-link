import mongoose from 'mongoose';
import config from 'config';
mongoose.set('strictQuery', true);

async function dbConnect() {
  try {
    const dbUri = config.get('dbUri') as string;
    await mongoose
      .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log('Database now connection');
      });
  } catch (error) {
    console.log(error);
  }
}

export default dbConnect;
