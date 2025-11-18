import { notFound, redirect } from "next/navigation";
import { HOBBIES } from "@/util/constants";

export default async function Page({ params }: { params: Promise<{ hobby: string }> }) {
    const { hobby } = await params;
    const foundHobby = HOBBIES.find((x) => x.redirect.slice(1) === hobby);

    if (!foundHobby) return notFound();

    redirect(foundHobby.destination);
}
