Build: [![CircleCI](https://circleci.com/gh/delta62/commit-stats.svg?style=svg)](https://circleci.com/gh/delta62/commit-stats)

# commit-stats

This package exposes a command-line interface to your Git data. Give it a range
of commits and it will print each commit's metadata.

## Installation

`yarn global add @noedel/commit-stats`

or

`npm i -g @noedel/commit-stats`

## Usage

```
commit-stats --from <from-sha> --to <to-sha> [ options ]

Options:
  --version       Show version number                                  [boolean]
  --cwd           The directory to read commits from
                                         [default: "/home/sam/src/commit-stats"]
  --from          The commit after which commits should be considred
                                                             [string] [required]
  --to            The commit at which more commits should be ignored
                                                             [string] [required]
  --no-creations  Omit created files from the output                   [boolean]
  --no-deletions  Omit deleted files from the output                   [boolean]
  --no-renames    Omit renamed files from the output                   [boolean]
  --format        How output should be formatted
                                      [choices: "json", "csv"] [default: "json"]
  --iso           Format dates as ISO8601 instead of timestamps        [boolean]
  --help          Show help                                            [boolean]
```

You can currently choose between JSON and CSV output. If you want to pipe this
data into other node modules, try using the underlying library
[@noedel/editcount](https://github.com/delta62/editcount)
