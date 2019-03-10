export interface Args {
  cwd: string
  from: string
  to: string
  'no-creations': boolean
  'no-deletions': boolean
  format: 'json' | 'csv'
}
