"use client"
import LeftNavButton from "@/components/nav/left nav/left-nav-button";
import {MdHome, MdPerson} from "react-icons/md";
import {usePathname} from "next/navigation";
import styles from "./left-nav.module.css";
import {useEffect} from "react";

export default function LeftNav({setState}: {
    setState: any
}): React.ReactNode {
    const pathname = usePathname()

    useEffect(() => {
        setState((val: boolean) => !val)
    }, [pathname])

    return <div className={styles.leftNav}>
        <LeftNavButton to={"/dashboard"} text={"Home"} current={pathname}>
            <MdHome size={22} />
        </LeftNavButton>
        <LeftNavButton to={"/dashboard/patients"} text={"Patients"} current={pathname}>
            <MdPerson size={22} />
        </LeftNavButton>
    </div>

}