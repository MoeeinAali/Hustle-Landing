import type {ReactElement} from "react";

import BannerImageComponent from "./components/banner-image.component.tsx";
import BannerTextsComponent from "./components/banner-texts.component.tsx";

const CARDS_DATA = [
    {
        title: "Design Tools",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit"
    }, {
        title: "Design Tools",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit"
    },
]

export default function BannerComponent(): ReactElement {
    return (
        <>
            <div className="container py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
                    <BannerTextsComponent text1={"Design is not what it looks like and feels like. Design is how"}
                                          text2={"It Works"}
                                          cards={CARDS_DATA}/>
                    <BannerImageComponent image={3}/>
                </div>
            </div>
        </>
    );
}
