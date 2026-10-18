import * as React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageData {
  id: string;
  src: string;
  alt?: string;
}

interface GalleryContextType {
  selectedImage: ImageData | null;
  setSelectedImage: (image: ImageData | null) => void;
  registerImage: (image: ImageData) => void;
  goToRelative: (offset: number) => void;
  canNavigate: boolean;
}

const GalleryContext = React.createContext<GalleryContextType | null>(null);

const spring = {
  type: "spring" as const,
  stiffness: 350,
  damping: 35,
  mass: 1,
};

export function Gallery({ children }: { children: React.ReactNode }) {
  const [selectedImage, setSelectedImage] = React.useState<ImageData | null>(null);
  const [images, setImages] = React.useState<ImageData[]>([]);

  const registerImage = React.useCallback((image: ImageData) => {
    setImages((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === image.id);

      if (existingIndex === -1) return [...prev, image];

      const existing = prev[existingIndex];
      if (existing.src === image.src && existing.alt === image.alt) return prev;

      const next = [...prev];
      next[existingIndex] = image;
      return next;
    });
  }, []);

  const goToRelative = React.useCallback(
    (offset: number) => {
      setSelectedImage((current) => {
        if (!current || images.length < 2) return current;

        const index = images.findIndex((item) => item.id === current.id);
        if (index === -1) return current;

        const nextIndex = (index + offset + images.length) % images.length;
        return images[nextIndex] ?? current;
      });
    },
    [images],
  );

  React.useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        return;
      }

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToRelative(-1);
        return;
      }

      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToRelative(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, goToRelative]);

  React.useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <GalleryContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
        registerImage,
        goToRelative,
        canNavigate: images.length > 1,
      }}
    >
      {children}
      <GalleryModal />
    </GalleryContext.Provider>
  );
}

export function GalleryGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4", className)}>
      {children}
    </div>
  );
}

export function GalleryImage({
  src,
  alt,
  id,
  className,
}: {
  src: string;
  alt?: string;
  id: string;
  className?: string;
}) {
  const context = React.useContext(GalleryContext);
  if (!context) throw new Error("GalleryImage must be used within a Gallery");

  React.useEffect(() => {
    context.registerImage({ id, src, alt });
  }, [context, id, src, alt]);

  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      className={cn(
        "relative mb-4 cursor-zoom-in break-inside-avoid overflow-hidden rounded-2xl border border-border/40 bg-muted",
        className,
      )}
      onClick={(e) => {
        e.stopPropagation();
        context.setSelectedImage({ id, src, alt });
      }}
    >
      <motion.img
        src={src}
        alt={alt ?? "Gallery image"}
        className="h-auto w-full object-cover"
        variants={{
          hover: { scale: 0.985 },
          tap: { scale: 0.97 },
        }}
        transition={spring}
      />

      <motion.div
        variants={{
          hover: { opacity: 1 },
          tap: { opacity: 1 },
        }}
        initial={{ opacity: 0 }}
        className="pointer-events-none absolute inset-0 bg-foreground/10"
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

function GalleryModal() {
  const context = React.useContext(GalleryContext);
  if (!context) return null;

  const { selectedImage, setSelectedImage, goToRelative, canNavigate } = context;

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {selectedImage && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
            onClick={() => setSelectedImage(null)}
          />

          {canNavigate && (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full border border-border/60 bg-background/70 p-2.5 text-foreground backdrop-blur-md transition-colors hover:bg-background"
                onClick={(e) => {
                  e.stopPropagation();
                  goToRelative(-1);
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full border border-border/60 bg-background/70 p-2.5 text-foreground backdrop-blur-md transition-colors hover:bg-background"
                onClick={(e) => {
                  e.stopPropagation();
                  goToRelative(1);
                }}
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div
            className="relative z-10 flex h-full w-full cursor-zoom-out items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              key={selectedImage.id}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.8}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.y) > 100 || Math.abs(info.velocity.y) > 300) {
                  setSelectedImage(null);
                }
              }}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <motion.img
                src={selectedImage.src}
                alt={selectedImage.alt ?? "Selected gallery image"}
                className="h-auto max-h-[90vh] w-auto max-w-[95vw] rounded-2xl border border-white/10 object-contain shadow-2xl will-change-transform"
                draggable={false}
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className="absolute right-6 top-6 z-50 rounded-full border border-border/60 bg-background/70 p-2.5 text-foreground backdrop-blur-md transition-colors hover:bg-background"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </motion.button>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
