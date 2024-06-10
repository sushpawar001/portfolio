import { connectDB } from "@/dbConfig/connectDB";
import { FormDataModel } from "@/models/formData";
import { NextResponse, NextRequest } from "next/server";

connectDB();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const newFormData = new FormDataModel(body);
        await newFormData.save();
        return NextResponse.json(
            { message: "Form data submitted successfully" },
            { status: 201 }
        );
    } catch (error) {
        console.log("Submit Form Error:", error);
        return NextResponse.json(
            { error: "Error submitting form data" },
            { status: 500 }
        );
    }
}
