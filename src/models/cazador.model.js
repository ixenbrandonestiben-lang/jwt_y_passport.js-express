import { Schema, model } from "mongoose";
import { version } from "react";

const cazadorSchema = new Schema({

    sub: { type: String, required: true, unique: ture },
    username: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    rango: { type: String, enum: [ "S", "A", "B", "C"], default: "B" },
    admin: { type: Boolean, versionKey: false },
}, { timestamps: true, versionKey: false});