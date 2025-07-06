import type {ReactElement} from "react";

export default function HeroImageComponent(): ReactElement {
    return (
        <div className="flex justify-center items-center">
            <img
                src={"/1.png"}
                alt=""
                className="w-[90%] md:w-[550px] xl:w-[600px]"
            />
        </div>
    );
}