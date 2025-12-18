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
              className="sticky top-4 float-right mr-4 rounded-full bg-card p-2 shadow-lg transition-colors hover:bg-muted"
            >
              <X size={24} />
            </button>

            <div className="p-6 sm:p-8">
              <div className="mb-6">
                {currentProject.category && (
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {currentProject.category}
                  </span>
                )}
                <h2 className="mt-2 mb-4 text-3xl font-black md:text-4xl">
                  {currentProject.name}
                </h2>
                {currentProject.description && (
                  <p className="mb-6 text-base text-muted-foreground md:text-lg">
                    {currentProject.description}
                  </p>
                )}

                {currentProject.link && (
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                  >
                    View Live Project
                  </a>
                )}

                {tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-accent/5 px-3 py-1 text-xs font-semibold text-accent"
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
                  <h3 className="mb-4 text-2xl font-bold">Demo Video</h3>
                  {videos.map((video, i) => (
                    <div
                      key={i}
                      className="mb-4 aspect-video overflow-hidden rounded-xl bg-muted"
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
                  <h3 className="mb-4 text-2xl font-bold">Screenshots</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {images.map((image, i) => (
                      <div
                        key={i}
                        className="relative aspect-video overflow-hidden rounded-xl bg-muted"
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
