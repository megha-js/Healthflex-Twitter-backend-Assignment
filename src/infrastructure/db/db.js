import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

mongoose.connect(process.env.MONGO_URI);

export default mongoose;
