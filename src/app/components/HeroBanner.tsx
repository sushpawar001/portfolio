import { PythonPlain, FlutterPlain, JavascriptPlain, WordpressPlain,  } from "devicons-react";
import React from "react";

const Logos = [PythonPlain, JavascriptPlain, FlutterPlain, WordpressPlain]
export default function HeroBanner() {
    return (
        <div className="bg-primary-dark">
            <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center w-5/6 md:w-3/4 mx-auto text-white py-3 ">
                <div className="flex gap-3 col-span-1 justify-center mb-3 md:mb-0">
                    <h2 className="text-2xl md:text-5xl font-bold my-auto">7+</h2>
                    <h2 className="text-2xl md:text-3xl my-auto md:pr-20">Projects Completed</h2>
                </div>
                <div className="flex gap-10 justify-end md:col-span-2">
                    {Logos.map((Logo) => (
                        <Logo size="50" color="white" key={Logo.displayName} />
                    ))}
                </div>
            </div>
        </div>
    );
}
