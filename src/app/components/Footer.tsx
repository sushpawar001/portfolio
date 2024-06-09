import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-secondary text-white font-light">
            <div className="w-5/6 md:w-3/4 mx-auto p-5 flex justify-center gap-5">
                <div className="flex gap-4">
                    <Link
                        href={
                            "https://www.linkedin.com/in/sushant-pawar-b85a79260/"
                        }
                        className="my-auto"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedinIn}
                            className="w-5 hover:text-primary duration-500"
                        />
                    </Link>
                    <Link
                        href={"https://github.com/sushpawar001"}
                        className="my-auto"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="w-5 hover:text-primary duration-500"
                        />
                    </Link>
                </div>
                <div className="border-l-2 pl-5 border-grayNav my-auto">
                    <p>© 2024 Sushant Pawar. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
