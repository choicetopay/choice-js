module.exports = {
  presets: ['@babel/typescript'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
}
