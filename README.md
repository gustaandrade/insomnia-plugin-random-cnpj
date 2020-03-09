# insomnia-plugin-random-cnpj

A plugin for Insomnia client that generates random and valid CNPJ values, punctuated or not.

![insomnia-plugin-random-cnpj](https://github.com/gustaandrade/insomnia-plugin-random-cnpj/blob/master/example.png)

## About

CNPJ is an identification number issued to Brazilian companies and consists of a 14-digit number formatted as 99.999.999/0001-99, where the first eight digits identify the company, the four digits after the slash identify the branch or subsidiary, and the last two are check digits.

This plugin generates random and valid CNPJ values, punctuated or not, for you to use on Insomnia when creating mock data to your database.

## How to Install

To install this package, you need to go to Insomnia's Preferences screen > Plugins tab and put `insomnia-plugin-random-cnpj` in the `npm-package-name` field and hit Install Plugin.

### Alternate Method

In case something similar happens to issue [#905](https://github.com/Kong/insomnia/issues/905), you can always navigate to the Insomnia plugins folder and install the package manually, using one of the below commands.

```
yarn add insomnia-plugin-random-cnpj
```

```
npm install insomnia-plugin-random-cnpj
```

To get more info on this, read [this comment](https://github.com/Kong/insomnia/issues/905#issuecomment-519472520).

## Built for

[Insomnia](https://insomnia.rest/)

## Author

[Gustavo Andrade (@gustaandrade)](https://gustavoandrade.design)

## Inspiration

[insomnia-plugin-random-cpf by @edicarloslds](https://github.com/edicarloslds/insomnia-plugin-random-cpf)

## License

This project is licensed under the MIT License.
