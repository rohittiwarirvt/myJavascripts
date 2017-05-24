npm install --save-dev webpack webpack-dev-server react-hot-loader
npm install --save-dev babel-core babel-loader
npm install --save-dev babel-preset-es2015 babel-preset-react
npm install --save react react-dom history react-router

 Please add these lines just after where it says "license": "ISC":
add following in package.json
"babel": {
    "presets": [
        "es2015",
        "react"
    ]
}