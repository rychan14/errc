const path = require('path')
const fs = require('fs')
const webpack = require('webpack')

let nodeModules = {}
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => {nodeModules[mod] = 'commonjs ' + mod})

const common =
  { plugins:
    [ new webpack.optimize.AggressiveMergingPlugin()
    , new webpack.optimize.UglifyJsPlugin(
      { compress:
        { unused: true
        , dead_code: true
        , warnings: false
        }
      , comments: false
      , minimize: false
      } )
    , new webpack.DefinePlugin(
      { 'process.env':
        { 'NODE_ENV': JSON.stringify('production')
        }
      }
    ) ]
  , module:
    { rules:
      [ { test: /\.js$/
        , exclude: '/node_modules/'
        , use:
          [ { loader: 'babel-loader'
            , options:
              { presets:
                [ 'es2015'
                , 'stage-2'
                , 'es2017'
                ]
              }
            }
          ]
        }
      , { test: [/\.html$/]
        , exclude: /node_modules/
        , use:
          [ { loader: 'file-loader'
            , options:
              { name: '[name].[ext]'
              }
            }
          ]
        }
      , { test: [/\.jpg$/]
        , use:
          [ { loader: 'file-loader'
            , options:
              { name: 'assets/[name].[ext]'
              }
            }
          ]
        }
      , { test: /\.css$/
        , use:
          [ { loader: 'style-loader' }
          , { loader: 'css-loader'
            , options:
              { modules: true
              , importLoaders: 1
              , localIdentName: '[local]-[hash:base64:5]'
              }
            }
          ]
        }
      ]
    }
  }

const backend =
  { name: 'backend'
  , entry: [ 'babel-polyfill', './backend/server.js' ]
  , output:
    { path: path.join(__dirname, 'dist/backend')
    , publicPath: 'backend/'
    , filename: 'server.js'
    }
  , externals: nodeModules
  , target: 'node'
 }

const frontend =
  { name: 'frontend'
  , entry:
    [ './frontend/index.js'
    ]
  , output:
    { path: __dirname + '/dist/public'
    // , publicPath: 'public/'
    , filename: 'index.js'
    }
  , resolve:
    { modules: [path.join(__dirname, 'frontend'), 'node_modules']
    }
  }

module.exports =
  [ Object.assign({}, common, backend)
  , Object.assign({}, common, frontend)
  ,
  ]
