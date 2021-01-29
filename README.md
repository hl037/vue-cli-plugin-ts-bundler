# :rocket: vue-cli-plugin-ts-bundler

Zero configuration bundler for your TypeScript library 

## Use case

You create a library component that is compiled in a signle js file, and you want to left the support of TypeScript. 

The plugin allows to generate a single dts file to share your code as external module.

## Features

The plugin is basically a wrapper of [dts-bundle](https://github.com/TypeStrong/dts-bundle). All dts-bundle features are available when using the command. 

And additionally:

- Generate the minimum configuration to build TypeScript library
- Remove all conflicts with dts generating
- Add a `typings` entry in the `package.json`
- Optionally copy the global `.d.ts` to the root as `index.d.ts` to ensure maximum compatibility

## Getting Started

### A new project

If yon don't have a project, create one using `vue create <projectName>`. Choose "Manually select features". Select at least :

```
 ◯ Choose Vue version
 ◉ Babel
 ◉ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◯ Router
 ◯ Vuex
 ◯ CSS Pre-processors
 ◯ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
```

This plugin works with Vue 3, but has not been tested with Vue 2.

### Adding to an existing project

Install the plugin into your project:

```sh
cd my-vue-app
vue add @hl037/ts-bundler
```

The default options should give a working configuration, but you still can adjust it.



## CLI Commands

The plugin adds a `build` command to build the library and generate the declaration for each source, and a `bundle-dts` command to bundle in one file the declaration files generated during build process. If the default option are not modified, then it will also generate an `index.d.ts` at the project root. This is beacuase some typescript build tools won't look at the `typings` entry in the project.json.


```sh
npm/yarn build
npm/yarn bundleDts
```

All supported options you can find here [https://github.com/TypeStrong/dts-bundle](https://github.com/TypeStrong/dts-bundle#options)


## Example of use

- [https://github.com/hl037/vue-contenteditable](https://github.com/hl037/vue-contenteditable)

_Feel free to create an issue if you want to add your project to the list and help others solve their problems on good examples_


## Known caveats

In order for everything to work correctly, there was a need to disable some webpack's loaders:

- `thread-loader` - doesn't allow to write dts files on filesystem;
- `cache-loader` - incorrectly caches __compilerOptions__ passed to `ts-loader`

## License 

MIT

## Authors

Based on a work of Vadim Tiukov 

Patched and reworked by Léo Flaventin Hauchecorne 

