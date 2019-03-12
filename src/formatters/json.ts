import { FileDiff } from '@noedel/editcount'

export function jsonItem(changes: FileDiff): string {
  return JSON.stringify({
    timestamp: changes.timestamp,
    isCreated: changes.isCreated,
    isDeleted: changes.isDeleted,
    filename: changes.filename,
    additions: changes.additions,
    deletions: changes.deletions,
    hash: changes.hash,
    authorEmail: changes.authorEmail,
    authorName: changes.authorName
  })
}
