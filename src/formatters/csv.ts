import { FileDiff } from '@noedel/editcount'

export function csvHeader(): string {
  let columns = [
    'timestamp',
    'hash',
    'filname',
    'additions',
    'deletions',
    'authorEmail',
    'authorName',
    'created',
    'deleted'
  ]
  return `${columns.join(',')}\n`
}

export function csvRow(change: FileDiff): string {
  let columns = [
    change.timestamp,
    change.hash,
    change.filename,
    change.additions,
    change.deletions,
    change.authorEmail,
    change.authorName,
    change.isCreated,
    change.isDeleted
  ]
  return `${columns.join(',')}\n`
}
