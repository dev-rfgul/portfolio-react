import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Heading from "../Component/Heading";
import React, { useState, useEffect } from "react";

const reviews = [
    {
        img: "https://www.upwork.com/profile-portraits/c17y8y2X8X3FRrM4RdA7uXR6-ewmfWFS8mCxezR8abLQRYLzZtVCGNmdMRrPz0EzX0",
        name: "Hassan Raza",
        title: "CEO Bytelogist",
        body: "Fahad is a true professional. Their attention to detail and commitment to quality are unmatched. They were always responsive and willing to go the extra mile to ensure our satisfaction. We highly recommend their services."
    },
    {
        img: "https://avatar.vercel.sh/jill",
        name: "Ayesha Shoaib",
        title: "Web Dev at Codesfix",
        body: "Fahad demonstrates a deep understanding of modern web development frameworks and tools. His sites are responsive, user-friendly, and aesthetically pleasing. Whether custom-built or integrating third-party services, his versatility shines through. What stands out most is the smooth performance across devices, showcasing his attention to detail in both frontend and backend development."
    },
    {
        img: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Sam Patel",
        title: "Content Strategist",
        body: "Fahad consistently delivers exceptional results. His insights and creative ideas transformed our content strategy, leading to increased engagement. Working with him was a pleasure!"
    },
    {
        img: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Linda Johnson",
        title: "Project Manager",
        body: "Fahad is an invaluable asset to our team. His ability to understand project requirements and deliver high-quality work on time is remarkable. I highly recommend him for any web development needs."
    },
    {
        img: "https://randomuser.me/api/portraits/men/4.jpg",
        name: "Andre Lee",
        title: "Business Consultant",
        body: "Fahad exceeded my expectations with his attention to detail and expertise. His solutions are always innovative and tailored to our needs. I cannot recommend him highly enough!"
    },
    {
        img: "https://randomuser.me/api/portraits/women/3.jpg",
        name: "Kate Roberts",
        title: "SEO Specialist",
        body: "Fahad has a keen eye for optimizing websites. His knowledge of SEO best practices greatly improved our site's visibility. A true professional with impressive skills!"
    },
    {
        img: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Michael Smith",
        title: "Tech Lead",
        body: "Working with Fahad has been a transformative experience for our tech team. His technical skills and collaborative spirit greatly enhanced our project outcomes. I look forward to collaborating again!"
    },
    {
        img: "https://dribrar.netlify.app/images/ibrar's%20img.png",
        name: "Dr Ibrar",
        title: "Animal Nutritionist",
        body: "Fahad's work on my portfolio exceeded all exceptions. Not only did he meet my requirements, but he also went above and beyond to create a stunning and effective presentation of my skills and experience. His attention to detail and creative approach resulted in a portfolio that is both visually appealing and professionally polished. I highly recommend Fahad to anyone seeking a top-notch web developer."
    },
    {
        img: "https://randomuser.me/api/portraits/women/5.jpg",
        name: "Sarah Brown",
        title: "UX Designer",
        body: "Fahad's understanding of user experience is exceptional. He transformed our app's interface, making it more intuitive and user-friendly. A true visionary in the tech space!"
    },
    {
        img: "https://randomuser.me/api/portraits/men/6.jpg",
        name: "David Wilson",
        title: "Business Analyst",
        body: "Fahad's insights into our business processes were invaluable. His recommendations led to significant efficiency improvements. I highly value his expertise!"
    }
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const highlightKeywords = (text) => {
    const keywords = ['Fahad', 'recommend', 'working', 'shines', 'talented', 'web', 'website', 'professional','innovative','professional','highly','quality','creative','high','performance','frontend','backend','pleasing','development','skills','project','best'];
    keywords.forEach(keyword => {
        const regex = new RegExp(`(${keyword})`, 'gi');
        text = text.replace(regex, '<strong>$1</strong>');
    });
    return text;
};


const ReviewCard = ({ img, name, title, body }) => {
    const [isHovered, setIsHovered] = useState(false);

    const highlightedBody = highlightKeywords(body);

    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-visible rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex flex-row items-center gap-2">
                <img
                    className="rounded-full object-cover object-top"
                    style={{ width: '60px', height: '60px' }}
                    alt=""
                    src={img}
                />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{title}</p>
                </div>
            </div>
            <blockquote
                className="mt-2 text-sm max-h-96 overflow-auto"
                dangerouslySetInnerHTML={{ __html: isHovered ? highlightedBody : body }} // Use the formatting based on hover state
            />
        </figure>
    );
};


const Reviews = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="testimonials" className="p-4">
            <Heading heading='Testimonials' subHeading={"What People Think about me"} />
            <div className="relative w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                {isLoading ? (
                    <div className="flex items-center justify-center h-32">
                        <p className="text-lg font-semibold dark:text-white">Loading...</p>
                    </div>
                ) : (
                    <>
                        <Marquee pauseOnHover className="[--duration:20s]">
                            {firstRow.map(review => (
                                <ReviewCard key={review.name} {...review} />
                            ))}
                        </Marquee>
                        <Marquee reverse pauseOnHover className="[--duration:20s]">
                            {secondRow.map(review => (
                                <ReviewCard key={review.name} {...review} />
                            ))}
                        </Marquee>
                    </>
                )}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </div>
    );
};

export default Reviews;
