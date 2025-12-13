import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaSlack,
  FaAws,
} from 'react-icons/fa';
import {
  RiNextjsFill,
  RiTailwindCssFill,
} from 'react-icons/ri';
import {
  SiSpring,
  SiJira,
  SiConfluence,
  SiNaver,
  SiUbuntu,
  SiNotion,
  SiPostman,
  SiTestrail,
  SiVitest,
  SiJest,
} from 'react-icons/si';
import { IconType } from 'react-icons';

const iconMap: Record<string, IconType> = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  typescript: FaJs,
  react: FaReact,
  nextjs: RiNextjsFill,
  tailwindcss: RiTailwindCssFill,
  nodejs: FaNodeJs,
  spring: SiSpring,
  python: FaPython,
  aws: FaAws,
  ncp: SiNaver,
  ubuntu: SiUbuntu,
  git: FaGitAlt,
  jira: SiJira,
  confluence: SiConfluence,
  postman: SiPostman,
  notion: SiNotion,
  slack: FaSlack,
  testrail: SiTestrail,
  vitest: SiVitest,
  jest: SiJest,
};

interface TechUiProps {
  id: string;
  className?: string;
};

export const TechUi = ({ id, className}: TechUiProps) => {
  const Icon = iconMap[id];
  if (!Icon) return null;
  return <Icon className={className} aria-hidden={true} title={id}/>
};