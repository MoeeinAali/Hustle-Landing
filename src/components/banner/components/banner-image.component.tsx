import type {ReactElement} from "react";
import {motion} from "motion/react";

import {slideLeftWhileInViewMotion} from "../../../motions/slideLeftWhileInView.motion.ts";

export default function BannerImageComponent({image}: { image: string | number }): ReactElement {
    return (
        <div className="flex justify-center items-center">
            <motion.img
                {...slideLeftWhileInViewMotion(0.5)}
                src={`/${image}.png`}
                alt=""
                className="max-w-[300px] w-[90%] md:w-[550px] xl:w-[600px] md:!scale-125 -z-10"
            />
        </div>
    );
}
