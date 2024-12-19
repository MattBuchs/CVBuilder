import { useDispatch } from "react-redux";

export default function ResetValue({ resetValues }) {
    const dispatch = useDispatch();

    const handdleClick = (e) => {
        e.preventDefault();
        resetValues.map((value) => dispatch(value));
    };

    return (
        <button
            onClick={handdleClick}
            title="Réinitialiser"
            className="absolute -top-2 right-2 bg-amber-400 hover:bg-amber-500 hover:scale-[0.96] w-6 h-6 rounded flex items-center justify-center"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4"
            >
                <path d="M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z" />
            </svg>
        </button>
    );
}
