import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "HTML5",
    img: "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png",
  },
  {
    name: "CSS3",
    img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
  },
  {
    name: "Javascript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Typescript",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-3521774-2945272.png",
  },
  {
    name: "Express",
    img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
  },
  {
    name: "NodeJs",
    img: "https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon-thumbnail.png",
  },
  {
    name: "MongoDB",
    img: "https://asset.brandfetch.io/ideyyfT0Lp/idhHZwYUWa.png",
  },
  {
    name: "React",
    img: "https://react.dev/favicon.ico",
  },
  {
    name: "NextJs",
    img: "https://nextjs.org/favicon.ico",
  },
  {
    name: "React Native",
    img: "https://react.dev/favicon.ico",
  },
  {
    name: "Expo",
    img: "https://static.expo.dev/static/brand/square-512x512.png",
  },
  {
    name: "JWT",
    img: "https://cdn.worldvectorlogo.com/logos/jwt-3.svg",
  },
  {
    name: "Postman",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png?f=webp",
  },
  {
    name: "Zod",
    img: "https://seeklogo.com/images/Z/zod-logo-B57E684330-seeklogo.com.png",
  },
  {
    name: "Vite",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative h-30 w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

const TechStackCard = () => {
  return (
    <div className="relative flex h-96 md:h-[30rem] flex-row items-center justify-center overflow-hidden rounded-lg bg-background sm:px-20 md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-stone-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-stone-950"></div>
    </div>
  );
};

export default TechStackCard;
