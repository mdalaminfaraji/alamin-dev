"use client";

import { projects } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaLock, FaEye } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl animate-gradient">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              Here are some of my notable projects
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="interactive-card overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">
                          {project.title[0]}
                        </span>
                      </div>
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#FF0080]/20 to-[#7928CA]/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-white">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-white line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-primary/20 transition-colors text-white"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge
                          variant="secondary"
                          className="bg-primary/50 hover:bg-primary/70 transition-colors text-white"
                        >
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <TooltipProvider>
                          {project.githubUrlClient && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-8 w-8 rounded-full"
                                  asChild
                                >
                                  <Link
                                    href={project.githubUrlClient}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Client GitHub Repository"
                                  >
                                    <FaGithub className="h-4 w-4" />
                                    {project.isGithubPrivate && (
                                      <FaLock className="h-2 w-2 absolute top-1 right-1" />
                                    )}
                                  </Link>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-purple-500 text-white">
                                {project.isGithubPrivate
                                  ? "Private Client Repository"
                                  : "Client Repository"}
                              </TooltipContent>
                            </Tooltip>
                          )}

                          {project.githubUrlServer && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-8 w-8 rounded-full"
                                  asChild
                                >
                                  <Link
                                    href={project.githubUrlServer}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Server GitHub Repository"
                                  >
                                    <FaGithub className="h-4 w-4" />
                                    {project.isGithubPrivate && (
                                      <FaLock className="h-2 w-2 absolute top-1 right-1" />
                                    )}
                                  </Link>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-purple-500 text-white">
                                {project.isGithubPrivate
                                  ? "Private Server Repository"
                                  : "Server Repository"}
                              </TooltipContent>
                            </Tooltip>
                          )}

                          {project.liveUrl && (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  className="h-8 w-8 rounded-full"
                                  asChild
                                >
                                  <Link
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Live Demo"
                                  >
                                    <FaExternalLinkAlt className="h-3 w-3" />
                                  </Link>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-purple-500 text-white">
                                Live Demo
                              </TooltipContent>
                            </Tooltip>
                          )}
                        </TooltipProvider>
                      </div>

                      <Link href={`/${project.id}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs flex items-center gap-1 hover:bg-primary/20"
                        >
                          <FaEye className="h-3 w-3" />
                          Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
