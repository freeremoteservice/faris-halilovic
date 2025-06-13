import { ContactInfo, Experience, PersonalInfo, ProjectComplete, ClientReview, Skills, TotalFollowers } from "@/types/main";


// Define constants for data
export const PROJECT_COMPLETE: ProjectComplete = {
    title: "Job Success Score",
    value: 100,
    completedProjects: "Rising Talent",
    description: "Certified by Upwork",
    strokeColor: "#17C964"
};

export const CLIENT_REVIEW: ClientReview = {
    title: "Client Reviews",
    countOfReviews: "20+",
    description: "Completed 30+ Projects",
    imageSrc: "/assets/images/testimonial.png",
    imageAlt: "testimonial"
};

export const TOTAL_FOLLOWERS: TotalFollowers = {
    title: "Total Followers",
    followers: "2.5K",
    imageSrc: "/assets/images/hearts.png",
    imageAlt: "hearts"
};

export const PERSONAL_INFO: PersonalInfo = {
    fullName: "Faris Halilovic",
    headline: [
        "Senior Fullstack Developer",
        "Frontend Developer",
        "Backend Developer",
    ]
};

export const EXPERIENCE: Experience = {
    years: 8,
    label: "y"
};

export const SKILLS: Skills = {
    count: 32
};

export const CONTACT_INFO: ContactInfo[] = [
    {
        src: "/assets/images/upwork.png",
        alt: "Upwork",
        link : "https://www.upwork.com/freelancers/~0125fd36a709940081"
    },
    {
        src: "/assets/images/linkedin.png",
        alt: "Linkedin",
        link : "https://www.linkedin.com/in/faris-halilovic-25681a1b9"
    },
    {
        src: "/assets/images/telegram.png",
        alt: "telegram",
        link : "https://t.me/freeremoteservice"
    },
    {
        src: "/assets/images/teams.png",
        alt: "teams",
        link : "https://teams.live.com/l/invite/FBAz2PHCNX-ctuGBgM",
    }
];
