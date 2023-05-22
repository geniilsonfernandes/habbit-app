export type Status = 'success' | 'failed' | 'default'

export const statusMap: Record<string, Status> = {
  default: 'success',
  success: 'failed',
  delayed: 'failed',
  failed: 'default',
}
