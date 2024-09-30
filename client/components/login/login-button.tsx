import PrimaryButton from "@/components/ui/buttons/primary-button";
import { useFormStatus } from "react-dom"

export default function LoginButton() {
    const { pending } = useFormStatus();
    return <PrimaryButton name={"login_button"} label={!pending ? "Log In" : "Logging in..."} disabled={pending} />
}