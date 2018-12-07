/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import VueInfoAddon from "storybook-addon-vue-info";
import { withMarkdownNotes } from "@storybook/addon-notes";
import { withKnobs, text } from "@storybook/addon-knobs";

import Kamiza from "../components/Kamiza.vue";
import Kondate from "../components/Kondate";
import Kenmi from "../components/Kenmi";

storiesOf("Kamiza", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    "with header",
    withMarkdownNotes(`
# Title
  - Knobsの用途
      - headerに表示させたいタイトルを入力してください
    `)(() => {
      const Title = text("title", "タイトル");
      return {
        components: { Kamiza },
        template: `<kamiza title="${Title}"/>`,
        propsDescription: {
          title: "ヘッダーに表示させるタイトル"
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
  );
