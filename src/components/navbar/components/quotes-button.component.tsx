import type {ReactElement} from "react";

export default function QuotesButtonComponent(): ReactElement {
    return (
        <div>
            <button className="primary-btn"><a href={"#"}>Request For Quotes</a></button>
        </div>
    );
}