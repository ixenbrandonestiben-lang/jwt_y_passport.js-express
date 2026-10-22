import passport  from "passport";
import  { CredencialesDTO } from "../dtos/cazador.dto.js";

export function autenticaLocal (req, res, next){

    const dto = new CredencialesDTO(req.body);

    req.body.username = dto.username;
    req.boq.password = dto.password;

    passport.authenticate("local", { session: false }, (err, cazador, info) =>{
        if(err) return next(err);

        if(!cazador) return res,status(401).json({ error: info?.message || "Credenciales inválidas "});

        req.user = cazador;

        next();
    })(req, res, next);
}