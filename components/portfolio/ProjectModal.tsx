"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, ChevronsLeft, ChevronsRight } from "lucide-react";

interface MediaItem {
  type: "image" | "video" | "embed";
  url: string;
}

// Helper function to detect embed URLs
const isEmbedUrl = (url: string): boolean => {
  const embedPatterns = [
    /loom\.com\/embed/i,
    /youtube\.com\/embed/i,
    /youtu\.be/i,
    /vimeo\.com\/\d+/i,
    /vimeo\.com\/embed/i,
  ];
  return embedPatterns.some(pattern => pattern.test(url));
};

// Helper function to convert URLs to embed format
const getEmbedUrl = (url: string): string => {
  // Loom embed URLs are already in the correct format
  if (url.includes('loom.com/embed')) {
    return url;
  }

  // YouTube
  if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
  }

  // Vimeo
  if (url.includes('vimeo.com/')) {
    const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    if (videoId) {
      return `https://player.vimeo.com/video/${videoId}`;
    }
  }

  return url;
};

interface Project {
  name: string;
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
  onProjectChange,
}) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const projectSelectorRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [videoKey, setVideoKey] = useState(0);

  const currentProject = projects[currentProjectIndex];
  const images = currentProject?.images || [];
  const videos = currentProject?.videos || [];

  // Combine images and videos into a single media array
  const mediaItems: MediaItem[] = [
    ...images.map((url) => ({ type: "image" as const, url })),
    ...videos.map((url) => ({
      type: isEmbedUrl(url) ? "embed" as const : "video" as const,
      url
    })),
  ];

  const totalMediaItems = mediaItems.length;
  const totalProjects = projects.length;
  const hasMultipleProjects = totalProjects > 1;

  // Reset media index when project changes or modal opens
  useEffect(() => {
    if (isOpen && currentProject) {
      // Always reset to first media item when project changes
      setCurrentMediaIndex(0);
      setVideoError(null); // Reset video error when changing media
    }
  }, [isOpen, currentProjectIndex]);

  // Reset video error when media changes
  useEffect(() => {
    setVideoError(null);
    setVideoKey(prev => prev + 1); // Force video reload on media change
  }, [currentMediaIndex, currentProjectIndex]);

  // Mouse drag handlers for project selector
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!projectSelectorRef.current) return;
    // Only start drag on left mouse button
    if (e.button !== 0) return;
    setIsDragging(true);
    const rect = projectSelectorRef.current.getBoundingClientRect();
    setStartX(e.pageX - rect.left);
    setScrollLeft(projectSelectorRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Global mouse move handler for smooth dragging
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!projectSelectorRef.current || !isDragging) return;
      e.preventDefault();
      const rect = projectSelectorRef.current.getBoundingClientRect();
      const x = e.pageX - rect.left;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      projectSelectorRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleGlobalMouseMove, { passive: false });
    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.body.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, startX, scrollLeft]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && !e.shiftKey) {
        // Navigate media within project
        goToPreviousMedia();
      } else if (e.key === "ArrowRight" && !e.shiftKey) {
        // Navigate media within project
        goToNextMedia();
      } else if (e.key === "ArrowLeft" && e.shiftKey) {
        // Navigate to previous project
        goToPreviousProject();
      } else if (e.key === "ArrowRight" && e.shiftKey) {
        // Navigate to next project
        goToNextProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentMediaIndex, totalMediaItems, currentProjectIndex, totalProjects]);

  const goToPreviousMedia = () => {
    if (totalMediaItems > 0) {
      setCurrentMediaIndex((prev) => (prev === 0 ? totalMediaItems - 1 : prev - 1));
    }
  };

  const goToNextMedia = () => {
    if (totalMediaItems > 0) {
      setCurrentMediaIndex((prev) => (prev === totalMediaItems - 1 ? 0 : prev + 1));
    }
  };

  const goToPreviousProject = () => {
    if (hasMultipleProjects) {
      const newIndex = currentProjectIndex === 0 ? totalProjects - 1 : currentProjectIndex - 1;
      onProjectChange(newIndex);
    }
  };

  const goToNextProject = () => {
    if (hasMultipleProjects) {
      const newIndex = currentProjectIndex === totalProjects - 1 ? 0 : currentProjectIndex + 1;
      onProjectChange(newIndex);
    }
  };

  const goToMediaSlide = (index: number) => {
    setCurrentMediaIndex(index);
  };

  const goToProject = (index: number) => {
    onProjectChange(index);
  };

  if (!isOpen || !currentProject) return null;

  // Show "Coming Soon" message if no media available
  const showComingSoon = totalMediaItems === 0;

  // Ensure currentMediaIndex is within bounds (only if we have media)
  const safeMediaIndex = showComingSoon ? 0 : Math.min(currentMediaIndex, totalMediaItems - 1);
  const currentMedia = showComingSoon ? null : mediaItems[safeMediaIndex];

  // Update index if it was out of bounds
  if (!showComingSoon && safeMediaIndex !== currentMediaIndex) {
    setCurrentMediaIndex(safeMediaIndex);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] bg-gray-900 rounded-xl overflow-hidden border border-cyan-500/20 shadow-2xl"
            >
              {/* Header */}
              <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    {/* Project Navigation - Previous */}
                    {hasMultipleProjects && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={goToPreviousProject}
                        className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                        aria-label="Previous project"
                        title="Previous project (Shift + ←)"
                      >
                        <ChevronsLeft size={20} />
                      </motion.button>
                    )}

                    <h2 className="text-xl md:text-2xl font-bold text-cyan-400 flex-1">
                      {currentProject.name}
                    </h2>

                    {/* Project Navigation - Next */}
                    {hasMultipleProjects && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={goToNextProject}
                        className="text-gray-400 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-gray-800"
                        aria-label="Next project"
                        title="Next project (Shift + →)"
                      >
                        <ChevronsRight size={20} />
                      </motion.button>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800 ml-4"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Project Selector */}
                {hasMultipleProjects && (
                  <div
                    ref={projectSelectorRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    className={`flex gap-3 overflow-x-auto pb-3 pt-1 select-none ${
                      isDragging ? 'cursor-grabbing' : 'cursor-grab'
                    } [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
                  >
                    {projects.map((project, index) => {
                      const isActive = index === currentProjectIndex;

                      return (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.08, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={(e) => {
                            // Prevent click if we were dragging
                            if (isDragging) {
                              e.preventDefault();
                              return;
                            }
                            goToProject(index);
                          }}
                          onMouseDown={(e) => {
                            // Allow button clicks but prevent drag from starting on button
                            e.stopPropagation();
                          }}
                          className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 backdrop-blur-sm border ${
                            isActive
                              ? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-black border-cyan-400/50 shadow-lg shadow-cyan-400/30 font-semibold"
                              : "bg-gray-800/60 text-gray-300 border-gray-700/50 hover:bg-gray-700/80 hover:border-cyan-500/30 hover:text-cyan-400 hover:shadow-md hover:shadow-cyan-500/10"
                          }`}
                          aria-label={`View ${project.name}`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeProjectChip"
                              className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-cyan-500/20 blur-sm -z-10"
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10">{project.name}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Media Container */}
              <div className={`relative w-full bg-black ${
                hasMultipleProjects
                  ? showComingSoon
                    ? 'h-[65vh] md:h-[75vh] pt-24'
                    : (currentMedia?.type === 'video' || currentMedia?.type === 'embed')
                      ? 'h-[60vh] md:h-[68vh] pt-24 pb-4'
                      : 'h-[65vh] md:h-[75vh] pt-24'
                  : showComingSoon
                    ? 'h-[70vh] md:h-[80vh] pt-20'
                    : (currentMedia?.type === 'video' || currentMedia?.type === 'embed')
                      ? 'h-[65vh] md:h-[72vh] pt-20 pb-4'
                      : 'h-[70vh] md:h-[80vh] pt-20'
              }`}>
                <AnimatePresence mode="wait">
                  {showComingSoon ? (
                    <motion.div
                      key="coming-soon"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full flex items-center justify-center p-8"
                    >
                      <div className="text-center max-w-md">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-400/10 border border-cyan-400/30"
                        >
                          <Play size={40} className="text-cyan-400" />
                        </motion.div>
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-4"
                        >
                          Coming Soon
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-gray-400 text-lg mb-2"
                        >
                          Media content for this project is currently being prepared.
                        </motion.p>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="text-gray-500 text-sm"
                        >
                          Please check back soon!
                        </motion.p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${currentProjectIndex}-${currentMediaIndex}`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                      className={`w-full h-full flex items-center justify-center ${
                        (currentMedia?.type === 'video' || currentMedia?.type === 'embed') ? 'px-2' : ''
                      }`}
                    >
                      {currentMedia?.type === "image" ? (
                      <img
                        src={currentMedia?.url || ''}
                        alt={`${currentProject.name} - Image ${currentMediaIndex + 1}`}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          // Fallback for missing images
                          const target = e.target as HTMLImageElement;
                          target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23111' width='800' height='600'/%3E%3Ctext fill='%23666' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3EImage not found%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    ) : currentMedia?.type === "embed" ? (
                      <iframe
                        src={getEmbedUrl(currentMedia?.url || '')}
                        className="w-full h-full relative z-10"
                        style={{
                          maxHeight: '100%',
                          maxWidth: '100%',
                          border: 'none',
                          borderRadius: '8px'
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`${currentProject.name} - Video ${currentMediaIndex + 1}`}
                      />
                    ) : (
                      <>
                        {videoError ? (
                          <div className="flex flex-col items-center justify-center w-full h-full p-8 text-center">
                            <div className="mb-4 p-4 bg-red-500/10 rounded-full">
                              <Play size={48} className="text-red-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Video Failed to Load</h3>
                            <p className="text-gray-400 text-sm mb-4 max-w-md">
                              The video could not be loaded. This might be due to network issues or an invalid video file.
                            </p>
                            <div className="flex gap-3">
                              <button
                                onClick={() => {
                                  setVideoError(null);
                                  setVideoKey(prev => prev + 1); // Force video reload
                                }}
                                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors text-sm"
                              >
                                Retry
                              </button>
                              {totalMediaItems > 1 && (
                                <button
                                  onClick={goToNextMedia}
                                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm"
                                >
                                  Next Media
                                </button>
                              )}
                            </div>
                          </div>
                        ) : (
                          currentMedia && (
                          <video
                            key={`${currentProjectIndex}-${currentMediaIndex}-${currentMedia?.url || ''}-${videoKey}`}
                            src={currentMedia?.url || ''}
                            controls
                            autoPlay
                            muted
                            playsInline
                            controlsList="nodownload"
                            className="w-full h-full object-contain relative z-10"
                            style={{
                              maxHeight: '100%',
                              maxWidth: '100%',
                              pointerEvents: 'auto'
                            }}
                            onError={(e) => {
                              setVideoError(currentMedia?.url || '');
                            }}
                            onLoadStart={() => {
                              setVideoError(null);
                            }}
                          >
                            Your browser does not support the video tag.
                          </video>
                          )
                        )}
                      </>
                    )}
                  </motion.div>
                  )}
                </AnimatePresence>

                {/* Media Navigation Arrows */}
                {!showComingSoon && totalMediaItems > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={goToPreviousMedia}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all backdrop-blur-sm ${
                        (currentMedia?.type === 'video' || currentMedia?.type === 'embed') ? 'pointer-events-auto' : ''
                      }`}
                      aria-label="Previous media"
                      title="Previous media (←)"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={goToNextMedia}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all backdrop-blur-sm ${
                        (currentMedia?.type === 'video' || currentMedia?.type === 'embed') ? 'pointer-events-auto' : ''
                      }`}
                      aria-label="Next media"
                      title="Next media (→)"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <ChevronRight size={24} />
                    </motion.button>
                  </>
                )}

                {/* Media Type Indicator */}
                {!showComingSoon && currentMedia && (
                  <div className="absolute top-4 right-16 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {currentMedia?.type === "image" ? (
                      <>
                        <ImageIcon size={16} className="text-cyan-400" />
                        <span className="text-xs text-gray-300">Image</span>
                      </>
                    ) : currentMedia?.type === "embed" ? (
                      <>
                        <Play size={16} className="text-cyan-400" />
                        <span className="text-xs text-gray-300">Embed</span>
                      </>
                    ) : (
                      <>
                        <Play size={16} className="text-cyan-400" />
                        <span className="text-xs text-gray-300">Video</span>
                      </>
                    )}
                    <span className="text-xs text-gray-500">
                      {currentMediaIndex + 1} / {totalMediaItems}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation - Below Video */}
              {!showComingSoon && totalMediaItems > 1 && (
                <div className={`relative w-full bg-black/95 p-4 ${
                  (currentMedia?.type === 'video' || currentMedia?.type === 'embed') ? 'pt-2' : ''
                }`}>
                  <div className="flex gap-2 justify-center overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {mediaItems.map((item, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => goToMediaSlide(index)}
                        className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all pointer-events-auto ${
                          index === currentMediaIndex
                            ? "border-cyan-400 scale-110 shadow-lg shadow-cyan-400/50"
                            : "border-gray-700 opacity-60 hover:opacity-100"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        style={{ zIndex: 50 }}
                      >
                        {item.type === "image" ? (
                          <img
                            src={item.url}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                            <Play size={20} className="text-cyan-400" />
                          </div>
                        )}
                        {index === currentMediaIndex && (
                          <motion.div
                            layoutId="activeThumbnail"
                            className="absolute inset-0 border-2 border-cyan-400 rounded-lg"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

