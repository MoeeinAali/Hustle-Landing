import type {ReactElement} from "react";
import HeroImageComponent from "./components/hero-image.component.tsx";
import HeroTextsComponent from "./components/hero-texts.component.tsx";

export default function HeroComponent(): ReactElement {
    return (
        <>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
                    <HeroTextsComponent/>
                    <HeroImageComponent/>
                </div>
            </div>
        </>
    )
}