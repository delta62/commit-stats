import fileStream from '@noedel/editcount'
import { Observable, concat, from } from 'rxjs'
import { filter, map } from 'rxjs/operators'

import { Args } from './models'
import { csvHeader, csvRow } from './formatters/csv'
import { jsonItem } from './formatters/json'

export default function main(args: Args) {
  let changes = fileStream(args)
    .pipe(filter(file => !file.isCreated || !args['no-creations']))
    .pipe(filter(file => !file.isDeleted || !args['no-deletions']))

  let outputStream: Observable<string>
  if (args.format === 'json') {
    outputStream = concat(
      from([ '[' ]),
      changes.pipe(map(jsonItem)),
      from([ ']' ])
    )
  } else {
    outputStream = concat(
      from([ csvHeader() ]),
      changes.pipe(map(csvRow))
    )
  }

  outputStream
    .subscribe(
      x => process.stdout.write(x),
      console.error.bind(console)
    )
}
