import { cn } from "@/lib/utils"
import Marquee from "@/components/magicui/marquee"
import Heading from "../Component/Heading"


const reviews = [
    {
        img: "https://rfgul-nine.vercel.app/images/banner-img.png",
        name: "John Doe",
        title: "@johndoe",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        img: "https://dribrar.netlify.app/images/ibrar's%20img.png",
        name: "Dr Ibrar",
        title: "Animal Nutrituionist",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        img: "https://avatar.vercel.sh/jill",
        name: "@johndoe",
        title: "Animal Nutrituionist",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ img, name, title, body }) => {
    return (
        <>
            <figure
                className={cn(
                    "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                    // light styles
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    // dark styles
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                )}
            >
                <div className="flex flex-row items-center gap-2">
                    <img
                        className="rounded-full  object-cover  object-top"
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
                <blockquote className="mt-2 text-sm">{body}</blockquote>

            </figure>
        </>
    );

}




import React from 'react'
import { Button } from "react-scroll"

const Reviews = () => {
    return (
        <div id="testimonials">
            <Heading heading='Testimonials' subHeading={"What People Think about me"} />
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map(review => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map(review => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>


        </div>
    )
}

export default Reviews