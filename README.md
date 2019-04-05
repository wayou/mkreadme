<h4 align="center">make a readme file</h4>

<p align="center">
  <a href="https://badge.fury.io/js/mkreadme">
    <img src="https://badge.fury.io/js/mkreadme.svg"
         alt="Gitter">
  </a>
  <a href="https://saythanks.io/to/wayou">
      <img src="https://img.shields.io/badge/SayThanks.io-%E2%98%BC-1EAEDB.svg">
  </a>

</p>

Create a sample README.md file based on [this](https://github.com/wayou/readme-template) template.

## Usage

```sh
$ npx mkreadme [url_for_readme_file]
```

You can optionally specify a sample file to download.

Mostly you may combine this util with some other npx command to generate the essential files to startup a project from scratch, e.g.:

```sh
$ npx license mit > LICENSE && npx mkreadme && npx gitignore node && npx covgen <your_email> && yarn init -y
```

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwayou%2Fmkreadme.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwayou%2Fmkreadme?ref=badge_large)
