"use client";

import { useState } from "react";
import ProfilePicture from "./ProfilePicture";
import chevronRight from "../../assets/icons/chevron-right.svg";
import chevronDown from "../../assets/icons/chevron-down.svg";

export default function DetailsFormsCV() {
    const sectionClassName = "overflow-hidden border-b px-5 bg-slate-700";
    const [sectionArray, setSectionArray] = useState([
        {
            id: 1,
            title: "Ajouter une photo de profile",
            className: sectionClassName,
            img: chevronRight,
            content: <ProfilePicture />,
            displayContent: false,
        },
        {
            id: 2,
            title: "Autres...",
            className: sectionClassName,
            img: chevronRight,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            displayContent: false,
        },
        {
            id: 3,
            title: "Autres...",
            className: sectionClassName,
            img: chevronRight,
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            displayContent: false,
        },
    ]);

    const handleClick = (id) => {
        setSectionArray((prev) => {
            return prev.map((section) => {
                if (section.id === id) {
                    return {
                        ...section,
                        displayContent: !section.displayContent,
                        img:
                            section.img === chevronRight
                                ? chevronDown
                                : chevronRight,
                        className:
                            section.className === sectionClassName
                                ? "h-auto border-b px-5"
                                : sectionClassName,
                    };
                }
                return section;
            });
        });
    };

    return (
        <section className="w-1/3 min-h-screen overflow-auto bg-slate-900 text-white border-r border-gray-500 shadow-lg">
            <header className="flex justify-between items-center mb-5 p-4">
                <h1 className="text-2xl font-bold">CVBuilder</h1>
                <button>Prévisualisation</button>
            </header>
            <main id="main-section" className="border-t shadow-lg">
                {sectionArray.map((section) => (
                    <section key={section.id} className={section.className}>
                        <h2 className="font-bold text-xl h-20 flex items-center hover:scale-[0.97] transition-transform">
                            <button
                                onClick={() => handleClick(section.id)}
                                className="flex items-center justify-between w-full h-full"
                            >
                                {section.title}
                                <img
                                    src={section.img.src}
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </button>
                        </h2>

                        {section.displayContent && (
                            <div className="mt-1 mb-6">{section.content}</div>
                        )}
                    </section>
                ))}
            </main>
        </section>
    );
}
