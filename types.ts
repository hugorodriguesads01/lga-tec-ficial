import { ReactNode } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureProps {
  badge?: string;
  title: string;
  description: string;
  points: { icon: ReactNode; text: string }[];
  imageSide: 'left' | 'right';
  children?: ReactNode; // For the abstract UI illustration
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
}