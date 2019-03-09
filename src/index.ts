import fileStream from '@noedel/editcount'
import { Args } from './models'

export default function main(args: Args) {
  fileStream(args)
    .subscribe(
      file => console.log('got a file', file.filename),
      console.error.bind(console),
      () => console.log('bye')
    )
}
