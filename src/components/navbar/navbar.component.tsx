import type {ReactElement} from "react";
import {motion} from "motion/react";

import QuotesButtonComponent from "./components/quotes-button.component.tsx";
import LinksComponent from "./components/links.component.tsx";
import LogoComponent from "./components/logo.component.tsx";
import {slideBottomMotion} from "../../motions/slideBottom.motion.ts";


export default function NavbarComponent(): ReactElement {
    return (
        <motion.div {...slideBottomMotion(0.2)}
                    className="py-4 container flex justify-between items-center sticky top-0 bg-white bg-opacity-60 backdrop-blur-md z-40">
            <LogoComponent/>
            <LinksComponent/>
            <QuotesButtonComponent/>
        </motion.div>
    );
}