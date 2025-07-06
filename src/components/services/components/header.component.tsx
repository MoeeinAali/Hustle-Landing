import type {ReactElement} from "react";
import {motion} from "motion/react";
import {slideLeftMotion} from "../../../motions/slideLeft.motion.ts";

export default function HeaderComponent(): ReactElement {
    return (
        <motion.div
            {...slideLeftMotion(0.2)}
            whileInView={"animate"}
            className="py-12 flex justify-between items-center"
        >
            <h1 className="text-4xl xl:text-5xl font-bold max-w-[550px]">
                Classes to Spark Your{" "}
                <span className="text-gray-400 underline">Creativity</span>
            </h1>
            <p className="hidden md:block">
                Notified to Spark your <br></br>
                <span className="text-gray-400 underline">Balance</span>{" "}
            </p>
        </motion.div>
    )
}