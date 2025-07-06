import type {ReactElement} from "react";
import HeaderComponent from "./components/header.component.tsx";
import CardsComponent from "./components/cards.component.tsx";

export default function ServicesComponent(): ReactElement {
    return (
        <>
            <div className="container py-12">
                <HeaderComponent/>
                <CardsComponent/>
            </div>
        </>
    )
}