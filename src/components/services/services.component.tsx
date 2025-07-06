import type {ReactElement} from "react";
import HeaderComponent from "./components/header.component.tsx";
import ServiceCardsComponent from "./components/serviceCards.component.tsx";

export default function ServicesComponent(): ReactElement {
    return (
        <>
            <div className="container py-12">
                <HeaderComponent/>
                <ServiceCardsComponent/>
            </div>
        </>
    )
}