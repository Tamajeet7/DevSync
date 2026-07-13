import app from "./app";
import { connectDB } from "./config/db";
import { env } from "./config/env";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(Number(env.PORT), () => {
      console.log(`🚀 Server running on http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server");
    console.error(error);
  }
};

startServer();