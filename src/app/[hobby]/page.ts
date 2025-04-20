import { notFound, redirect } from "next/navigation";
import { HOBBIES } from "@/util/constants";

export default function Page({ params }: { params: { hobby: string } }) {
    const hobby = HOBBIES.find((x) => x.redirect.slice(1) === params.hobby);

    if (!hobby) return notFound();

    redirect(hobby.destination);
}
