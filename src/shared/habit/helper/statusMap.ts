export type Status = 'success' | 'delayed' | 'failed' | 'default'

export const statusMap: Record<string, Status> = {
  default: 'success',
  success: 'delayed',
  delayed: 'failed',
  failed: 'default',
}
