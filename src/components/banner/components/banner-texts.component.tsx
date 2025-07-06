import type {ReactElement} from "react";
import {motion} from "motion/react";

import {slideUpWhileInViewMotion} from "../../../motions/slideUpWhileInView.motion.ts";

export default function BannerTextsComponent({text1, text2, cards}: {
    text1: string,
    text2: string,
    cards?: { title: string, description: string }[]
}): ReactElement {
    return (
        <div
            className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start">
            <motion.h1
                {...slideUpWhileInViewMotion(0.2)}
                className="text-3xl xl:text-4xl font-semibold text-black/80"
            >
                {text1}{" "}
                <br/>
                <span className="text-gray-400 underline">{text2}</span>
            </motion.h1>

            <motion.button
                {...slideUpWhileInViewMotion(0.4)}
                className="primary-btn hover:bg-black  text-black hover:text-white duration-300"
            ><a href={"#"}>
                More News </a>
            </motion.button>

            <div className="grid grid-cols-2 gap-3">
                {cards && cards.length > 0 && cards.map((card, index) => (
                    <motion.div
                        key={index}
                        {...slideUpWhileInViewMotion(0.2 * (3 + index))}
                        className="space-y-2"
                    >
                        <p className="font-semibold text-lg">{card.title}</p>
                        <p>{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
