import type {ReactElement} from "react";

export type NavbarItem = {
    title: string,
    link: string,
}

const NAVBAR_ITEMS: NavbarItem[] = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Features",
        link: "/"
    },
    {
        title: "Shop",
        link: "#"
    },
    {
        title: "About Us",
        link: "#"
    },
    {
        title: "Contact",
        link: "#"
    }
]

export default function LinksComponent(): ReactElement {
    return (
        <div className="hidden md:block">
            <ul className="flex gap-3 md:gap-4 lg:gap-5 xl:gap-7">
                {NAVBAR_ITEMS.map((link, index) =>
                    <li key={index}>
                        <a
                            className="hover:text-primary uppercase text-sm xl:text-base duration-200"
                            href={link.link}
                        >
                            {link.title}
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );
}