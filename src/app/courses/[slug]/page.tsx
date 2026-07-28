import { notFound } from "next/navigation";

import { courses } from "@/data/courses";

import CourseHero from "@/components/course/CourseHero";
import ProgramTracks from "@/components/course/ProgramTracks";
import CertificateSection from "@/components/course/CertificateSection";
import AdmissionSection from "@/components/course/AdmissionSection";
import CourseFAQ from "@/components/course/CourseFAQ";
import FinalCTASection from "@/components/course/FinalCTASection";
import type { Metadata } from "next";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};



export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const course = Object.values(courses).find(
    (c) => c.slug === slug
  );

  if (!course) {
    return {
      title: "Course Not Found | DNDC",
    };
  }

  const title = `${course.name} Course in Bhopal | DNDC`;

  const description = `Learn ${course.name} at DNDC Bhopal with industry experts, live projects, placement assistance, interview preparation, and hands-on practical training.`;

  return {
    title,
    description,

    keywords: [
      `${course.name} Course`,
      `${course.name} Course in Bhopal`,
      `Best ${course.name} Institute in Bhopal`,
      `${course.name} Training`,
      "IT Institute in Bhopal",
      "DNDC",
    ],

    alternates: {
      canonical: `https://dndc.in/courses/${course.slug}`,
    },

    openGraph: {
      title,
      description,
      url: `https://dndc.in/courses/${course.slug}`,
      siteName: "DNDC",
      locale: "en_IN",
      type: "website",

      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${course.name} Course at DNDC`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

export default async function CoursePage({
  params,
}: Props) {
  const { slug } = await params;

  const course = Object.values(courses).find(
  (course) => course.slug === slug
);

  if (!course) {
    notFound();
  }

  const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",

  name: course.name,

  description: course.sub,

  url: `https://dndc.in/courses/${course.slug}`,

  provider: {
    "@type": "EducationalOrganization",
    name: "DNDC",
    url: "https://dndc.in",
  },
};

  return (
    <main className="bg-[#090909] text-white">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(courseSchema),
  }}
/>

      <CourseHero course={course} />
      <ProgramTracks course={course} />
      <CertificateSection course={course} />
      <AdmissionSection course={course} />
      <CourseFAQ course={course} />
      <FinalCTASection
  courseName={course.name}
/>

    </main>
  );
}