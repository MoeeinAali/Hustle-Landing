import type {ReactElement} from "react";
import {motion} from "motion/react";

import {slideUpWhileInViewMotion} from "../../../motions/slideUpWhileInView.motion.ts";

export default function BannerTextsComponent(): ReactElement {
    return (
        <div
            className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start">
            <motion.h1
                {...slideUpWhileInViewMotion(0.2)}
                className="text-4xl xl:text-5xl font-semibold text-black/80"
            >
                Design is not what it looks like and feels like. Design is how{" "}
                <br/>
                <span className="text-gray-400 underline">It Works</span>
            </motion.h1>

            <motion.button
                {...slideUpWhileInViewMotion(0.4)}
                className="primary-btn hover:bg-black  text-black hover:text-white duration-300"
            ><a href={"#"}>
                More News </a>
            </motion.button>

            <div className="grid grid-cols-2 gap-3">
                <motion.div
                    {...slideUpWhileInViewMotion(0.6)}
                    className="space-y-2"
                >
                    <p className="font-semibold text-lg">Design Tools</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                </motion.div>
                <motion.div
                    {...slideUpWhileInViewMotion(0.8)}
                    className="space-y-2"
                >
                    <p className="font-semibold text-lg">Design Tools</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                </motion.div>
            </div>
        </div>
    );
}
