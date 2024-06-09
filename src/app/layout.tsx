import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Sushant Pawar",
    description:
        "Web & Mobile Developer. Transforming Your Ideas into Reality with Modern Technologies",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Toaster position="bottom-right" />
                {children}
            </body>
        </html>
    );
}
