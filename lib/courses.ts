export type Course = {
  slug: string;
  title: string;
  author: string;
  price: string;
  rating: string;
  students: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: string;
  duration: string;
  comments: string;
  category: string;
  image?: string;
  imageFrom?: string;
  imageTo?: string;
  description?: string;
};

export const courses: Course[] = [
  {
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    price: "$25",
    rating: "4.5",
    students: "26+",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    category: "UI/UX Design",
    image: "/images/course-thumb-bigdata.jpg",
    description:
      "A hands-on introduction to Figma covering frames, components, auto layout, and prototyping so you can go from blank canvas to a shareable prototype.",
  },
  {
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    author: "purepearl studio",
    price: "$25",
    rating: "4.5",
    students: "26+",
    level: "Beginner",
    lessons: "14 Lessons",
    duration: "1 hour 48 mins",
    comments: "37 Comments",
    category: "Digital Illustration",
    image: "/images/course-thumb-digital-asset.png",
    description:
      "Learn to design and package digital assets — icon sets, UI kits, and templates — that are ready to sell or ship in a real product.",
  },
  {
    slug: "power-of-big-data",
    title: "the Power of Big Data",
    author: "purepearl studio",
    price: "$25",
    rating: "4.5",
    students: "26+",
    level: "Beginner",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    category: "Data Science",
    image: "/images/course-thumb-bigdata.jpg",
    description:
      "Explore how modern products use data pipelines and dashboards to make decisions, with real chart-reading exercises drawn from live metrics.",
  },
  {
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    author: "purepearl studio",
    price: "$25",
    rating: "4.5",
    students: "26+",
    level: "Beginner",
    lessons: "12 Lessons",
    duration: "1 hour 20 mins",
    comments: "22 Comments",
    category: "Productivity",
    image: "/images/course-thumb-app.jpg",
    description:
      "Practical routines for staying productive without burning out — planning your week, protecting focus time, and building in real rest.",
  },
  {
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    author: "purepearl studio",
    price: "$25",
    rating: "4.5",
    students: "26+",
    level: "Beginner",
    lessons: "15 Lessons",
    duration: "1 hour 55 mins",
    comments: "41 Comments",
    category: "Finance",
    image: "/images/course-thumb-digital-asset.png",
    description:
      "A no-jargon walkthrough of budgeting, saving, and planning ahead, built for freelancers and creators managing irregular income.",
  },
  {
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    price: "$25",
    rating: "4.5",
    students: "26+",
    level: "Intermediate",
    lessons: "20 Lessons",
    duration: "3 hours 05 mins",
    comments: "64 Comments",
    category: "Freelance & Entrepreneurship",
    image: "/images/course-thumb-startup.png",
    description:
      "From validating an idea to shipping a first version, this course walks through the early decisions that make or break a new startup.",
  },
  {
    slug: "mobile-app-marketing-essentials",
    title: "Mobile App Marketing Essentials",
    author: "purepearl studio",
    price: "$29",
    rating: "4.6",
    students: "31+",
    level: "Intermediate",
    lessons: "16 Lessons",
    duration: "2 hours 02 mins",
    comments: "45 Comments",
    category: "Marketing",
    image: "/images/course-thumb-app.jpg",
    description:
      "A practical playbook for launching and marketing a mobile app, from App Store positioning to the first thousand installs.",
  },
  {
    slug: "creative-marketing-for-creators",
    title: "Creative Marketing for Creators",
    author: "purepearl studio",
    price: "$27",
    rating: "4.4",
    students: "19+",
    level: "Beginner",
    lessons: "13 Lessons",
    duration: "1 hour 40 mins",
    comments: "28 Comments",
    category: "Creative Marketing",
    image: "/images/course-thumb-startup.png",
    description:
      "Learn how independent creators build an audience and market their work authentically, without a traditional marketing budget.",
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}
