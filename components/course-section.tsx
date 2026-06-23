"use client";

const courses = [
  {
    title: "Programming",
    emoji: "💻",
    tint: "from-sky-100 to-sky-200",
  },
  {
    title: "Finance",
    emoji: "🧮",
    tint: "from-violet-100 to-violet-200",
  },
];

export default function CourseSection() {
  const handleCourseClick = (courseTitle: string) => {
    console.log(`Selected course: ${courseTitle}`);
  };

  return (
    <div className="flex-1 px-4 pb-2 pt-3 sm:px-5 sm:pb-3 sm:pt-4">
      <h2 className="font-display text-sm font-semibold text-ink sm:text-base pt-4">
        Your Courses
      </h2>
      <div className="mt-2 flex h-[calc(100%-2rem)] flex-col gap-3 sm:mt-3 sm:flex-row sm:gap-3">
        {courses.map((course) => (
          <button
            key={course.title}
            onClick={() => handleCourseClick(course.title)}
            className="flex flex-1 flex-col rounded-xl bg-slate-50 p-3 shadow-chip transition hover:scale-[1.02] sm:rounded-card"
          >
            <div
              className={`flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-br ${course.tint} text-2xl sm:text-3xl`}
            >
              {course.emoji}
            </div>
            <div className="mt-2 rounded-full bg-pill-active py-1 text-center text-[10px] font-semibold text-white sm:mt-3 sm:py-1.5 sm:text-[11px]">
              {course.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}