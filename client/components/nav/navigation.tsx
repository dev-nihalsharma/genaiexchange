"use client"
import styles from "./navigation.module.css";
import TopNav from "@/components/nav/top nav/top-nav";
import LeftNav from "@/components/nav/left nav/left-nav";
import {useState} from "react";

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)

    return <>
        <div className={styles.topNav}>
            <TopNav menuState={menuOpen} setMenuState={setMenuOpen} />
        </div>
        <div className={menuOpen ? `${styles.leftNav} ${styles.menuOpen}` : styles.leftNav}>
            <LeftNav setState={setMenuOpen}/>
            <div className={styles.bg}></div>
        </div>
    </>
}