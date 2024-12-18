"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ProfilePictureDisplayed() {
    const {
        profilePicture,
        radius,
        widthSize,
        heightSize,
        moveVertically,
        moveHorizontally,
        sheetZoom,
        border,
        borderColor,
        borderStyle,
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

    const [borderSize, setBorderSize] = useState(2);
    const [shadow, setShadow] = useState({
        shadowOffsetY,
        shadowOffsetX,
        shadowBlur,
        shadowSpread,
    });

    useEffect(() => {
        setBorderSize(border * (sheetZoom / 100));
    }, [sheetZoom, border]);

    useEffect(() => {
        setShadow({
            shadowOffsetY: shadowOffsetY * (sheetZoom / 100),
            shadowOffsetX: shadowOffsetX * (sheetZoom / 100),
            shadowBlur: shadowBlur * (sheetZoom / 100),
            shadowSpread: shadowSpread * (sheetZoom / 100),
        });
    }, [sheetZoom, shadowOffsetY, shadowOffsetX, shadowBlur, shadowSpread]);

    return (
        <>
            {profilePicture && (
                <div
                    style={{
                        width: `${widthSize}%`,
                        height: `${heightSize}%`,
                        position: "absolute",
                        top: `${moveY}%`,
                        left: `${moveX}%`,
                    }}
                >
                    <img
                        src={profilePicture}
                        alt="photo de profile"
                        className="w-full h-full object-cover"
                        style={{
                            borderRadius: `${radius}%`,
                            objectPosition: `${moveHorizontally}% ${moveVertically}%`,
                            border: `${borderSize}px ${borderStyle} ${borderColor}`,
                            transform: `${invert ? "scaleX(-1)" : ""}`,
                            boxShadow: `${shadow.shadowOffsetX}px ${
                                shadow.shadowOffsetY
                            }px ${shadow.shadowBlur}px ${
                                shadow.shadowSpread
                            }px rgba(${shadowColor[0]}, ${shadowColor[1]}, ${
                                shadowColor[2]
                            }, ${shadowOpacity / 100})`,
                        }}
                    />
                </div>
            )}
        </>
    );
}
