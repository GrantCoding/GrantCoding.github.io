import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Ecommerce Project",
    description:
      "Multiple API calls generated the user login. A mongoDB added, removed, and listed items within a user's cart. Cart features such as viewcart and checkout were included. Payment details are able to be changed.",
    image: "/Ecommerce Project.png",
    github: "https://github.com/GrantCoding/GrantsEcommerceProject",
    link: "https://github.com/GrantCoding/GrantsEcommerceProject",
  },
  {
    name: "Instant Messenger",
    description:
      "Instant Messenger is a Java project that creates a client and a server for a user to join and communicate on the running server.",
    image: "/Client and server.png",
    github: "https://github.com/GrantCoding/Instant-Messenger",
    link: "https://github.com/GrantCoding/Instant-Messenger",
  },
  {
    name: "Office Space",
    description:
      "Office Space is a WebGL project that utilizes 3d models to simulate an office scene.",
    image: "/Office Space.png",
    github: "https://github.com/GrantCoding/Office-Space",
    link: "https://github.com/GrantCoding/Office-Space",
  },
  {
    name: "ToDoList",
    description:
      "ToDoList is a GUI JavaFX project that allows the user to create and manage tasks whenever necessary. ",
    image: "/ToDoList.png",
    github: "https://github.com/GrantCoding/ToDoListGroupApp",
    link: "https://github.com/GrantCoding/ToDoListGroupApp",
  },

  ]

export default function PortfolioSection() {
    return (
      <section id="projects">
        <h1 className="my-10 text-center font-bold text-4xl">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
  
        <div className="flex flex-col space-y-28">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <SlideUp offset="-300px 0px -300px 0px">
                  <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    </div>
                    <div className="mt-8 md:w-1/2">
                      <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                      <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                      <div className="flex flex-row align-bottom space-x-4">
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                        {/* <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </SlideUp>
              </div>
            )
          })}
          
        </div>
      </section>
    )
  }