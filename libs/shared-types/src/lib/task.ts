export type TaskStatus = 'open' | 'in-progress' | 'done';

export type TaskPriority = 'normal' | 'low' | 'high' | 'critical';

export interface Task {
  readonly title: string;
  readonly status: TaskStatus;
  readonly notes: string;
  readonly priority: TaskPriority;
}
