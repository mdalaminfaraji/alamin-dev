"use client";

import React, { useState } from "react";
import { projects } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLock,
  FaArrowLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { notFound } from "next/navigation";

export default function ProjectDetailsPage({
  params,
}: {
  params: { projectId: string };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectId = parseInt(params.projectId);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  // Convert project images to the format expected by the lightbox
  const lightboxImages =
    project.images?.map((image) => ({
      src: image,
    })) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-900 text-white py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <Link href="/#projects">
          <Button variant="ghost" className="mb-8 flex items-center gap-2">
            <FaArrowLeft />
            Back to Projects
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          {/* Project Header */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              {project.title}
            </h1>
            <p className="text-lg text-gray-300">{project.description}</p>
          </div>

          {/* Main Image + Thumbnails */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-6">
              {/* Main Feature Image */}
              <div
                className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-gray-700"
                onClick={() => {
                  setCurrentImageIndex(0);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-medium">
                    Click to view gallery
                  </span>
                </div>
              </div>

              {/* Image Gallery Thumbnails */}
              {project.images && project.images.length > 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {project.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-md overflow-hidden cursor-pointer border border-gray-700"
                      onClick={() => {
                        setCurrentImageIndex(index + 1);
                        setIsOpen(true);
                      }}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Project Overview */}
              <div className="space-y-6 mt-8">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Overview</h2>
                  <p className="text-gray-300">{project.overview}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Challenges</h2>
                    <p className="text-gray-300">{project.challenges}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Solutions</h2>
                    <p className="text-gray-300">{project.solutions}</p>
                  </div>
                </div>

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-3">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Project Links */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Project Links</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <Button asChild className="w-full justify-between gap-2">
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Live Site
                        <FaExternalLinkAlt className="h-3 w-3" />
                      </Link>
                    </Button>
                  )}

                  {project.githubUrlClient && (
                    <Button
                      variant="outline"
                      asChild
                      className="w-full justify-between gap-2"
                    >
                      <Link
                        href={project.githubUrlClient}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Client Repository
                        <div className="flex items-center">
                          <FaGithub className="h-4 w-4" />
                          {project.isGithubPrivate && (
                            <FaLock className="h-3 w-3 ml-1" />
                          )}
                        </div>
                      </Link>
                    </Button>
                  )}

                  {project.githubUrlServer && (
                    <Button
                      variant="outline"
                      asChild
                      className="w-full justify-between gap-2"
                    >
                      <Link
                        href={project.githubUrlServer}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Server Repository
                        <div className="flex items-center">
                          <FaGithub className="h-4 w-4" />
                          {project.isGithubPrivate && (
                            <FaLock className="h-3 w-3 ml-1" />
                          )}
                        </div>
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary/20 transition-colors text-white"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox for image gallery */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={lightboxImages}
        index={currentImageIndex}
      />
    </div>
  );
}
