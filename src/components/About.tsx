"use client";

import { personalInfo } from "@/constants";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Skills & Expertise
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground">
              Here are the technologies and tools I work with
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {personalInfo.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="outline"
                  className="px-3 py-1 text-sm text-white relative rounded-lg border-none bg-[rgba(255,255,255,0.03)]"
                >
                  <span className="relative z-10">{skill}</span>
                  <span className="absolute inset-0 rounded-lg border-animation" />
                </Badge>
                <style jsx>{`
                  .border-animation {
                    border: 1.5px solid transparent;
                    background: linear-gradient(rgba(3,0,20,0.8), rgba(3,0,20,0.8)) padding-box,
                                linear-gradient(to right, #FF0080, #7928CA, #FF0080) border-box;
                    animation: rotate 3s linear infinite;
                  }

                  @keyframes rotate {
                    0% {
                      background: linear-gradient(rgba(3,0,20,0.8), rgba(3,0,20,0.8)) padding-box,
                                linear-gradient(to right, #FF0080, #7928CA, #FF0080) border-box;
                    }
                    33% {
                      background: linear-gradient(rgba(3,0,20,0.8), rgba(3,0,20,0.8)) padding-box,
                                linear-gradient(to right, #7928CA, #FF0080, #7928CA) border-box;
                    }
                    66% {
                      background: linear-gradient(rgba(3,0,20,0.8), rgba(3,0,20,0.8)) padding-box,
                                linear-gradient(to right, #FF0080, #7928CA, #FF0080) border-box;
                    }
                    100% {
                      background: linear-gradient(rgba(3,0,20,0.8), rgba(3,0,20,0.8)) padding-box,
                                linear-gradient(to right, #7928CA, #FF0080, #7928CA) border-box;
                    }
                  }
                `}</style>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
