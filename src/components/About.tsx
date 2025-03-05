"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/constants";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-12 text-gray-300">{personalInfo.about}</p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8">Skills & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {personalInfo.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Badge
                  variant="outline"
                  className="w-full px-3 py-2 text-sm text-white relative rounded-lg border-none bg-[rgba(255,255,255,0.03)]"
                >
                  <div className="relative z-10 flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      {skill.icon && <skill.icon className="w-4 h-4" />}
                      <span>{skill.name}</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#FF0080] to-[#7928CA]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">
                      {skill.percentage}%
                    </span>
                  </div>
                  <span className="absolute inset-0 rounded-lg border-animation" />
                </Badge>
                <style jsx>{`
                  .border-animation {
                    border: 1.5px solid transparent;
                    background: linear-gradient(
                          rgba(3, 0, 20, 0.8),
                          rgba(3, 0, 20, 0.8)
                        )
                        padding-box,
                      linear-gradient(to right, #ff0080, #7928ca, #ff0080)
                        border-box;
                    animation: rotate 3s linear infinite;
                  }
                  @keyframes rotate {
                    0% {
                      background: linear-gradient(
                            rgba(3, 0, 20, 0.8),
                            rgba(3, 0, 20, 0.8)
                          )
                          padding-box,
                        linear-gradient(to right, #ff0080, #7928ca, #ff0080)
                          border-box;
                    }
                    33% {
                      background: linear-gradient(
                            rgba(3, 0, 20, 0.8),
                            rgba(3, 0, 20, 0.8)
                          )
                          padding-box,
                        linear-gradient(to right, #7928ca, #ff0080, #7928ca)
                          border-box;
                    }
                    66% {
                      background: linear-gradient(
                            rgba(3, 0, 20, 0.8),
                            rgba(3, 0, 20, 0.8)
                          )
                          padding-box,
                        linear-gradient(to right, #ff0080, #7928ca, #ff0080)
                          border-box;
                    }
                    100% {
                      background: linear-gradient(
                            rgba(3, 0, 20, 0.8),
                            rgba(3, 0, 20, 0.8)
                          )
                          padding-box,
                        linear-gradient(to right, #7928ca, #ff0080, #7928ca)
                          border-box;
                    }
                  }
                `}</style>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
