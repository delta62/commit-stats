import { FileDiff } from '@noedel/editcount'
import { Args } from '../models'
import iso from './iso'

export function jsonItem(args: Args, changes: FileDiff): string {
  return JSON.stringify({
    timestamp: args.iso ? iso(changes.timestamp) : changes.timestamp,
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
