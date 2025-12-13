export const FRONTEND = [
  {
    id: 'html',
    label: 'HTML',
    color: 'text-orange-600',
    usage: 'frequent',
  },
  {
    id: 'css',
    label: 'CSS',
    color: 'text-blue-500',
    usage: 'frequent',
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    color: 'text-yellow-400',
    usage: 'frequent',
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    color: 'text-blue-600',
    usage: 'frequent',
  },
  {
    id: 'react',
    label: 'React',
    color: 'text-cyan-500',
    usage: 'frequent',
  },
  {
    id: 'nextjs',
    label: 'Next.js',
    color: 'text-gray-800',
    usage: 'frequent',
  },
  {
    id: 'tailwindcss',
    label: 'Tailwind CSS',
    color: 'text-sky-400',
    usage: 'frequent',
  },
] as const;

export const BACKEND = [
  {
    id: 'nodejs',
    label: 'Node.js (Express)',
    color: 'text-green-500',
    usage: 'familiar',
  },
  {
    id: 'spring',
    label: 'Spring',
    color: 'text-[#6DB33F]',
    usage: 'familiar',
  },
  {
    id: 'mysql',
    label: 'MySQL',
    color: 'text-blue-700',
    usage: 'familiar',
  },
  {
    id: 'mongodb',
    label: 'MongoDB',
    color: 'text-green-600',
    usage: 'familiar',
  },
  {
    id: 'python',
    label: 'Python',
    color: 'text-[#3776AB]',
    usage: 'familiar',
  },
] as const;

export const DEVOPS = [
  {
    id: 'linux',
    label: 'Linux (Ubuntu)',
    color: 'text-orange-500',
    usage: 'familiar',
  },
  {
    id: 'aws',
    label: 'AWS (EC2, S3, RDS)',
    color: 'text-orange-600',
    usage: 'familiar',
  },
  {
    id: 'ncp',
    label: 'NCP (Server)',
    color: 'text-green-500',
    usage: 'familiar',
  },
] as const;

export const TOOL = [
  {
    id: 'figma',
    label: 'Figma',
    color: 'text-pink-500',
    usage: 'frequent',
  },
  {
    id: 'git',
    label: 'Git / GitHub',
    color: 'text-red-600',
    usage: 'frequent',
  },
  {
    id: 'jira',
    label: 'Jira',
    color: 'text-[#0052CC]',
    usage: 'frequent',
  },
  {
    id: 'confluence',
    label: 'Confluence',
    color: 'text-[#172B4D]',
    usage: 'frequent',
  },
  {
    id: 'notion',
    label: 'Notion',
    color: 'text-neutral-900',
    usage: 'frequent',
  },
  {
    id: 'slack',
    label: 'Slack',
    color: 'text-[#4A154B]',
    usage: 'frequent',
  },
  {
    id: 'testrail',
    label: 'TestRail',
    color: 'text-slate-700',
    usage: 'familiar',
  },
  {
    id: 'postman',
    label: 'Postman',
    color: 'text-[#FF6C37]',
    usage: 'frequent',
  },
] as const;

export const TESTING = [
  {
    id: 'vitest',
    label: 'Vitest',
    color: 'text-lime-500',
    usage: 'frequent',
    note: '기본 단위 테스트 작성 및 실행 중심. 고급 모킹/설정은 학습 중',
  },
  {
    id: 'jest',
    label: 'Jest',
    color: 'text-rose-500',
    usage: 'familiar',
  }
] as const;

export const TECH = {
  FRONTEND,
  BACKEND,
  DEVOPS,
  TOOL,
  TESTING,
}