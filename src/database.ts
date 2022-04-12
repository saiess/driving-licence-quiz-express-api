const mongoose = require('mongoose');
import 'dotenv/config';

mongoose.connect(process.env.MONGO_URI, () => {
  console.log('connected to mongoDB');
});

export default mongoose;