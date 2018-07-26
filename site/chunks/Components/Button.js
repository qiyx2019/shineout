/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Button/cn.md'
import en from 'doc/pages/components/Button/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '1-base',
    title: locate('基本用法 \n Button 内置了几种常用的样式，通过 type 来使用', 'Base'),
    component: require('doc/pages/components/Button/example-1-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Button/example-1-base.js'),
  },
  {
    name: '2-outline',
    title: locate('透明背景 \n 添加 outline 属性可以设置为透明背景，type 不能为 default 和 link。', 'Outline'),
    component: require('doc/pages/components/Button/example-2-outline.js').default,
    rawText: require('!raw-loader!doc/pages/components/Button/example-2-outline.js'),
  },
  {
    name: '3-disabled',
    title: locate('不可用 \n 添加 disabled 属性可以禁用按钮。', 'Disabled'),
    component: require('doc/pages/components/Button/example-3-disabled.js').default,
    rawText: require('!raw-loader!doc/pages/components/Button/example-3-disabled.js'),
  },
  {
    name: '4-size',
    title: locate('大小 \n 一共有三种尺寸，[&#39;small&#39;, &#39;default&#39;, &#39;large&#39;]，默认为 &#39;default&#39;', 'Size'),
    component: require('doc/pages/components/Button/example-4-size.js').default,
    rawText: require('!raw-loader!doc/pages/components/Button/example-4-size.js'),
  },
  {
    name: '5-loading',
    title: locate('加载中 \n 设定 loading 属性，可以让按钮变成加载中状态', 'Loading'),
    component: require('doc/pages/components/Button/example-5-loading.js').default,
    rawText: require('!raw-loader!doc/pages/components/Button/example-5-loading.js'),
  },
  {
    name: '6-href',
    title: locate('链接 \n 设置 href 属性，按钮会渲染为 a 标签，同时可以设置 target 属性', 'Link'),
    component: require('doc/pages/components/Button/example-6-href.js').default,
    rawText: require('!raw-loader!doc/pages/components/Button/example-6-href.js'),
  },
  {
    name: '7-icon',
    title: locate('图标 \n 需要图标可以在内容中自行加入', 'Icon'),
    component: require('doc/pages/components/Button/example-7-icon.js').default,
    rawText: require('!raw-loader!doc/pages/components/Button/example-7-icon.js'),
  },
  {
    name: '8-group',
    title: locate('组合 \n 一组 Button 可以用 Button.Group 容器中，按钮样式通过 Button.Gorup 的 size, type, outline 属性设置', 'Group'),
    component: require('doc/pages/components/Button/example-8-group.js').default,
    rawText: require('!raw-loader!doc/pages/components/Button/example-8-group.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
