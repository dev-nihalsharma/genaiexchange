"use client"

import styles from "./top-nav.module.css";
import Image from "next/image";
import logo from "@/public/icons/logo.png";
import menu from "@/public/icons/menu.svg";
import cross from "@/public/icons/cross.svg";
import {useFormState} from "react-dom";
import {logout} from "@/lib/auth/actions";
export default function TopNav({menuState, setMenuState}: {
    menuState: boolean,
    setMenuState: any
}):React.ReactNode {
    const [currentResponse, formAction] = useFormState(logout, {message: null})
    console.log(setMenuState)
    return <div className={styles.topNav}>

        <div className={styles.menuContainer}>
            <div onClick={() => setMenuState((v: boolean) => !v)} className={menuState ? `${styles.switcher} ${styles.menuActive}` : styles.switcher}>
                <Image className={styles.iconMenu} src={menu} alt={"open menu"} width={18} height={18}/>
                <Image className={styles.crossMenu} src={cross} alt={"close menu"} width={18} height={18}/>
            </div>
        </div>
        <div className={styles.logoContainer}>
            <Image className={styles.icon} src={logo} alt={"logo"} width={42} height={42} quality={90}/>
            <p className={styles.appName}>GenAI</p>
        </div>
        <form action={formAction} className={styles.logOutContainer}>
            <button type="submit" className={styles.logOut}>
                Log Out
            </button>
        </form>
    </div>
}