import fileStream from '@noedel/editcount'
import { filter } from 'rxjs/operators'
import { Args } from './models'

export default function main(args: Args) {
  fileStream(args)
    .pipe(filter(file => !file.isCreated || !args['no-creations']))
    .pipe(filter(file => !file.isDeleted || !args['no-deletions']))
    .subscribe(
      ({ additions, deletions, filename }) => console.log(`${filename}: +${additions} -${deletions}`),
      console.error.bind(console),
      () => console.log('bye')
    )
}
