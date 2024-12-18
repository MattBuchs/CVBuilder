"use client";

import { setSheetZoom } from "@/store/features/profilePicture";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Zoom({ setDivisors }) {
    const dispatch = useDispatch();
    const { sheetZoom } = useSelector((state) => state.profilePictureFeature);

    const handleChange = (e) => {
        if (e.target.value < 20) return dispatch(setSheetZoom(20));
        if (e.target.value > 200) return dispatch(setSheetZoom(200));

        dispatch(setSheetZoom(Number(e.target.value)));
        setDivisors(e.target.value / 100);
    };

    const handleWheel = (e) => {
        if (e.ctrlKey) {
            e.preventDefault(); // Empêche le zoom par défaut du navigateur

            let newValue = sheetZoom + (e.deltaY > 0 ? -5 : 5);
            if (newValue < 20) newValue = 20;
            if (newValue > 200) newValue = 200;

            dispatch(setSheetZoom(newValue));
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
    }, [sheetZoom]);

    return (
        <div className="fixed top-0 right-10 h-10 px-6 flex justify-center items-center bg-black/40 rounded-b">
            <input
                type="range"
                id="range"
                min="20"
                max="200"
                step="1"
                value={sheetZoom}
                onInput={handleChange}
            />
            <label htmlFor="range" className="text-white ml-2">
                {sheetZoom}%
            </label>
        </div>
    );
}
