module.exports = pkg => {
  const name = pkg.name ? pkg.name : "index"
  return [
    {
      type: 'confirm',
      name: 'buildAsLib',
      message: 'Build project as library? [Yes]',
      default: true,
    },
    {
      type: 'confirm',
      name: 'addExternals',
      message: 'Add vue and vue-property-decorator in externals? [No]',
      description: '!EXPEREMENTAL! It overwrites your vue.config.js and everything outside export will be missed',
      default: false,
      when: answers => answers.lib,
    },
    {
      type: 'input',
      name: 'name',
      message: `Bundle name [${name}]`,
      default : name,
    },
    {
      type: 'input',
      name: 'outputPath',
      message: `Output path [dist]`,
      default : "dist",
    },
    {
      type: 'input',
      name: 'main',
      message: 'Path to entry-point [default src/main.ts]',
    },
    {
      type: 'confirm',
      name: 'removeSource',
      message: 'Delete all source typings (i.e. "<baseDir>/**/*.d.ts")? [No]',
      default: false,
    },
    {
      type: 'confirm',
      name: 'createIndex',
      message: 'Copy the generated .d.ts at the package root as "index.d.ts" [Yes]',
      default: true,
    }
  ]
}
