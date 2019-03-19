import { FileDiff } from '@noedel/editcount'
import { Args } from '../models'
import iso from './iso'

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

export function csvRow(args: Args, change: FileDiff): string {
  let columns = [
    args.iso ? iso(change.timestamp) : change.timestamp,
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
