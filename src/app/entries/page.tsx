"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { IFormData } from "@/models/formData";

export default function Entries() {
    const [formData, setFormData] = useState<IFormData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("/api/form/get-data");
                setFormData(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    if (!formData) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-5xl">
                Loading...
            </div>
        );
    }

    if (formData.length === 0) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-5xl">
                No data found.
            </div>
        );
    }

    return (
        <div className="w-full">
            <table className="w-full text-left rounded-lg table-fixed">
                <thead className="bg-gray-200 text-gray-700 text-sm font-normal">
                    <tr>
                        <th className="px-4 py-2 w-1/4">Id</th>
                        <th className="px-4 py-2 w-1/4">Name</th>
                        <th className="px-4 py-2 w-1/4">Email</th>
                        <th className="px-4 py-2 w-1/4">Message</th>
                        <th className="px-4 py-2 w-1/4">Submit Date</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((entry, index) => (
                        <tr key={entry._id} className="hover:bg-gray-200">
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2">{entry.name ?? ""}</td>
                            <td className="px-4 py-2">{entry.email ?? ""}</td>
                            <td className="px-4 py-2">{entry.message ?? ""}</td>
                            <td className="px-4 py-2">
                                {new Date(entry.createdAt)
                                    .toLocaleString("en-US", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                    })
                                    .replaceAll(",", "")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
