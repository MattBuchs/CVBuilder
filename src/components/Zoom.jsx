"use client";

import { useState, useEffect } from "react";

export default function Zoom({ setDivisors }) {
    const [valueInput, setValueInput] = useState(100);

    const handleChange = (e) => {
        if (e.target.value < 20) return setValueInput(20);
        if (e.target.value > 200) return setValueInput(200);

        setValueInput(Number(e.target.value));
        setDivisors(e.target.value / 100);
    };

    const handleWheel = (e) => {
        if (e.ctrlKey) {
            e.preventDefault(); // Empêche le zoom par défaut du navigateur

            let newValue = valueInput + (e.deltaY > 0 ? -5 : 5);
            if (newValue < 20) newValue = 20;
            if (newValue > 200) newValue = 200;

            setValueInput(newValue);
            setDivisors(newValue / 100);
        }
    };

    useEffect(() => {
        // Ajoute l'événement wheel lorsque le composant est monté
        window.addEventListener("wheel", handleWheel, { passive: false });

        // Nettoyage de l'événement pour éviter les fuites mémoire
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [valueInput]);

    return (
        <div className="fixed top-0 right-10 h-10 px-6 flex justify-center items-center bg-black/40 rounded-b">
            <input
                type="range"
                id="range"
                min="20"
                max="200"
                step="1"
                value={valueInput}
                onInput={handleChange}
            />
            <label htmlFor="range" className="text-white ml-2">
                {valueInput}%
            </label>
        </div>
    );
}
