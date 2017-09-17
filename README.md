Simple static page builder
=================

This is a repository for a very simple static page, or component, builder. It uses webpack to bundle all the assets, postCSS to properly correct your CSS. The CSS is based on BEM metodologym but you can use what ever suits your needs.

The project uses [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) to serve your files and will reload your page on any asset change, which helps with the development.

## First run

Start by running `npm install` or `npm i`.

## Development

Be sure to have Node LTS version `> 6.9.x`.

The changes are made in the assets folder. Be sure to add any new asset in the appropriate `.js` file in the corresponding asset.

Webpack dev server is used for development purposes. To start it run

```sh
npm run watch
```

The browser should open on `http://localhost:8080`

You can compile the assets using

```sh
npm start
```

## Production

For production build run `npm run build`. Your build will be in `dist/`.

## Adding assets

### Images

### Fonts

### Icons

### Scripts

### Styles

## Notes

Theis project was based on Infinum's [WordPress Boilerplate](https://github.com/infinum/wp-boilerplate), modified for serving static sites, and uses Infinum's [Media Blender](https://github.com/infinum/media-blender). If you want more advanced static pages you can try Infinum's [Static page generator](https://github.com/infinum/generator-infinitely-static).
