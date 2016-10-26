# analyse

[http://webpack.github.com/analyse](http://webpack.github.com/analyse)


Add webpack-analyse for every build on your continous integration 

just copy `dist/index.html` to your project and create a `webpack-profile.js` with this content:
```js
var webpackProfile = {... /* `webpack --json --profile` output  */ ... }
```

open index.html and you will see webpack-analyse without needing to upload the output

# Example using circle.ci
```sh
# profile your webpack
webpack --profile --json > webpack-profile.json

# create your webpack-profile.js
echo "var webpackProfile = " > $CIRCLE_ARTIFACTS/webpack-profile.js
cat webpack-profile.json >> $CIRCLE_ARTIFACTS/webpack-profile.js

# download index.html
wget https://cdn.rawgit.com/arypurnomoz/analyse/master/dist/index.html -P $CIRCLE_ARTIFACTS

# then you can open your the index.html
