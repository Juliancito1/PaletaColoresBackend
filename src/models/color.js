import { Schema, model } from "mongoose";

const colorScheme = new Schema({
    color: {
        type: String,
        required: true,
        unique: true
    }
})

const Color = model('color',colorScheme);

export default Color;