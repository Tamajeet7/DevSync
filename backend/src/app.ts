import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import router from "./routes";
import authRoutes from "./modules/auth/auth.routes";
import dashboardRoutes from "./modules/dashboard/dashboard.routes";
import roomRoutes from "./modules/room/room.routes";
import executionRoutes from "./modules/execution/execution.routes";

import { env } from "./config/env";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

// Security
app.use(helmet());

// CORS
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

// Logger
app.use(morgan("dev"));

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies
app.use(cookieParser());

app.use("/api/v1", router);

app.use("/api/v1/dashboard", dashboardRoutes);

app.use("/api/v1/rooms", roomRoutes);

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/execution", executionRoutes);

// Error Handler (Always Last)
app.use(errorHandler);

export default app;