"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import projectOneImg from "../../public/project-one.png";
import projectTwoImg from "../../public/project-two.png";
import projectThreeImg from "../../public/project-three.png";
import projectFourImg from "../../public/project-four.png";

const Project = () => {
  return (
    <section className="relative flex flex-col w-full items-center justify-center px-4 py-8 overflow-hidden">
      <h3 className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white sm:text-4xl md:text-5xl md:leading-[5rem] mb-20 text-center sm:max-w-[80vw]">
        A small selection of recent projects
      </h3>

      <div className="flex flex-wrap gap-8 justify-center items-center">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Inventory and Invoice management system
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Developed a full-stack web application for inventory tracking and
              invoice management, designed to streamline business operations and
              improve financial oversight.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={projectOneImg}
                height="1000"
                width="1000"
                className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://sipl-business-erp.vercel.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/iamPankajGhosh/inventory-invoice"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Source code
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Musical Institute UI
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Designed and developed a responsive website for a fictional
              musical institute to showcase courses, while providing an
              intuitive user experience for potential students.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={projectTwoImg}
                height="1000"
                width="1000"
                className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://master-the-art.vercel.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Live now →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/iamPankajGhosh/master-the-art.vercel.app"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Source code
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Secure Speak
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Developed an anonymous feedback web application using NextJs,
              enabling users to provide feedback without revealing their
              identities.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={projectThreeImg}
                height="1000"
                width="1000"
                className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://secure-speak.vercel.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Live now →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/iamPankajGhosh/secure-speak.vercel.app"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Source code
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Siplhub UI
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Developed a professional, dynamic website for an IT company to
              showcase services, portfolio, and team expertise, enhancing online
              presence and client engagement.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={projectFourImg}
                height="1000"
                width="1000"
                className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://siplhub.vercel.app/"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Live now →
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/iamPankajGhosh/siplhub.vercel.app"
                target="__blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Source code
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default Project;
