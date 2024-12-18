"use client";

import "./CVDisplay.css";
import { useState, useRef } from "react";
import ToolsBar from "../ToolsBar";
import Zoom from "../Zoom";
import ProfilePictureDisplayed from "./ProfilePictureDisplayed";

export default function CVDisplay() {
    const widthSheet = 2480 / 4;
    const heightSheet = 3508 / 4;
    const [divisors, setDivisors] = useState(1);

    const sectionRef = useRef(null); // Référence pour le conteneur scrollable
    const [isActive, setIsActive] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const startPos = useRef({ x: 0, y: 0 });
    const scrollPos = useRef({ left: 0, top: 0 });

    const handleMouseDown = (e) => {
        if (!isActive) return;

        setIsDragging(true);
        startPos.current = { x: e.clientX, y: e.clientY };
        scrollPos.current = {
            left: sectionRef.current.scrollLeft,
            top: sectionRef.current.scrollTop,
        };
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !isActive) return;

        const dx = e.clientX - startPos.current.x; // Différence horizontale
        const dy = e.clientY - startPos.current.y; // Différence verticale

        // Mise à jour des scroll positions
        sectionRef.current.scrollLeft = scrollPos.current.left - dx;
        sectionRef.current.scrollTop = scrollPos.current.top - dy;
    };

    const handleMouseUp = () => {
        if (!isActive) return;
        setIsDragging(false);
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className="w-2/3 bg-grid overflow-auto min-h-full flex p-14 relative"
        >
            <div
                className="bg-white shadow-2xl mx-auto select-none overflow-hidden relative"
                onMouseDown={handleMouseDown}
                style={{
                    minWidth: `${widthSheet * divisors}px`,
                    height: `${heightSheet * divisors}px`,
                    cursor: isActive
                        ? isDragging
                            ? "grabbing"
                            : "grab"
                        : "default",
                }}
            >
                <ProfilePictureDisplayed />
            </div>
            <ToolsBar isActive={isActive} setIsActive={setIsActive} />
            <Zoom setDivisors={setDivisors} />
        </section>
    );
}
