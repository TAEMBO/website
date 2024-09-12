interface Hobby {
    title: string;
    description: string;
    hover: string;
    redirect: string;
    destination: string;
}

export const hobbies: Hobby[] = [
    {
        title: "Hardware",
        description: "I'm into all things PCs and computer hardware",
        hover: "My current PC setup",
        redirect: "/pcpp",
        destination: "https://pcpartpicker.com/user/TAEMBO/saved/6KyJf7",
    },
    {
        title: "Software",
        description: "I'm also passionate about programming",
        hover: "My GitHub",
        redirect: "/github",
        destination: "https://github.com/TAEMBO",
    },
    {
        title: "Chatting",
        description: "I'm frequently found chatting on Discord",
        hover: "My Discord (@taembo)",
        redirect: "/discord",
        destination: "https://discord.com/users/615761944154210305",
    },
];
