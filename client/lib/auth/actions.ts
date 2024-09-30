"use server"
import "server-only"
import { verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import {lucia, validateRequest} from "@/lib/lucia";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export async function login(_: any, formData: FormData): Promise<any> {
    const username = formData.get("login_username");
    if (
        typeof username !== "string" ||
        username.length < 3 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return {
            error: "Invalid username"
        };
    }
    const password = formData.get("login_password");
    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
        return {
            error: "Invalid password"
        };
    }

    const existingUser = await db`SELECT * FROM auth_user WHERE username = ${username}`
    if (existingUser.length==0) {
        return {
            error: "Incorrect username or password"
        };
    }

    const validPassword = await verify(existingUser[0].password_hash, password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1
    });
    if (!validPassword) {
        return {
            error: "Incorrect username or password"
        };
    }
    console.log("logged in.")
    const session = await lucia.createSession(existingUser[0].id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/dashboard");
}
export async function logout(_:any, formData: FormData): Promise<any> {
    const { session } = await validateRequest();
    if (!session) {
        return {
            error: "Unauthorized"
        };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect("/");
}