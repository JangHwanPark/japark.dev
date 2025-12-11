export const PROJECT_ROLE = ['Frontend', 'Backend', 'Fullstack'];

export const PROJECT_STATUS = [
  'CANCELLED',
  'INPROGRESS',
  'COMPLETED',
] as const;

export type ProjectRole = typeof PROJECT_ROLE[number];
export type ProjectStatus = typeof PROJECT_STATUS[number];