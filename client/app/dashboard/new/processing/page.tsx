import Loader from "@/components/ui/loader/loader";
import "./page.css"
export default function Page() {
    return <div className={"processingContainer"}>
        <h1>Processing...</h1>
        <div>
            <Loader>
                We are processing your request with our AI, you can return to the homepage.
            </Loader>
        </div>
    </div>
}