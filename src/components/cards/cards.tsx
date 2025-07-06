import type {ReactElement} from "react";
import {motion} from "motion/react"

import {slideUpWhileInViewMotion} from "../../motions/slideUpWhileInView.motion.ts";

export default function CardsComponent(): ReactElement {
    return (
        <>
            <div className="bg-gray-50">
                <div className="container py-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <motion.div
                            {...slideUpWhileInViewMotion(0.2)}
                            className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
                        >
                            <img
                                src={"/icons/1.png"}
                                alt=""
                                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
                            />
                            <p className="text-xl font-semibold">About</p>
                            <p className="text-sm text-black/80 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                                accus
                            </p>
                        </motion.div>
                        <motion.div
                            {...slideUpWhileInViewMotion(0.5)}
                            className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
                        >
                            <img
                                src={"/icons/2.png"}
                                alt=""
                                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
                            />
                            <p className="text-xl font-semibold">Connection</p>
                            <p className="text-sm text-black/80">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                                accus
                            </p>
                        </motion.div>
                        <motion.div
                            {...slideUpWhileInViewMotion(0.8)}
                            className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
                        >
                            <img
                                src={"/icons/3.png"}
                                alt=""
                                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
                            />
                            <p className="text-xl font-semibold">Plugin</p>
                            <p className="text-sm text-black/80">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                                accus
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
