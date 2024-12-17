import DetailsFormsCV from "@/components/DetailsFormsCV/DetailsFormsCV";
import CVDisplay from "@/components/CVDisplay/CVDisplay";

export default function Home() {
    return (
        <div className="flex max-h-screen overflow-hidden">
            <DetailsFormsCV />
            <CVDisplay />
        </div>
    );
}
