module.exports = api => {

  console.log("running babel configuration...");

  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      { 
        "modules": false ,
        "targets": { "browsers": "last 2 versions" }, 
        "loose": true
      }
    ],
    '@babel/preset-react',
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ];


  if (process.env.NODE_ENV !== 'production') {

    console.log("running babel development plugins...");
    plugins.push('react-hot-loader/babel');
  } else {
    console.log("running babel production plugins...");
  }


  return {
    presets,
    plugins,
  };
};