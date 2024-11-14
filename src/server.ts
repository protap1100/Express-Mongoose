import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.databaseUrl as string);
    app.listen(config.port, () => {
      console.log(`My App Is Running ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
