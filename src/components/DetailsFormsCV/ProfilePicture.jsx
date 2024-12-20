"use client";

import { useDispatch, useSelector } from "react-redux";
import {
    setProfilePicture,
    setRadius,
    setWidthSize,
    setHeightSize,
    setMoveVertically,
    setMoveHorizontally,
    setBorder,
    setBorderColor,
    setBorderStyle,
    setMoveY,
    setMoveX,
    setInvert,
    setShadowOffsetY,
    setShadowOffsetX,
    setShadowBlur,
    setShadowSpread,
    setShadowColor,
    setShadowOpacity,
    setZIndex,
} from "@/store/features/profilePicture";
import { useEffect, useState } from "react";
import ResetValue from "../Utils/Buttons/ResetValue";

export default function ProfilePicture() {
    const dispatch = useDispatch();
    const {
        border,
        borderColor,
        radius,
        widthSize,
        heightSize,
        moveVertically,
        moveHorizontally,
        moveY,
        moveX,
        invert,
        shadowOffsetY,
        shadowOffsetX,
        shadowBlur,
        shadowSpread,
        shadowColor,
        shadowOpacity,
        zIndex,
    } = useSelector((state) => state.profilePictureFeature);
    const [shadowColorState, setShadowColorState] = useState("#000000");

    const handleImageChange = (e) => {
        const selectedFile = e.target.files?.[0]; // Récupère le premier fichier sélectionné (ou undefined)

        if (selectedFile && selectedFile.type.startsWith("image/")) {
            // Vérifie si le fichier est une image
            const reader = new FileReader();

            reader.onload = (event) => {
                dispatch(setProfilePicture(event.target.result)); // Met à jour l'état avec l'URL de l'image
            };

            reader.readAsDataURL(selectedFile); // Lis le fichier comme URL
        } else {
            console.error("Le fichier sélectionné n'est pas une image valide.");
        }
    };

    useEffect(() => {
        const [r, g, b] = shadowColor;
        const toHex = (value) => value.toString(16).padStart(2, "0");
        const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

        setShadowColorState(hex);
    }, [shadowColor]);

    return (
        <form>
            <fieldset className="border border-amber-400 p-4 rounded bg-black/30 mb-4 relative">
                <legend className="bg-amber-200 text-black font-semibold px-3 py-1 rounded-md">
                    Photo de profil
                </legend>

                <ResetValue
                    resetValues={[
                        setWidthSize(25),
                        setHeightSize(18),
                        setRadius(10),
                        setInvert(false),
                    ]}
                />
                <div className="mb-2">
                    <label htmlFor="file" className="block">
                        Choisir une photo
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className=""
                    />
                </div>

                <div className="mb-1">
                    <label htmlFor="pictureWidthSize" className="block">
                        Largeur de l'image
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="pictureWidthSize"
                            id="pictureWidthSize"
                            min="10"
                            max="75"
                            step="1"
                            value={widthSize}
                            onChange={(e) => {
                                dispatch(setWidthSize(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{widthSize}%</p>
                    </div>
                </div>

                <div className="mb-1">
                    <label htmlFor="pictureHeightSize" className="block">
                        Hauteur de l'image
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="pictureHeightSize"
                            id="pictureHeightSize"
                            min="10"
                            max="75"
                            step="1"
                            value={heightSize}
                            onChange={(e) => {
                                dispatch(setHeightSize(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{heightSize}%</p>
                    </div>
                </div>

                <div className="mb-1">
                    <label
                        htmlFor="profilePictureRadius"
                        className="block select-none"
                    >
                        Arrondissement de la photo
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="profilePictureRadius"
                            id="profilePictureRadius"
                            min="0"
                            step="1"
                            max="100"
                            value={radius}
                            onChange={(e) => {
                                dispatch(setRadius(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{radius}%</p>
                    </div>
                </div>

                <div className="mb-1">
                    <p>Superposition de l'image</p>

                    <div className="mt-1">
                        <button
                            title="Premier plan"
                            className="cursor-pointer bg-blue-800 w-16 h-10 mr-1 px-2 py-1 rounded hover:bg-blue-900 border-2 border-blue-800"
                            style={{
                                borderColor: zIndex === 3 ? "#fbbf24" : "",
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(setZIndex(3));
                            }}
                        >
                            <img
                                src="/img/P-Plan.png"
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </button>
                        <button
                            title="Deuxième plan"
                            className="cursor-pointer bg-blue-800 w-16 h-10 mr-1 px-2 py-1 rounded hover:bg-blue-900 border-2 border-blue-800"
                            style={{
                                borderColor: zIndex === 2 ? "#fbbf24" : "",
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(setZIndex(2));
                            }}
                        >
                            <img
                                src="/img/D-Plan.png"
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </button>
                        <button
                            title="Dernier plan"
                            className="cursor-pointer bg-blue-800 w-16 h-10 px-2 py-1 rounded hover:bg-blue-900 border-2 border-blue-800"
                            style={{
                                borderColor: zIndex === 1 ? "#fbbf24" : "",
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(setZIndex(1));
                            }}
                        >
                            <img
                                src="/img/T-Plan.png"
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </button>
                    </div>
                </div>

                <div className="mb-1">
                    <label htmlFor="pictureInvert" className="select-none">
                        Inverser l'image
                    </label>
                    <input
                        type="checkbox"
                        name="pictureInvert"
                        id="pictureInvert"
                        className="cursor-pointer ml-2 h-4 w-4"
                        checked={invert}
                        onChange={(e) => {
                            dispatch(setInvert(e.target.checked));
                        }}
                    />
                </div>
            </fieldset>

            <fieldset className="border border-amber-400 p-4 rounded bg-black/30 mb-4 relative">
                <legend className="bg-amber-200 text-black font-semibold px-3 py-1 rounded-md">
                    Options de déplacement
                </legend>

                <ResetValue
                    resetValues={[
                        setMoveY(3),
                        setMoveX(3),
                        setMoveVertically(50),
                        setMoveHorizontally(50),
                    ]}
                />
                <div className="mb-1">
                    <label htmlFor="MoveY" className="block">
                        Déplacer l'image verticalement
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="MoveY"
                            id="MoveY"
                            min="-50"
                            max="100"
                            step="1"
                            value={moveY}
                            onChange={(e) => {
                                dispatch(setMoveY(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{moveY}%</p>
                    </div>
                </div>

                <div className="mb-1">
                    <label htmlFor="MoveX" className="block">
                        Déplacer l'image horizontalement
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="MoveX"
                            id="MoveX"
                            min="-50"
                            max="100"
                            step="1"
                            value={moveX}
                            onChange={(e) => {
                                dispatch(setMoveX(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{moveX}%</p>
                    </div>
                </div>

                <div className="mb-1">
                    <label htmlFor="MoveVertically" className="block">
                        Déplacer l'image intérieur verticalement
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="MoveVertically"
                            id="MoveVertically"
                            min="0"
                            max="100"
                            step="1"
                            value={moveVertically}
                            onChange={(e) => {
                                dispatch(setMoveVertically(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{moveVertically}%</p>
                    </div>
                </div>

                <div className="mb-1">
                    <label htmlFor="MoveHorizontally" className="block">
                        Déplacer l'image intérieur horizontalement
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="MoveHorizontally"
                            id="MoveHorizontally"
                            min="0"
                            max="100"
                            step="1"
                            value={moveHorizontally}
                            onChange={(e) => {
                                dispatch(setMoveHorizontally(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">
                            {moveHorizontally}%
                        </p>
                    </div>
                </div>
            </fieldset>

            <fieldset className="border border-amber-400 p-4 rounded bg-black/30 mb-4 relative">
                <legend className="bg-amber-200 text-black font-semibold px-3 py-1 rounded-md">
                    Options de la bordure
                </legend>

                <ResetValue
                    resetValues={[
                        setBorder(2),
                        setBorderStyle("solid"),
                        setBorderColor("#000000"),
                    ]}
                />
                <div className="mb-2">
                    <label htmlFor="pictureBorder" className="block">
                        Bordure de l'image
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="pictureBorder"
                            id="pictureBorder"
                            min="0"
                            max="30"
                            step="1"
                            value={border}
                            onChange={(e) => {
                                dispatch(setBorder(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{border}px</p>
                    </div>
                </div>

                <div className="mb-2">
                    <label htmlFor="pictureBorderStyle">
                        Style de la bordure
                    </label>
                    <select
                        name="pictureBorderStyle"
                        id="pictureBorderStyle"
                        className="text-black cursor-pointer ml-2"
                        onChange={(e) => {
                            dispatch(setBorderStyle(e.target.value));
                        }}
                    >
                        <option value="solid">Solide</option>
                        <option value="dashed">Tirets</option>
                        <option value="dotted">Pointillés</option>
                        <option value="double">Double</option>
                        <option value="groove">Sillon</option>
                        <option value="ridge">Crête</option>
                        <option value="inset">Incrusté</option>
                        <option value="outset">Saillante</option>
                    </select>
                </div>

                <div className="mb-1 flex items-center">
                    <label htmlFor="pictureBorderColor">
                        Couleur de la bordure
                    </label>
                    <input
                        type="color"
                        name="pictureBorderColor"
                        id="pictureBorderColor"
                        className="cursor-pointer ml-2"
                        value={borderColor}
                        onChange={(e) => {
                            dispatch(setBorderColor(e.target.value));
                        }}
                    />
                </div>
            </fieldset>

            <fieldset className="border border-amber-400 p-4 rounded bg-black/30 relative">
                <legend className="bg-amber-200 text-black font-semibold px-3 py-1 rounded-md">
                    Options des ombres
                </legend>

                <ResetValue
                    resetValues={[
                        setShadowOffsetY(2),
                        setShadowOffsetX(0),
                        setShadowBlur(15),
                        setShadowSpread(-3),
                        setShadowOpacity(20),
                        setShadowColor("#000000"),
                    ]}
                />
                <div className="mb-1">
                    <label htmlFor="offSetY" className="block">
                        Ombres verticales
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="offSetY"
                            id="offSetY"
                            min="-100"
                            max="100"
                            step="1"
                            value={shadowOffsetY}
                            onChange={(e) => {
                                dispatch(setShadowOffsetY(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{shadowOffsetY}%</p>
                    </div>
                </div>

                <div className="mb-1">
                    <label htmlFor="offSetX" className="block">
                        Ombres horizontales
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="offSetX"
                            id="offSetX"
                            min="-100"
                            max="100"
                            step="1"
                            value={shadowOffsetX}
                            onChange={(e) => {
                                dispatch(setShadowOffsetX(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{shadowOffsetX}%</p>
                    </div>
                </div>

                <div className="mb-1">
                    <label htmlFor="blur" className="block">
                        Rayon de flou
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="blur"
                            id="blur"
                            min="0"
                            max="200"
                            step="1"
                            value={shadowBlur}
                            onChange={(e) => {
                                dispatch(setShadowBlur(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{shadowBlur}px</p>
                    </div>
                </div>

                <div className="mb-1">
                    <label htmlFor="spread" className="block">
                        Rayon de propagation
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="spread"
                            id="spread"
                            min="-50"
                            max="50"
                            step="1"
                            value={shadowSpread}
                            onChange={(e) => {
                                dispatch(setShadowSpread(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{shadowSpread}px</p>
                    </div>
                </div>

                <div className="mb-1">
                    <label htmlFor="shadowOpacity" className="block">
                        Opacité
                    </label>

                    <div className="flex">
                        <input
                            type="range"
                            name="shadowOpacity"
                            id="shadowOpacity"
                            min="0"
                            max="100"
                            step="1"
                            value={shadowOpacity}
                            onChange={(e) => {
                                dispatch(setShadowOpacity(e.target.value));
                            }}
                        />
                        <p className="font-semibold ml-2">{shadowOpacity}%</p>
                    </div>
                </div>

                <div className="mb-1 flex items-center">
                    <label htmlFor="shadowColor">Couleur de l'ombre</label>
                    <input
                        type="color"
                        name="shadowColor"
                        id="shadowColor"
                        className="ml-2 cursor-pointer"
                        value={shadowColorState}
                        onChange={(e) => {
                            dispatch(setShadowColor(e.target.value));
                        }}
                    />
                </div>
            </fieldset>
        </form>
    );
}
