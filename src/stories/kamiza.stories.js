/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import VueInfoAddon from "storybook-addon-vue-info";
import { withMarkdownNotes } from "@storybook/addon-notes";
import { withKnobs, text } from "@storybook/addon-knobs";

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
      const Title = text("title", "タイトル");
      return {
        components: { Kamiza },
        template: `<kamiza title="${Title}"/>`,
        propsDescription: {
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
      return {
        components: { Kondate },
        template: `<kondate/>`
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
      const Title = text("title", "タイトル");
      return {
        components: { Daimei },
        template: `<daimei title="${Title}"/>`,
        propsDescription: {
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
      return {
        components: { Warifu },
        template: `<warifu/>`
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
      return {
        components: { Kenmi },
        template: `<kenmi/>`
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
      return {
        components: { Zendate },
        template: `<zendate/>`
      };
    })
  );
