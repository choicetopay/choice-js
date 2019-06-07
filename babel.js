module.exports = {
  presets: [
    require.resolve('@babel/preset-typescript')
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.ios.js', '.android.js'],
      },
    ],
    require.resolve('@babel/plugin-transform-runtime'),
  ],
}
