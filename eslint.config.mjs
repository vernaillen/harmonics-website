import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    rules: {
      'vue/multi-word-component-names': 0,
      'vue/no-v-html': 0,
      'vue/no-multiple-template-root': 0,
      'vue/no-setup-props-destructure': 0,
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 3
        },
        multiline: {
          max: 2
        }
      }],
      'no-redeclare': 0,
      'import/named': 0,
      '@stylistic/comma-dangle': ['error', 'only-multiline']
    },
    ignores: [
      'node_modules',
      'dist',
      '.nuxt',
      'coverage',
      'docs'
    ]
  },
)
