export interface Subject {
  id: string;
  courseCode: string;
  name: string;
  department: string;
  description: string;
}

export const mockSubjects: Subject[] = [
  {
    id: "1",
    courseCode: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Fundamentals of computer science including programming basics, algorithms, and computational thinking principles for beginners.",
  },
  {
    id: "2",
    courseCode: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description: "Advanced calculus covering integration techniques, differential equations, and series expansion for applied mathematics and engineering applications.",
  },
  {
    id: "3",
    courseCode: "ENG150",
    name: "Advanced English Literature",
    department: "English",
    description: "In-depth analysis of classic and contemporary literary works, focusing on critical thinking, essay writing, and interpretation techniques.",
  },
];
