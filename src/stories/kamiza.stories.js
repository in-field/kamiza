/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import VueInfoAddon from "storybook-addon-vue-info";
import { withMarkdownNotes } from "@storybook/addon-notes";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Kamiza from "../components/Kamiza.vue";
import Kondate from "../components/Kondate";
import Warifu from "../components/Warifu";
import Kenmi from "../components/Kenmi";
import Zendate from "../components/Zendate";
import Daimei from "../components/Daimei";

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
          title: "titleを利用しない場合はDaimeiComponentの初期値が表示されます"
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
        components: { Kondate },
        template: `<kondate :activate="${Activate}"/>`,
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
        components: { Daimei },
        template: `<daimei :activate="${Activate}" title="${Title}"/>`,
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
        components: { Warifu },
        template: `<warifu :activate="${Activate}"/>`,
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
        components: { Kenmi },
        template: `<kenmi :activate="${Activate}"/>`,
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
        components: { Zendate },
        template: `<zendate :activate="${Activate}"/>`,
        propsDescription: {
          activate: "Componentを有効にするフラグ"
        }
      };
    })
  );
