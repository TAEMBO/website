import { notFound, redirect } from "next/navigation";
import { hobbies } from "@/lib";

export default function Page({ params }: { params: { hobby: string } }) {
    const hobby = hobbies.find((x) => x.redirect.slice(1) === params.hobby);

    if (!hobby) return notFound();

    redirect(hobby.destination);
}
