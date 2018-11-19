/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import VueInfoAddon from 'storybook-addon-vue-info';
import { withMarkdownNotes } from '@storybook/addon-notes'

import MyButton from "../components/MyButton.vue";

storiesOf("Button", module)
  .addDecorator(VueInfoAddon)
  .add('with text', withMarkdownNotes(`
  # 用途
  - なし
    `)(() => ({
      components: { MyButton },
      template: '<my-button @click="action">Hello Button</my-button>',
      methods: { action: action("clicked") }
    })))
  .add("with JSX", withMarkdownNotes(`
  # 用途
  - なし
    `)(() => ({
    components: { MyButton },
    template: '<my-button @click="action">With JSX</my-button>',
    methods: { action: linkTo("Button", "with some emoji") }
  })))
  .add("with some emoji", withMarkdownNotes(`
  # 用途
  - なし
    `)(() => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action("clicked") }
  })));
