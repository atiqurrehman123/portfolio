'use client';

import { motion } from 'framer-motion';
import {
  Box,
  Cpu,
  ExternalLink,
  Eye,
  Heart,
  Layers,
  LayoutGrid,
  MessageCircle,
  Mic,
  Monitor,
  PlayCircle,
  ShoppingCart,
  Star,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import { PORTFOLIO_DATA } from './data';

const projectIconMap = {
  Zap,
  Cpu,
  Layers,
  Star,
  ExternalLink,
  Monitor,
} as const;

type ProjectIconKey = keyof typeof projectIconMap;

// Category to icon mapping
const categoryIconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  'E-COMMERCE': ShoppingCart,
  'E-Commerce': ShoppingCart,
  Healthcare: Heart,
  HEALTHCARE: Heart,
  POS: Box,
  'AI / Multimedia': Mic,
  'AI/Multimedia': Mic,
  'SaaS Dashboard': LayoutGrid,
  'SAAS DASHBOARD': LayoutGrid,
  'AI/Generative': MessageCircle,
  'AI-Generative': MessageCircle,
  Enterprise: Monitor,
  'Multi-tenant': Star,
  'Real Estate': ExternalLink,
};

type Project = (typeof PORTFOLIO_DATA.projects)[number] & {
  icon?: ProjectIconKey;
  link?: string;
  images?: readonly string[] | string[];
  videos?: readonly string[] | string[];
};

interface ProjectCardProps {
  project: Project;
  onViewMedia: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewMedia }) => {
  const hasMedia =
    (project.images && project.images.length > 0) ||
    (project.videos && project.videos.length > 0);

  const handleEyeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasMedia) {
      onViewMedia(project);
    }
  };

  // Get category icon
  const CategoryIcon = categoryIconMap[project.category] || Monitor;

  // Get first image for preview
  const previewImage =
    project.images && project.images.length > 0 ? project.images[0] : null;

  // Format technologies: show first 3, then "+X more"
  const technologies = project.tags || [];
  const displayedTechs = technologies.slice(0, 3);
  const remainingCount = Math.max(0, technologies.length - 3);

  const cardContent = (
    <>
      {/* Project Image */}
      {previewImage && (
        <div className="relative h-64 overflow-hidden bg-[var(--surface)]">
          <img
            src={previewImage}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={e => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          {hasMedia && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <PlayCircle size={56} className="text-white/90 drop-shadow-lg" />
            </div>
          )}
        </div>
      )}

      {/* Project Info */}
      <div className="p-6 pb-5">
        <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-[var(--accent-1)]/10 px-4 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--accent-1)]/20 bg-[var(--accent-1)]/10 text-[var(--accent-1)]">
            <CategoryIcon size={18} />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-1)]">
            {project.category}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-bold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--accent-2)]">
          {project.name}
        </h3>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-[var(--foreground)]/65">
          {project.description}
        </p>

        {technologies.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {displayedTechs.map((tech, i) => (
              <span
                key={i}
                className="rounded-full border border-[var(--border-subtle)] bg-[var(--accent-2)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-2)]"
              >
                {tech}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs font-semibold text-[var(--foreground)]/60">
                +{remainingCount}
              </span>
            )}
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => {
              e.stopPropagation();
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-2)] transition-colors hover:opacity-80"
          >
            View Live <ExternalLink size={16} />
          </a>
        )}
      </div>

      {/* Eye button overlay for viewing media explicitly */}
      {hasMedia && (
        <motion.button
          onClick={handleEyeClick}
          className="glass absolute right-4 top-4 inline-flex items-center justify-center rounded-full p-2 text-[var(--accent-2)] opacity-0 ring-1 ring-[var(--border-subtle)] transition-all duration-300 group-hover:opacity-100 group-hover:ring-[var(--accent-2)]/60"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`View ${project.name} media`}
        >
          <Eye size={18} />
        </motion.button>
      )}
    </>
  );

  const handleCardClick = () => {
    onViewMedia(project);
  };

  const cardProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    whileHover: {
      y: -8,
      transition: { duration: 0.3 },
    },
    transition: { duration: 0.45 },
    onClick: handleCardClick,
    className:
      'project-card group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border',
  };

  return <motion.div {...cardProps}>{cardContent}</motion.div>;
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
    const projectIndex = projectsWithMedia.findIndex(
      p => p.name === project.name
    );
    if (projectIndex !== -1) {
      setCurrentProjectIndex(projectIndex);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id={projectsSection.id} className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="gradient-text mb-4 block font-mono text-lg font-bold">
              {projectsSection.number}.
            </span>
            <h2 className="text-4xl font-black md:text-5xl lg:text-6xl text-[var(--foreground)]">
              {projectsSection.title}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
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
          onProjectChange={setCurrentProjectIndex}
        />
      )}
    </>
  );
};
