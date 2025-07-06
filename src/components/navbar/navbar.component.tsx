import type {ReactElement} from "react";
import QuotesButtonComponent from "./components/quotes-button.component.tsx";
import LinksComponent from "./components/links.component.tsx";
import LogoComponent from "./components/logo.component.tsx";


export default function NavbarComponent(): ReactElement {
    return (
        <div className="py-8 container flex justify-between items-center">
            <LogoComponent/>
            <LinksComponent/>
            <QuotesButtonComponent/>
        </div>
    );
}