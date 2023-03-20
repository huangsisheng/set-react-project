# srp webpack js template

## Project preparation

### Add dev.server.config.js:

```js
/* 
  Refer: https://webpack.docschina.org/configuration/dev-server/
  example:
*/
module.exports = {
  port: 3000,
  host: "localhost",
  proxy: {
    "/api": {
      target: "https://other-server.example.com",
      changeOrigin: true,
    },
  },
};
```

### Scripts script meaning in packages.json

#### Install project dependencies

```shell
npm install
```

#### Startup project

```shell
npm run dev
```

#### Packaged

```shell
npm run build
```

#### Deployment related environment

```shell
npm run deploy:testing
```

## Developmente specification

### Eslint configuration

[refer](https://eslint.bootcss.com/docs/user-guide/configuring)
