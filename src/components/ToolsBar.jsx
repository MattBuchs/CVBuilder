"use client";

import { useEffect } from "react";

export default function ToolsBar({ isActive, setIsActive }) {
    // Gestion de l'appui sur espace
    const handleKeyDown = (e) => {
        if (e.code === "Space") {
            e.preventDefault();
            setIsActive(true);
        }
    };

    // Gestion du relâchement de la touche espace
    const handleKeyUp = (e) => {
        if (e.code === "Space") {
            e.preventDefault();
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return (
        <div className="fixed top-20 right-0 w-12 bg-black/80 rounded-s flex flex-col items-center justify-center gap-4">
            <button
                onClick={() => setIsActive((prev) => !prev)}
                className="flex items-center justify-center w-full h-12 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill={isActive ? "rgb(96 165 250)" : "white"}
                    className="w-7 h-7"
                >
                    Font Awesome Free 6.7.2 by @fontawesome -
                    https://fontawesome.com License -
                    https://fontawesome.com/license/free Copyright 2024
                    Fonticons, Inc.
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 272c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64l19.2 0c97.2 0 176-78.8 176-176l0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208z" />
                </svg>
            </button>
        </div>
    );
}
