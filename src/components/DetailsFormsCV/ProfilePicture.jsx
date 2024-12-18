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
} from "@/store/features/profilePicture";
import { useEffect, useState } from "react";

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
        <section className="mt-8">
            <h2 className="font-bold text-xl mb-4">
                Ajouter une photo de profile :
            </h2>

            <form>
                <fieldset className="border p-4 rounded bg-slate-950 mb-4">
                    <legend className="bg-white text-black font-semibold px-3 py-1 rounded-md">
                        Photo de profil
                    </legend>

                    <div>
                        <label htmlFor="file">Choisir une photo</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="border"
                        />
                    </div>

                    <div>
                        <label htmlFor="profilePictureRadius">
                            Arrondissement de la photo
                        </label>
                        <input
                            type="range"
                            name="profilePictureRadius"
                            id="profilePictureRadius"
                            min="0"
                            step="1"
                            max="100"
                            defaultValue="100"
                            onChange={(e) => {
                                dispatch(setRadius(e.target.value));
                            }}
                        />
                        <small>{radius}%</small>
                    </div>

                    <div>
                        <label htmlFor="pictureWidthSize">
                            Largeur de l'image
                        </label>
                        <input
                            type="range"
                            name="pictureWidthSize"
                            id="pictureWidthSize"
                            min="10"
                            max="75"
                            step="1"
                            defaultValue="25"
                            onChange={(e) => {
                                dispatch(setWidthSize(e.target.value));
                            }}
                        />
                        <small>{widthSize}%</small>
                    </div>

                    <div>
                        <label htmlFor="pictureHeightSize">
                            Hauteur de l'image
                        </label>
                        <input
                            type="range"
                            name="pictureHeightSize"
                            id="pictureHeightSize"
                            min="10"
                            max="75"
                            step="1"
                            defaultValue="25"
                            onChange={(e) => {
                                dispatch(setHeightSize(e.target.value));
                            }}
                        />
                        <small>{heightSize}%</small>
                    </div>

                    <div>
                        <label htmlFor="pictureInvert">Inverser l'image</label>
                        <input
                            type="checkbox"
                            name="pictureInvert"
                            id="pictureInvert"
                            defaultChecked={invert}
                            onChange={(e) => {
                                dispatch(setInvert(e.target.checked));
                            }}
                        />
                    </div>
                </fieldset>

                <fieldset className="border p-4 rounded bg-slate-950 mb-4">
                    <legend className="bg-white text-black font-semibold px-3 py-1 rounded-md">
                        Options de déplacement
                    </legend>

                    <div>
                        <label htmlFor="MoveY">
                            Déplacer l'image verticalement
                        </label>
                        <input
                            type="range"
                            name="MoveY"
                            id="MoveY"
                            min="-50"
                            max="100"
                            step="1"
                            defaultValue="3"
                            onChange={(e) => {
                                dispatch(setMoveY(e.target.value));
                            }}
                        />
                        <small>{moveY}%</small>
                    </div>

                    <div>
                        <label htmlFor="MoveX">
                            Déplacer l'image horizontalement
                        </label>
                        <input
                            type="range"
                            name="MoveX"
                            id="MoveX"
                            min="-50"
                            max="100"
                            step="1"
                            defaultValue="3"
                            onChange={(e) => {
                                dispatch(setMoveX(e.target.value));
                            }}
                        />
                        <small>{moveX}%</small>
                    </div>

                    <div>
                        <label htmlFor="MoveVertically">
                            Déplacer l'image intérieur verticalement
                        </label>
                        <input
                            type="range"
                            name="MoveVertically"
                            id="MoveVertically"
                            min="0"
                            max="100"
                            step="1"
                            defaultValue="50"
                            onChange={(e) => {
                                dispatch(setMoveVertically(e.target.value));
                            }}
                        />
                        <small>{moveVertically}%</small>
                    </div>

                    <div>
                        <label htmlFor="MoveHorizontally">
                            Déplacer l'image intérieur horizontalement
                        </label>
                        <input
                            type="range"
                            name="MoveHorizontally"
                            id="MoveHorizontally"
                            min="0"
                            max="100"
                            step="1"
                            defaultValue="50"
                            onChange={(e) => {
                                dispatch(setMoveHorizontally(e.target.value));
                            }}
                        />
                        <small>{moveHorizontally}%</small>
                    </div>
                </fieldset>

                <fieldset className="border p-4 rounded bg-slate-950 mb-4">
                    <legend className="bg-white text-black font-semibold px-3 py-1 rounded-md">
                        Options de la bordure
                    </legend>

                    <div>
                        <label htmlFor="pictureBorder">
                            Bordure de l'image
                        </label>
                        <input
                            type="range"
                            name="pictureBorder"
                            id="pictureBorder"
                            min="0"
                            max="30"
                            step="1"
                            defaultValue="2"
                            onChange={(e) => {
                                dispatch(setBorder(e.target.value));
                            }}
                        />
                        <small>{border}px</small>
                    </div>

                    <div>
                        <label htmlFor="pictureBorderStyle">
                            Style de la bordure
                        </label>
                        <select
                            name="pictureBorderStyle"
                            id="pictureBorderStyle"
                            className="text-black cursor-pointer"
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

                    <div>
                        <label htmlFor="pictureBorderColor">
                            Couleur de la bordure
                        </label>
                        <input
                            type="color"
                            name="pictureBorderColor"
                            id="pictureBorderColor"
                            className="cursor-pointer"
                            value={borderColor}
                            onChange={(e) => {
                                dispatch(setBorderColor(e.target.value));
                            }}
                        />
                    </div>
                </fieldset>

                <fieldset className="border p-4 rounded bg-slate-950">
                    <legend className="bg-white text-black font-semibold px-3 py-1 rounded-md">
                        Options des ombres
                    </legend>

                    <div>
                        <label htmlFor="offSetY">Ombres verticales</label>
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
                        <small>{shadowOffsetY}%</small>
                    </div>

                    <div>
                        <label htmlFor="offSetX">Ombres horizontales</label>
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
                        <small>{shadowOffsetX}%</small>
                    </div>

                    <div>
                        <label htmlFor="blur">Rayon de flou</label>
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
                        <small>{shadowBlur}px</small>
                    </div>

                    <div>
                        <label htmlFor="spread">Rayon de propagation</label>
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
                        <small>{shadowSpread}px</small>
                    </div>

                    <div>
                        <label htmlFor="shadowColor">Couleur de l'ombre</label>
                        <input
                            type="color"
                            name="shadowColor"
                            id="shadowColor"
                            value={shadowColorState}
                            onChange={(e) => {
                                dispatch(setShadowColor(e.target.value));
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="shadowOpacity">Opacité</label>
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
                        <small>{shadowOpacity}%</small>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}
