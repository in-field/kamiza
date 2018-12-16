/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import VueInfoAddon from "storybook-addon-vue-info";
import { withMarkdownNotes } from "@storybook/addon-notes";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Kamiza from "../components/Kamiza.vue";
import DrawerMenu from "../components/DrawerMenu";
import Auth from "../components/Auth";
import Search from "../components/Search";
import Setup from "../components/Setup";
import HeaderTitle from "../components/HeaderTitle";

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
      return {
        components: { Kamiza },
        template: `<kamiza :activate="${Activate}" title="${Title}"/>`,
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
