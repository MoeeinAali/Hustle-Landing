import NavbarComponent from "./components/navbar/navbar.component.tsx";
import HeroComponent from "./components/hero/hero.component.tsx";
import ServicesComponent from "./components/services/services.component.tsx";
import BannerComponent from "./components/banner/banner.component.tsx";
import Banner2Component from "./components/banner/banner2.component.tsx";
import CardsComponent from "./components/cards/cards.tsx";
import FooterComponent from "./components/footer/footer.component.tsx";

function App() {
    return (
        <main>
            <NavbarComponent/>
            <HeroComponent/>
            <ServicesComponent/>
            <BannerComponent/>
            <CardsComponent/>
            <Banner2Component/>
            <FooterComponent/>
        </main>
    );
}

export default App;
