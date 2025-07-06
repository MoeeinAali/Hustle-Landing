import NavbarComponent from "./components/navbar/navbar.component.tsx";
import HeroComponent from "./components/hero/hero.component.tsx";
import ServicesComponent from "./components/services/services.component.tsx";
import BannerComponent from "./components/banner/banner.component.tsx";

function App() {
    return (
        <main>
            <NavbarComponent/>
            <HeroComponent/>
            <ServicesComponent/>
            <BannerComponent/>
        </main>
    );
}

export default App;
