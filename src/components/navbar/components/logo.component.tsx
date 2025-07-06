import type {ReactElement} from "react";

export default function LogoComponent(): ReactElement {
    return (
        <a href={"/"}>
            <div className="flex items-center gap-1">
                <img src={"/1.png"} alt="" className="w-[70px]"/>
                <p className="font-bold text-2xl">HUSTLE</p>
            </div>
        </a>
    );
}