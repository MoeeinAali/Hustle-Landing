import type {ReactElement} from "react";
import {motion} from "motion/react";

import QuotesButtonComponent from "./components/quotes-button.component.tsx";
import LinksComponent from "./components/links.component.tsx";
import LogoComponent from "./components/logo.component.tsx";
import {slideBottom} from "../../utils/animation.ts";


export default function NavbarComponent(): ReactElement {
    return (
        <motion.div {...slideBottom(0.2)} className="py-8 container flex justify-between items-center">
            <LogoComponent/>
            <LinksComponent/>
            <QuotesButtonComponent/>
        </motion.div>
    );
}