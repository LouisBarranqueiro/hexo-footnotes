# hexo-footnotes
[![npm version](https://img.shields.io/npm/v/hexo-footnotes.svg?style=flat-square)](https://www.npmjs.com/package/hexo-footnotes) [![npm dependencies](https://img.shields.io/david/LouisBarranqueiro/hexo-footnotes.svg?style=flat-square)](https://david-dm.org/LouisBarranqueiro/hexo-footnotes#info=dependencies&view=table) [![npm dev dependencies](https://img.shields.io/david/dev/LouisBarranqueiro/hexo-footnotes.svg?style=flat-square)](https://david-dm.org/LouisBarranqueiro/hexo-footnotes#info=devDependencies&view=table) [![travis build status](https://img.shields.io/travis/LouisBarranqueiro/hexo-footnotes/master.svg?style=flat-square)](https://travis-ci.org/LouisBarranqueiro/hexo-footnotes) [![npm download/month](https://img.shields.io/npm/dm/hexo-footnotes.svg?style=flat-square)](https://www.npmjs.com/package/hexo-footnotes) [![npm download/total](https://img.shields.io/npm/dt/hexo-footnotes.svg?style=flat-square)](https://www.npmjs.com/package/hexo-footnotes) [![gitter chat](https://img.shields.io/gitter/room/LouisBarranqueiro/hexo-footnotes.svg?style=flat-square)](https://gitter.im/LouisBarranqueiro/hexo-footnotes)
  
A plugin to support markdown footnotes in your Hexo blog posts

## Installation

```
npm install hexo-footnotes --save
```

If Hexo detect automatically all plugins, that's all.  

If that is not the case, register the plugin in your `_config.yml` file :
```
plugins:
  - hexo-footnotes
```

## Syntax

#### Mardown
```
basic footnote[^1]
here is an inline footnote[^2](inline footnote)
and another one[^3]
and another one[^4]

[^1]: basic footnote content
[^3]: paragraph
footnote
content
[^4]: footnote content with some [markdown](https://en.wikipedia.org/wiki/Markdown)
```
#### Output
![footnotes](https://raw.githubusercontent.com/LouisBarranqueiro/hexo-footnotes/master/screenshot.png?token=AEfNWh_U1kEIyTb8euyeYHgEvmcXxXtrks5XIflWwA%3D%3D)
