import type {ReactElement} from "react";

import BannerImageComponent from "./components/banner-image.component.tsx";
import BannerTextsComponent from "./components/banner-texts.component.tsx";

export default function BannerComponent(): ReactElement {
    return (
        <>
            <div className="container py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
                    <BannerTextsComponent/>
                    <BannerImageComponent/>
                </div>
            </div>
        </>
    );
}
