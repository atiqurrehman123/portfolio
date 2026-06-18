'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface Project {
  name: string;
  description?: string;
  category?: string;
  link?: string;
  tags?: readonly string[] | string[];
  images?: readonly string[] | string[];
  videos?: readonly string[] | string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: readonly Project[];
  currentProjectIndex: number;
  onProjectChange: (index: number) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  projects,
  currentProjectIndex,
}) => {
  const currentProject = projects[currentProjectIndex];

  if (!isOpen || !currentProject) return null;

  const tags = currentProject.tags || [];
  const images = currentProject.images || [];
  const videos = currentProject.videos || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="project-modal-shell project-modal-scroll relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl border shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="glass sticky top-4 float-right mr-4 rounded-full border border-[var(--border-subtle)] p-2 text-[var(--foreground)] shadow-lg transition-colors hover:border-[var(--accent-2)]/60 hover:text-[var(--accent-2)]"
            >
              <X size={24} />
            </button>

            <div className="p-6 sm:p-8">
              <div className="mb-6">
                {currentProject.category && (
                  <span className="gradient-text text-xs font-bold uppercase tracking-[0.18em]">
                    {currentProject.category}
                  </span>
                )}
                <h2 className="mt-2 mb-4 text-3xl font-black md:text-4xl text-[var(--foreground)]">
                  {currentProject.name}
                </h2>
                {currentProject.description && (
                  <p className="mb-6 text-base text-[var(--foreground)]/70 md:text-lg">
                    {currentProject.description}
                  </p>
                )}

                {currentProject.link && (
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gradient mb-6 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold"
                  >
                    View Live Project
                  </a>
                )}

                {tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-[var(--border-subtle)] bg-[var(--accent-2)]/10 px-3 py-1 text-xs font-semibold text-[var(--accent-2)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Videos */}
              {videos.length > 0 && (
                <div className="mb-8">
                  <h3 className="mb-4 text-2xl font-bold text-[var(--foreground)]">Demo Video</h3>
                  {videos.map((video, i) => (
                    <div
                      key={i}
                      className="mb-4 aspect-video overflow-hidden rounded-xl bg-[var(--surface)]"
                    >
                      <video
                        controls
                        className="h-full w-full"
                        src={video}
                        autoPlay={i === 0}
                        muted
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              )}

              {/* Images */}
              {images.length > 0 && (
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-[var(--foreground)]">Screenshots</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {images.map((image, i) => (
                      <div
                        key={i}
                        className="relative aspect-video overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[var(--surface)]"
                      >
                        <img
                          src={image}
                          alt={`${currentProject.name} screenshot ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
