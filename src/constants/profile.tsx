// src/constants/profileConstants.ts
import { ProfileData } from "@/types/main";
import { Calendar, Clock, Github, MapPin } from "lucide-react";

// Create the constant with the defined type
export const PROFILE_DATA: ProfileData = {
    name: "Faris Halilovic",
    headline: ["24/7", "REMOTE"],
    avatarSrc: "/assets/images/me.png",
    info: [
        {
            label: "Location",
            value: "Sarajevo 71000, B&H",
            icon: <MapPin />,
        },
        {
            label: "Birth Date",
            value: "July 5, 1999",
            icon: <Calendar />,
        },
        {
            label: "Time Zone",
            value: "UTC/GMT +2",
            icon: <Clock />,
        },
        {
            label: "GitHub",
            value: "FarisHalilovic",
            icon: <Github />,
            link : 'https://github.com/FarisHalilovic'
        },
    ],
};
