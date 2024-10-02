import PrimaryButton from "@/components/ui/buttons/primary-button";
import { useFormStatus } from "react-dom"

export default function PatientFormButton() {
    const { pending } = useFormStatus();
    return <PrimaryButton name={"pt_submit"} label={!pending ? "Submit" : "Please wait..."} disabled={pending} />
}