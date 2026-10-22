import { Router  } from "express";
import { autenticarUsuario, listarUsuarios, regiratrarRecompensaBoveda } from "../controllers/auth.controller.js";
import { autenticarLocal, autenticarJWT, atorizarAdmin } from "../validators/validators.js";


export const authRouter = Router();


authRouter.post("/users/authenticate", validarLogin, autenticarLocal, autenticarUsuario);

authRouter.get("/user/list", autenticarJWT, listarUsuarios);

authRouter.post("/boveda/recompensa", autenticarJWT, autorizarAdmin, validarRecompensa, registrarRecompensaBoveda);
