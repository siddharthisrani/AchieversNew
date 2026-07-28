export interface CourseModule {
  t: string;
  d: string;
}

export interface CourseTier {
  name: string;
  duration: string;
  level: string;
  blurb: string;
  modules: CourseModule[];
}

export type CertificateFeatureType =
  | "verification"
  | "projects"
  | "skills"
  | "recognition";

export interface Course {
  slug: string,
  name: string;
  kicker: string;
  category: string;
  titleLines: string[];
  sub: string;

  fee: string;
  emi: string;
  mode: string;
  cohort: string;
  nextBatch: string;
  certificate: {
  title: string;
  subtitle: string;
  issuer: string;
  duration: string;
  validity: string;
  certificateIdPrefix: string;
   features: {
    type: CertificateFeatureType;
    title: string;
    description: string;
  }[];
}

  stack: string[];
  tiers: CourseTier[];
  
}

export type Courses = Record<string, Course>;