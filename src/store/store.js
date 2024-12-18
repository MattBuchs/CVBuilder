import { configureStore } from "@reduxjs/toolkit";
import profilePictureFeature from "./features/profilePicture";

export const store = configureStore({
    reducer: {
        profilePictureFeature,
    },
});
