import mongoose, { Connection } from "mongoose";

export const connectDB = async (): Promise<void>  => {
   
    try{
    const  atlasConnectionUri = "mongodb+srv://ecommerce:harsh123@cluster0.q7rivzf.mongodb.net/?retryWrites=true&w=majority"
    const connection: Connection = await mongoose.connect(atlasConnectionUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
      });  

      console.log(`DB Connected to ${connection.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};