import Image from "next/image";
import logo from "@/public/icons/logo.png";
import styles from "./page.module.css"
import LoginForm from "@/components/login/login-form";
export default function Home() {
  return (
      <>
          <div className={styles.logoContainer}>
              <Image className={styles.icon} src={logo} alt={"logo"} width={65} height={65}/>
              <p className={styles.appName}>GenAI</p>
          </div>
          <div className={styles.mainDiv}>
              <main>
                  <LoginForm/>
              </main>
          </div>
      </>
  );
}
