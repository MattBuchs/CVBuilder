import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profilePicture: null,
    radius: 100,
    border: 2,
    widthSize: 25,
    heightSize: 18,
    moveY: 3,
    moveX: 3,
    moveVertically: 50,
    moveHorizontally: 50,
    invert: false,
    sheetZoom: 100,
    borderColor: "#000000",
    borderStyle: "solid",
    shadowOffsetY: 2,
    shadowOffsetX: 0,
    shadowBlur: 15,
    shadowSpread: -3,
    shadowColor: [0, 0, 0],
    shadowOpacity: 20,
};

export const profilePictureFeature = createSlice({
    name: "profilePictureFeature",
    initialState,
    reducers: {
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload;
        },
        setRadius: (state, action) => {
            state.radius = action.payload;
        },
        setWidthSize: (state, action) => {
            state.widthSize = action.payload;
        },
        setHeightSize: (state, action) => {
            state.heightSize = action.payload;
        },
        setMoveVertically: (state, action) => {
            state.moveVertically = action.payload;
        },
        setMoveHorizontally: (state, action) => {
            state.moveHorizontally = action.payload;
        },
        setSheetZoom: (state, action) => {
            state.sheetZoom = action.payload;
        },
        setBorder: (state, action) => {
            state.border = action.payload;
        },
        setBorderColor: (state, action) => {
            state.borderColor = action.payload;
        },
        setBorderStyle: (state, action) => {
            state.borderStyle = action.payload;
        },
        setMoveY: (state, action) => {
            state.moveY = action.payload;
        },
        setMoveX: (state, action) => {
            state.moveX = action.payload;
        },
        setInvert: (state, action) => {
            state.invert = action.payload;
        },
        setShadowOffsetY: (state, action) => {
            state.shadowOffsetY = action.payload;
        },
        setShadowOffsetX: (state, action) => {
            state.shadowOffsetX = action.payload;
        },
        setShadowBlur: (state, action) => {
            state.shadowBlur = action.payload;
        },
        setShadowSpread: (state, action) => {
            state.shadowSpread = action.payload;
        },
        setShadowColor: (state, action) => {
            const hex = action.payload;
            const rgb = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
            state.shadowColor = rgb;
        },
        setShadowOpacity: (state, action) => {
            state.shadowOpacity = action.payload;
        },
    },
});

export const {
    setProfilePicture,
    setRadius,
    setWidthSize,
    setHeightSize,
    setMoveVertically,
    setMoveHorizontally,
    setSheetZoom,
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
} = profilePictureFeature.actions;
export default profilePictureFeature.reducer;
