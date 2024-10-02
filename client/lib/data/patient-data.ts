"use server"
import "server-only"
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
const url = process.env.BACKEND_URL;
export interface Patient {
    _id:            string;
    name:           string;
    age:            number;
    dob:            Date;
    gender:         string;
    cancer_type:    string;
    category:       string;
    diagnosis_date: Date;
    treatment_plan: string;
    contact:        string;
}

export type CategoryData = {
    category: string;
    count: number
}[] | [];

export type RecentData = {
    date: string,
    count: number
}[] | [];

export async function getPatients(): Promise<Patient[]> {
    const data = await fetch(url+"/patients", {
        cache: "no-store",
    });
    const res = await data.json();
    return res.patients;
}

export async function getDangerZonePatients(): Promise<Patient[]> {
    const patients = await getPatients()
    return patients.filter((patient: Patient) => patient.category == "critical");
}



export async function getCategoryData(): Promise<CategoryData> {
    const data = await fetch(url+"/data/categories");
    const res = await data.json();
    return res.data;
}

export async function getRecentData(): Promise<RecentData> {
    const data = await fetch(url+"/data/recent");
    const res = await data.json();
    return res.data;
}

export async function newPatient(_: any, formData: FormData): Promise<any> {
    const name = formData.get("pt_name");
    if (typeof name !== "string" || name.length < 3 || name.length > 60) {
        return {
            error: "Invalid name"
        };
    }
    const age = formData.get("pt_age");
    if (typeof age !== "string" || parseInt(age) < 0 || parseInt(age) > 110) {
        return {
            error: "Invalid age"
        };
    }
    const dob = formData.get("pt_dob");
    if (typeof dob !== "string") {
        return {
            error: "Invalid date of birth"
        };
    }
    const gender: any = formData.get("pt_gender")
    if (typeof gender !== "string") {
        if (gender!=="Male" && gender!=="Female") {
            return {
                error: "Invalid gender"
            };
        }
    }
    const phone = formData.get("pt_phone");
    if (typeof phone !== "string" || phone.length < 3 || phone.length > 15) {
        return {
            error: "Invalid phone number"
        };
    }

    const email = formData.get("pt_email");
    if (typeof email !== "string" || email.length < 3 || email.length > 60) {
        return {
            error: "Invalid email"
        };
    }

    const region = formData.get("pt_region");
    if (typeof region !== "string" || region.length < 3 || region.length > 60) {
        return {
            error: "Invalid scan region"
        };
    }

    const report = formData.get("report");
    if (!report) {
        return {
            error: "Invalid report"
        };
    }
    const data = new FormData();
    data.append("name", name);
    data.append("age", age);
    data.append("dob", dob);
    data.append("gender", gender);
    data.append("phone", phone);
    data.append("email", email);
    data.append("cancer_type", region);
    data.append("report", report);

    const res = await fetch(url+"/patients", {
        method: "POST",
        body: data
    });

    console.log(res)

    revalidatePath("/patients");
    redirect("/dashboard/new/processing");
}