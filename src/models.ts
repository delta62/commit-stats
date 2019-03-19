export interface Args {
  cwd: string
  from: string
  to: string
  'no-creations': boolean
  'no-deletions': boolean
  'no-renames': boolean
  format: 'json' | 'csv'
}
