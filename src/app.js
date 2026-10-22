import express from "express";
import cors from "cors";
import { configurarPassport } from "./config/passport.js";
import { authRouter } from "./routes/auth.routes.js";
import { manejarError, rutaNoEncontrada } from "./middlewares/error.middleware.js";
