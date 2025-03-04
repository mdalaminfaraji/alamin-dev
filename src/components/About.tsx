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
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
