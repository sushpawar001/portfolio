import { connectDB } from "@/dbConfig/connectDB";
import { FormDataModel } from "@/models/formData";
import { NextResponse, NextRequest } from "next/server";

connectDB();

export async function GET(req: NextRequest) {
    try {
        const formData = await FormDataModel.find({});
        return NextResponse.json(formData);
    } catch (error) {
        return NextResponse.json(
            { error: "Error fetching form data" },
            { status: 500 }
        );
    }
}
