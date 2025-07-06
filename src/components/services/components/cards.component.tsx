import type {ReactElement} from "react";
import {motion} from "motion/react";
import {slideLeftWhileInViewMotion} from "../../../motions/slideLeftWhileInView.motion.ts";
import CardComponent, {type CardData} from "./card.component.tsx";

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

export default function CardsComponent(): ReactElement {
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
            {CARDS_DATA.map(card => <CardComponent {...card}/>)}
        </div>
    )
}


