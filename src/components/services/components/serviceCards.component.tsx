import type {ReactElement} from "react";
import {motion} from "motion/react";
import {slideLeftWhileInViewMotion} from "../../../motions/slideLeftWhileInView.motion.ts";
import ServiceCardComponent, {type CardData} from "./serviceCard.component.tsx";

const CARDS_DATA: CardData[] = [
    {
        title: "Learn By doing",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia asperiores magnam? Assumenda perferendis optio dicta natus nobis, cupiditate eveniet libero ratione quam iusto!",
        motionDelay: 0.4
    },
    {
        title: "Learn By doing",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia asperiores magnam? Assumenda perferendis optio dicta natus nobis, cupiditate eveniet libero ratione quam iusto!",
        motionDelay: 0.6
    },
    {
        title: "Learn By doing",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia asperiores magnam? Assumenda perferendis optio dicta natus nobis, cupiditate eveniet libero ratione quam iusto!",
        motionDelay: 0.8
    },
]

export default function ServiceCardsComponent(): ReactElement {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
                {...slideLeftWhileInViewMotion(0.2)}
            >
                <img
                    src={"/2.png"}
                    alt=""
                    className="w-[300px] mx-auto md:max-w-[500px]"
                />
            </motion.div>
            {CARDS_DATA.map((card, index) => {
                return <ServiceCardComponent props={card} key={index}/>
            })}
        </div>
    )
}


