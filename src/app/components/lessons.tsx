import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { lessons } from "../data/lessons-data";
import LessonDetails, { Lesson } from "./lesson-details";
import { Button } from "./ui/button";

interface LessonsProps {
  scrollToBottom: (timeout: number) => void;
}

export const Lessons = ({ scrollToBottom }: LessonsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLesson, setLesson] = useState<Lesson | null>(null);

  const handleEnrol = () => {
    scrollToBottom(500);
  };

  return (
    <section>
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="text-4xl font-display font-bold text-center mb-12">
          Lär dig spela piano på ditt sätt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate-fade-in">
          {lessons.map((lesson) => (
            <Card
              key={lesson.name}
              className="overflow-hidden animate-on-scroll group transition-all duration-300 hover:shadow-md bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="p-0">
                <div className="overflow-hidden h-56 bg-primary">
                  <Image
                    src={lesson.image}
                    alt={lesson.name}
                    width={800}
                    height={800}
                    className="opacity-85 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-600 mb-4">
                  {lesson.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-4">
                  {lesson.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  onClick={() => {
                    setLesson(lesson);
                    setIsOpen(true);
                  }}
                  variant="outline"
                  className="w-full hover:bg-primary/5 transition-colors duration-300"
                >
                  Läs mer
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <LessonDetails
          open={isOpen}
          setOpen={setIsOpen}
          lesson={currentLesson}
          onEnrol={handleEnrol}
        />
      </div>
    </section>
  );
};
