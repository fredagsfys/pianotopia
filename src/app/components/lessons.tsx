import { RefObject, useState } from "react";
import { lessons } from "../data/lessons-data";
import LessonDetails, { type Lesson } from "./lesson-details";
import Picture from "./ui/picture";

interface LessonsProps {
  titleRef: RefObject<HTMLHeadingElement | null>;
  scrollToBottom: (timeout: number) => void;
}

export const Lessons = ({ titleRef, scrollToBottom }: LessonsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLesson, setLesson] = useState<Lesson | null>(null);

  const handleEnrol = () => {
    scrollToBottom(500);
  };

  return (
    <section>
      <div className="container mx-auto px-4 xl:px-0">
        <h2
          className="text-4xl font-display font-bold text-center mb-12"
          ref={titleRef}
        >
          Lär dig spela piano på ditt sätt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate-fade-in text-justify">
          {lessons.map((lesson) => (
            <div
              key={lesson.name}
              className="rounded-lg border text-card-foreground shadow-sm overflow-hidden animate-on-scroll group transition-all duration-300 hover:shadow-md bg-white/80 backdrop-blur-sm"
            >
              <div className="flex flex-col space-y-1.5 p-0">
                <div className="overflow-hidden h-56 bg-primary">
                  <Picture
                    src={lesson.image}
                    alt={lesson.name}
                    width={800}
                    height={800}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="opacity-85 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-600 mb-4">
                  {lesson.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-4">
                  {lesson.description}
                </p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button
                  onClick={() => {
                    setLesson(lesson);
                    setIsOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:text-accent-foreground h-10 px-4 py-2 w-full hover:bg-primary/5 transition-colors duration-300"
                >
                  Läs mer
                  {/* Lucide's ChevronRight */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right ml-2 h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Mounted on first open, so the dialog adds nothing to the HTML */}
        {currentLesson && (
          <LessonDetails
            open={isOpen}
            setOpen={setIsOpen}
            lesson={currentLesson}
            onEnrol={handleEnrol}
          />
        )}
      </div>
    </section>
  );
};
