import {validateRequest} from "@/lib/lucia";
import {redirect} from "next/navigation";
import {db} from "@/lib/db";
import LeftNav from "@/components/nav/left nav/left-nav";
import styles from "./layout.module.css"
import TopNav from "@/components/nav/top nav/top-nav";
import Navigation from "@/components/nav/navigation";

export default async function DashboardLayout({ children }: {
    children: React.ReactNode;
}): Promise<React.ReactNode> {
    const res = await validateRequest()

    if (!res.user) {
        redirect("/")
    }
    const user = await db`SELECT id,username FROM auth_user WHERE id = ${res.user.id}`

    return <div style={{
        height: "100vh",
        position: "relative"
    }}>
        <Navigation />
        <div className={styles.mainContent}>
            <h1>
                Logged in as: {user[0].username}
            </h1>
            {children}
        </div>
    </div>
}