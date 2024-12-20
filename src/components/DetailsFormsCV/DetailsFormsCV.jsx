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
            <header className="flex justify-between items-center mb-5 p-4 border-b border-gray-800 shadow">
                <h1 className="text-2xl font-bold">CVBuilder</h1>
                <button>Prévisualisation</button>
            </header>
            <main id="main-section">
                <div className="mr-1.5 mb-1 text-end">
                    <button
                        onClick={() => {
                            setSectionArray((prev) => {
                                return prev.map((section) => {
                                    return {
                                        ...section,
                                        displayContent: true,
                                        img: chevronDown,
                                        className: "h-auto border-b px-5",
                                    };
                                });
                            });
                        }}
                        title="Ouvrirs les onglets"
                        className="bg-blue-800 px-2 py-1 rounded mr-1 hover:bg-blue-900"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="w-5 h-5"
                            fill="white"
                        >
                            <path d="M352 144c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48C576 64.5 511.5 0 432 0S288 64.5 288 144l0 48L64 192c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-32 0 0-48z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            setSectionArray((prev) => {
                                return prev.map((section) => {
                                    return {
                                        ...section,
                                        displayContent: false,
                                        img: chevronRight,
                                        className: sectionClassName,
                                    };
                                });
                            });
                        }}
                        title="Fermer les onglets"
                        className="bg-blue-800 px-2 py-1 rounded hover:bg-blue-900"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-5 h-5"
                            fill="white"
                        >
                            <path d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" />
                        </svg>
                    </button>
                </div>

                <div className="border-t shadow-lg">
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
                                <div className="mt-1 mb-6">
                                    {section.content}
                                </div>
                            )}
                        </section>
                    ))}
                </div>
            </main>
        </section>
    );
}
