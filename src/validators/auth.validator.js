import { body, validationResult } from "express-validator";
import passport from "passport";

const responderErrores = (req, res, next) =>{

    const errores = validationResult(req);

    if(!errores.isEmpty()){
        return res.status(400).json({
            errores: errores.array()
        });
    }
    next();
};