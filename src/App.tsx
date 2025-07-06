import './main.css';
import NavbarComponent from "./components/navbar/navbar.component.tsx";
import HeroComponent from "./components/hero/hero.component.tsx";
import ServicesComponent from "./components/services/services.component.tsx";

function App() {
    return (
        <main>
            <NavbarComponent/>
            <HeroComponent/>
            <ServicesComponent/>
        </main>
    );
}

export default App;
