import React from "react";
import {
    PythonOriginal,
    JavascriptOriginal,
    Html5Original,
    DartOriginal,
    ReactOriginal,
    NodejsOriginal,
    DjangoPlain,
    NextjsOriginal,
    FlutterOriginal,
    MongodbOriginal,
    WordpressPlain,
    MysqlOriginalWordmark,
    GitOriginal,
} from "devicons-react";

const skills = {
    Python: PythonOriginal,
    JavaScript: JavascriptOriginal,
    HTML: Html5Original,
    Dart: DartOriginal,
    Django: DjangoPlain,
    React: ReactOriginal,
    "Next.js": NextjsOriginal,
    Flutter: FlutterOriginal,
    WordPress: WordpressPlain,
    MongoDB: MongodbOriginal,
    MySQL: MysqlOriginalWordmark,
    Git: GitOriginal,
};

export default function SkillsSection() {
    return (
        <div className="bg-secondary">
            <div className="w-5/6 md:w-3/4 mx-auto text-white py-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                    My Skills
                </h2>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
                    {Object.entries(skills).map(([skillName, Icon]) => (
                        <div
                            className="bg-grayNav rounded-2xl shadow text-center text-lg p-5 flex flex-col justify-center items-center hover:ring hover:ring-primary-light duration-500"
                            key={skillName}
                        >
                            <Icon size="75" color="#0CCE6B" />
                            <p className="mt-3">{skillName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
