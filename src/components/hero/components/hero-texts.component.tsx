import type {ReactElement} from "react";

export default function HeroTextsComponent(): ReactElement {
    return (
        <div
            className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start">
            <h1
                className="text-4xl xl:text-5xl font-bold"
            >
                Unlock a Passion, Side Hustle, or New{" "}
                <span className="text-gray-400 underline">Profession</span>
            </h1>
            <p
            >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos eligendi mollitia{" "}
            </p>
            <button
                className="primary-btn bg-gray-900 hover:bg-primary"
            >
                More News
            </button>
        </div>
    );
}