import mongoose from "mongoose";

export interface IFormData {
    _id: string;
    createdAt: Date;
    name: string;
    email: string;
    message: string;
}

const formDataSchema = new mongoose.Schema<IFormData>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String, required: true },
    },
    { timestamps: true }
);

const FormDataModel =
    mongoose.models.formdata || mongoose.model("formdata", formDataSchema);

export default FormDataModel;
