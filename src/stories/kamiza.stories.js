/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import VueInfoAddon from "storybook-addon-vue-info";
import { withMarkdownNotes } from "@storybook/addon-notes";
import { withKnobs, text, boolean, color } from "@storybook/addon-knobs";

import "../plugins/vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Kamiza from "../components/kamiza/Kamiza.vue";
import DrawerMenu from "../components/kamiza/DrawerMenu";
import Auth from "../components/kamiza/Auth";
import Search from "../components/kamiza/Search";
import Setup from "../components/kamiza/Setup";
import HeaderTitle from "../components/kamiza/HeaderTitle";

storiesOf("Kamiza", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    "with header",
    withMarkdownNotes(`
# Title
  - Knobsの用途
      - 表示させたい文言を入力してください
    `)(() => {
      const Activate = boolean("activate", false);
      const Title = text("title", "タイトル");
      const Color = color("color", "cyan");
      const Dark = text("dark", "");
      return {
        components: { Kamiza },
        template: `<kamiza :activate="${Activate}" title="${Title}" color="${Color}" dark="${Dark}"/>`,
        propsDescription: {
          activate: "Componentを有効にするフラグ",
          title: "titleを利用しない場合はHeaderTitleComponentの初期値が表示されます",
          color: "KamizaComponentのバックグラウンドカラーです",
          dark: "KamizaComponentで利用するComponentの明度(白、黒)の切り替えができます"
        }
      };
    })
  )
  .add(
    "with base",
    withMarkdownNotes(`
# Title
  - Knobsの用途
      - undefined
    `)(() => {
      return {
        components: { Kamiza },
        template: `<kamiza/>`,
        propsDescription: {
          activate: "Componentを有効にするフラグ",
          title:
            "titleを利用しない場合はHeaderTitleComponentの初期値が表示されます"
        }
      };
    })
  )
  .add(
    "with menu",
    withMarkdownNotes(`
# undefined
  - Knobsの用途
      - undefined
    `)(() => {
      const Activate = boolean("activate", false);
      return {
        components: { DrawerMenu },
        template: `<drawer-menu :activate="${Activate}"/>`,
        propsDescription: {
          activate: "Componentを有効にするフラグ"
        }
      };
    })
  )
  .add(
    "with title",
    withMarkdownNotes(`
# Title
  - Knobsの用途
      - 表示させたい文言を入力してください
    `)(() => {
      const Activate = boolean("activate", false);
      const Title = text("title", "タイトル");
      return {
        components: { HeaderTitle },
        template: `<header-title :activate="${Activate}" title="${Title}"/>`,
        propsDescription: {
          activate: "Componentを有効にするフラグ",
          title: "タイトルを表示"
        }
      };
    })
  )
  .add(
    "with auth",
    withMarkdownNotes(`
# undefined
  - Knobsの用途
      - undefined
    `)(() => {
      const Activate = boolean("activate", false);
      return {
        components: { Auth },
        template: `<auth :activate="${Activate}"/>`,
        propsDescription: {
          activate: "Componentを有効にするフラグ"
        }
      };
    })
  )
  .add(
    "with search",
    withMarkdownNotes(`
# undefined
  - Knobsの用途
      - undefined
    `)(() => {
      const Activate = boolean("activate", false);
      return {
        components: { Search },
        template: `<search :activate="${Activate}"/>`,
        propsDescription: {
          activate: "Componentを有効にするフラグ"
        }
      };
    })
  )
  .add(
    "with setting",
    withMarkdownNotes(`
# undefined
  - Knobsの用途
      - undefined
    `)(() => {
      const Activate = boolean("activate", false);
      return {
        components: { Setup },
        template: `<setup :activate="${Activate}"/>`,
        propsDescription: {
          activate: "Componentを有効にするフラグ"
        }
      };
    })
  );
