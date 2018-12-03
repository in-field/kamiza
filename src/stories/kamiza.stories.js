/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import VueInfoAddon from "storybook-addon-vue-info";
import { withMarkdownNotes } from "@storybook/addon-notes";
import { withKnobs, select, color, text } from "@storybook/addon-knobs";

import Kamiza from "../components/Kamiza.vue";

storiesOf("Header", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add(
    "with kamiza",
    withMarkdownNotes(`
# Class
  - Knobsの用途
      - 以下の中から適用させる クラス を選択してください
          - Bass
          - None
  
# BackgroundColor
  - Knobsの用途
      - カラーピッカーで好きな 色 に変更してください
  
# Width
  - Knobsの用途
      - auto もしくは 数字 を入力してください
      
# Height
  - Knobsの用途
      - 数字 を入力してください
    `)(() => {
      const label = "Class";
      const options = {
        Base: "base",
        None: null
      };
      const defaultValue = "base";
      const Class = select(label, options, defaultValue);
      const BackgroundColor = color("backgroundColor", "gray");
      const Width = text("width", "auto");
      const Height = text("height", "150px");
      return {
        components: { Kamiza },
        template: `<kamiza class="${Class}" backgroundColor="${BackgroundColor}" width="${Width}" height="${Height}"/>`,
        propsDescription: {
          class: "ヘッダーに適用させるデザインのクラス",
          backgroundColor: "ヘッダーの背景色",
          width: "ヘッダーの幅",
          height: "ヘッダーの高さ"
        }
      };
    })
  );
