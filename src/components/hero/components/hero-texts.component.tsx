import type {ReactElement} from "react";
import {motion} from "motion/react";

import {slideUp} from "../../../utils/animation.ts";

export default function HeroTextsComponent(): ReactElement {
    return (
        <div
            className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
            <motion.h1
                {...slideUp(0.2)}
                className="text-4xl xl:text-5xl font-bold"
            >
                Unlock a Passion, Side Hustle, or New{" "}
                <span className="text-gray-400 underline">Profession</span>
            </motion.h1>
            <motion.p {...slideUp(0.4)}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos eligendi mollitia{" "}
            </motion.p>
            <motion.button
                className="primary-btn bg-gray-900 hover:bg-primary"
                {...slideUp(0.6)}
            >
                More News
            </motion.button>
        </div>
    );
}