"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Zap, Cpu, Layers, Star, Monitor, Eye } from "lucide-react";
import { PORTFOLIO_DATA } from "./data";
import { SectionHeader } from "./SectionHeader";
import { ProjectModal } from "./ProjectModal";

const projectIconMap = {
  Zap,
  Cpu,
  Layers,
  Star,
  ExternalLink,
  Monitor,
} as const;

type ProjectIconKey = keyof typeof projectIconMap;

type Project = (typeof PORTFOLIO_DATA.projects)[number] & {
  link?: string;
  images?: readonly string[] | string[];
  videos?: readonly string[] | string[];
};

interface ProjectCardProps {
  project: Project;
  onViewMedia: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewMedia }) => {
  const Icon = projectIconMap[project.icon as ProjectIconKey] ?? Zap;

  const hasMedia = (project.images && project.images.length > 0) ||
                   (project.videos && project.videos.length > 0);

  // Show eye button for all projects (even without media to show "Coming Soon")
  const showEyeButton = true;

  const handleEyeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasMedia) {
      onViewMedia(project);
    }
  };

  const cardContent = (
    <>
      {/* Animated background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-cyan-500/3 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"
        initial={false}
      />

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: "0 0 40px rgba(34, 211, 238, 0.2)",
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="flex justify-between items-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            whileHover={{
              rotate: [0, -15, 15, -15, 0],
              scale: 1.1
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"
            />
            <Icon size={32} className="text-cyan-400 relative z-10" />
          </motion.div>
          <div className="flex items-center gap-2">
            {showEyeButton && (
              <motion.button
                onClick={handleEyeClick}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-500 group-hover:text-cyan-400 transition-colors relative z-10 p-1 rounded-full hover:bg-cyan-400/10"
                aria-label={`View ${project.name} media`}
                title={hasMedia ? "View project media" : "View project details"}
              >
                <Eye size={20} />
              </motion.button>
            )}
            {project.link && (
              <motion.button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.link, '_blank', 'noopener,noreferrer');
                }}
                whileHover={{
                  scale: 1.3,
                  rotate: 45,
                }}
                className="text-gray-500 group-hover:text-cyan-400 transition-colors relative z-10 p-1 rounded-full hover:bg-cyan-400/10"
                aria-label={`Visit ${project.name}`}
                title="Visit project"
              >
                <ExternalLink size={20} />
              </motion.button>
            )}
          </div>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-cyan-400 transition-colors duration-300"
        >
          {project.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base mb-6 leading-relaxed"
        >
          {project.description}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800 group-hover:border-cyan-400/30 transition-colors duration-300 relative z-10"
      >
        {project.tags.map((tag, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
            whileHover={{
              scale: 1.15,
              backgroundColor: "rgba(34, 211, 238, 0.2)",
              color: "rgb(34, 211, 238)",
            }}
            className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full cursor-pointer transition-all duration-200"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* Click indicator */}
      {project.link && (
        <motion.div
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cyan-400 text-xs font-mono flex items-center gap-1"
        >
          <span>Visit</span>
          <ExternalLink size={12} />
        </motion.div>
      )}
    </>
  );

  const cardProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    whileHover: {
      y: -12,
      scale: 1.02,
      transition: { duration: 0.3 }
    },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.4 },
    className: "project-card border rounded-xl p-6 flex flex-col h-full justify-between transition-all duration-300 cursor-pointer group relative overflow-hidden"
  };

  if (project.link) {
    return (
      <motion.a
        {...cardProps}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${project.name}`}
      >
        {cardContent}
      </motion.a>
    );
  }

  return (
    <motion.div {...cardProps}>
      {cardContent}
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const { sections, projects } = PORTFOLIO_DATA;
  const projectsSection = sections.projects;

  // Include all projects (even those without media) to show "Coming Soon" message
  const projectsWithMedia: readonly Project[] = projects;

  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const handleViewMedia = (project: Project) => {
    // Find the index of the project in the list
    const projectIndex = projectsWithMedia.findIndex((p) => p.name === project.name);
    if (projectIndex !== -1) {
      setCurrentProjectIndex(projectIndex);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleProjectChange = (newIndex: number) => {
    setCurrentProjectIndex(newIndex);
  };

  return (
    <>
      <section id={projectsSection.id} className="bg-[var(--background)] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number={projectsSection.number}
            title={projectsSection.title}
            id={projectsSection.id}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onViewMedia={handleViewMedia}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {projectsWithMedia.length > 0 && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          projects={projectsWithMedia}
          currentProjectIndex={currentProjectIndex}
          onProjectChange={handleProjectChange}
        />
      )}
    </>
  );
};

