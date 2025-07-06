import type {ReactElement} from "react";
import {motion} from "motion/react";
import {slideLeftWhileInViewMotion} from "../../../motions/slideLeftWhileInView.motion.ts";

export type CardData = {
    motionDelay: number,
    title: string,
    description: string,
}
export default function ServiceCardComponent({props}: { props: CardData }): ReactElement {
    return (
        <>
            <motion.div
                {...slideLeftWhileInViewMotion(props.motionDelay)}
                className="max-w-[300px] mx-auto space-y-4"
            >
                <img src={"/2.png"} alt="" className="w-14"/>
                <p className="uppercase font-semibold text-xl">{props.title}</p>
                <p className="text-gray-500 pl-6 border-l-2">
                    {props.description}
                </p>
            </motion.div>
        </>
    )
}

