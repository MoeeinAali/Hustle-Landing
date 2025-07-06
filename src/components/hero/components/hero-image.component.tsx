import type {ReactElement} from "react";
import {slideLeft} from "../../../utils/animation.ts";
import { motion } from "motion/react";

export default function HeroImageComponent(): ReactElement {
    return (
        <div className="flex justify-center items-center"
        >
            <motion.img
                {...slideLeft(0.5)}
                src={"/1.png"}
                alt=""
                className="w-[90%] md:w-[550px] xl:w-[600px]"
            />
        </div>
    );
}