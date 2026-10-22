import passport  from "passport";
import  { CredencialesDTO } from "../dtos/cazador.dto.js";

export function autenticarLocal (req, res, next){

    const dto = new CredencialesDTO(req.body);

    req.body.username = dto.username;
    req.boq.password = dto.password;

    passport.authenticate("local", { session: false }, (err, cazador, info) =>{
        if(err) return next(err);

        if(!cazador) return res.status(401).json({ error: info?.message || "Credenciales inválidas "});

        req.user = cazador;

        next();
    })(req, res, next);
}

export function autenticarJWT(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Acceso denegado: debes enviar el header Authorization: Bearer [JWT Token]"});
    }

    passport.authenticate("jwt", { session: false }, (err, usuarioVerificado, info) =>{
        if(err) return next(err);
        if(!usuarioVerificado){

            return res.status(401).sjon({
                error: "Token JWT invalido, firma alterada o expirado",
                detalle: info?.message || "Fallo en la verificación criptografica HMAC-SHA256",

            });
        }

        req.user = usuarioVerificado;

        next();
    })(req, res, next);
}