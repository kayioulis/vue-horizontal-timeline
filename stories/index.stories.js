import { boolean, object, text, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { addDecorator } from '@storybook/vue'
import { withA11y } from '@storybook/addon-a11y'

import VueHorizontalTimeline from '../src/components/VueHorizontalTimeline'

addDecorator(withA11y)

export default {
  title: 'VueHorizontalTimeline',
  component: VueHorizontalTimeline,
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'Blue', value: 'blue' },
        { name: 'Green', value: 'green' },
        { name: 'Yellow', value: 'yellow' },
        { name: 'Orange', value: 'orange' },
        { name: 'Red', value: 'red' },
        { name: 'Purple', value: 'purple' },
        { name: 'Black', value: 'black' },
        { name: 'White', value: 'white' }
      ]
    }
  }
}

export const Default = () => {
  const label1 = 'Object 1'
  const defaultValue1 = {
    year: '2019',
    title: 'Title example 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio. Nullam non condimentum orci, a cursus magna. Suspendisse tempor rutrum eros, non pellentesque odio commodo eu. Donec at volutpat enim. Vivamus mattis volutpat urna, sit amet vulputate mauris sollicitudin et. Proin consequat at dolor in sodales. Vestibulum vel porta turpis. Pellentesque sollicitudin justo est, ut dapibus felis luctus mollis. Suspendisse feugiat, metus ut auctor dictum, nulla dui fringilla nisl, a pulvinar ipsum justo non lacus. Integer vestibulum sapien metus, et congue felis efficitur iaculis. Aliquam et mi quis nulla molestie elementum. Vestibulum in nibh nibh.',
    image: 'https://raw.githubusercontent.com/guastallaigor/vue-horizontal-timeline/master/.github/logo.png',
    color: 'red'
  }
  const value1 = object(label1, defaultValue1)

  const label2 = 'Object 2'
  // const defaultValue2 = {
  //   year: '2020',
  //   title: 'Title example 2',
  //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio. Nullam non condimentum orci, a cursus magna. Suspendisse tempor rutrum eros, non pellentesque odio commodo eu. Donec at volutpat enim. Vivamus mattis volutpat urna, sit amet vulputate mauris sollicitudin et. Proin consequat at dolor in sodales. Vestibulum vel porta turpis. Pellentesque sollicitudin justo est, ut dapibus felis luctus mollis. Suspendisse feugiat, metus ut auctor dictum, nulla dui fringilla nisl, a pulvinar ipsum justo non lacus. Integer vestibulum sapien metus, et congue felis efficitur iaculis. Aliquam et mi quis nulla molestie elementum. Vestibulum in nibh nibh.',
  //   image: 'https://raw.githubusercontent.com/guastallaigor/vue-horizontal-timeline/master/.github/logo.png',
  //   color: 'red'
  // }
  const defaultValue2 = {
    year: '2020',
    title: 'Title example 2',
    divider: true
  }
  const value2 = object(label2, defaultValue2)

  const label3 = 'Object 3'
  const defaultValue3 = {
    year: '2021',
    title: 'Title example 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio. Nullam non condimentum orci, a cursus magna. Suspendisse tempor rutrum eros, non pellentesque odio commodo eu. Donec at volutpat enim. Vivamus mattis volutpat urna, sit amet vulputate mauris sollicitudin et. Proin consequat at dolor in sodales. Vestibulum vel porta turpis. Pellentesque sollicitudin justo est, ut dapibus felis luctus mollis. Suspendisse feugiat, metus ut auctor dictum, nulla dui fringilla nisl, a pulvinar ipsum justo non lacus. Integer vestibulum sapien metus, et congue felis efficitur iaculis. Aliquam et mi quis nulla molestie elementum. Vestibulum in nibh nibh.',
    image: 'https://raw.githubusercontent.com/guastallaigor/vue-horizontal-timeline/master/.github/logo.png'
  }
  const value3 = object(label3, defaultValue3)

  const items = [value1, value2, value3]

  return {
    components: { VueHorizontalTimeline },
    methods: { action: action('Card Clicked!') },
    props: {
      items: {
        type: Array,
        default: [...items.map(it => ({ ...it }))]
      },
      item: {
        type: Object,
        default: object('Item selected', {
          title: '',
          content: ''
        })
      },
      itemUniqueKey: {
        type: String,
        default: text('Item unique key', 'title')
      },
      oppositeAttr: {
        type: String,
        default: text('Opposite attribute', 'year')
      },
      titleAttr: {
        type: String,
        default: text('Title attribute', 'title')
      },
      titleCentered: {
        type: Boolean,
        default: boolean('Title centered', true)
      },
      titleClass: {
        type: String,
        default: text('Set title custom class (for this example if you type anything will set the color red)', '')
      },
      titleSubstr: {
        type: Number,
        default: number('Title substring', 18)
      },
      contentAttr: {
        type: String,
        default: text('Content attribute', 'content')
      },
      imageAttr: {
        type: String,
        default: text('Image attribute', 'image')
      },
      contentCentered: {
        type: Boolean,
        default: boolean('Content centered', false)
      },
      contentClass: {
        type: String,
        default: text('Set content custom class (for this example if you type anything will set the color red)', '')
      },
      contentSubstr: {
        type: Number,
        default: number('Content substring', 250)
      },
      minWidth: {
        type: String,
        default: `${number('Timeline min-width', 200)}px`
      },
      minHeight: {
        type: String,
        default: `${number('Timeline min-height', 0)}px`
      },
      timelinePadding: {
        type: String,
        default: `${number('Timeline padding', 0)}px`
      },
      timelineBackground: {
        type: String,
        default: text('Timeline background (hex/rgb)', '#E9E9E9')
      },
      lineColor: {
        type: String,
        default: text('Line color (hex/rgb)', '#03A9F4')
      },
      lineThickness: {
        type: String,
        default: text('Line thickness (px/rem/em/%)', '3px')
      },
      pointSize: {
        type: String,
        default: text('Point Size (px/rem/em/%)', '14px')
      },
      pointColor: {
        type: String,
        default: text('Point color (hex/rgb)', '#e91e63')
      },
      textColor: {
        type: String,
        default: text('Text color (hex/rgb)', '#000000')
      },
      cardTextColorAttr: {
        type: String,
        default: text('Card Text Color attribute', 'color')
      },
      clickable: {
        type: [String, Boolean],
        default: boolean('Clickable', true)
      }
    },
    template: `<vue-horizontal-timeline
      :items="items"
      :item-selected.sync="item"
      :item-unique-key="itemUniqueKey"
      :opposite-attr="oppositeAttr"
      :image-attr="imageAttr"
      :title-centered="titleCentered"
      :title-attr="titleAttr"
      :title-class="titleClass ? 'custom-class' : ''"
      :title-substr="titleSubstr"
      :content-centered="contentCentered"
      :content-attr="contentAttr"
      :content-class="contentClass ? 'custom-class' : ''"
      :content-substr="contentSubstr"
      :min-width="minWidth"
      :min-height="minHeight"
      :timeline-padding="timelinePadding"
      :timeline-background="timelineBackground"
      :line-color="lineColor"
      :line-thickness="lineThickness"
      :point-size="pointSize"
      :point-color="pointColor"
      :text-color="textColor"
      :card-text-color-attr="cardTextColorAttr"
      :clickable="clickable"
      @click="action"
    />`
  }
}

export const Slot = () => {
  const label1 = 'Object 1'
  const defaultValue1 = {
    year: '2019',
    title: 'Title example 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio. Nullam non condimentum orci, a cursus magna. Suspendisse tempor rutrum eros, non pellentesque odio commodo eu. Donec at volutpat enim. Vivamus mattis volutpat urna, sit amet vulputate mauris sollicitudin et. Proin consequat at dolor in sodales. Vestibulum vel porta turpis. Pellentesque sollicitudin justo est, ut dapibus felis luctus mollis. Suspendisse feugiat, metus ut auctor dictum, nulla dui fringilla nisl, a pulvinar ipsum justo non lacus. Integer vestibulum sapien metus, et congue felis efficitur iaculis. Aliquam et mi quis nulla molestie elementum. Vestibulum in nibh nibh.',
    image: 'https://raw.githubusercontent.com/guastallaigor/vue-horizontal-timeline/master/.github/logo.png',
    color: 'red'
  }
  const value1 = object(label1, defaultValue1)

  const label2 = 'Object 2'
  // const defaultValue2 = {
  //   year: '2020',
  //   title: 'Title example 2',
  //   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio. Nullam non condimentum orci, a cursus magna. Suspendisse tempor rutrum eros, non pellentesque odio commodo eu. Donec at volutpat enim. Vivamus mattis volutpat urna, sit amet vulputate mauris sollicitudin et. Proin consequat at dolor in sodales. Vestibulum vel porta turpis. Pellentesque sollicitudin justo est, ut dapibus felis luctus mollis. Suspendisse feugiat, metus ut auctor dictum, nulla dui fringilla nisl, a pulvinar ipsum justo non lacus. Integer vestibulum sapien metus, et congue felis efficitur iaculis. Aliquam et mi quis nulla molestie elementum. Vestibulum in nibh nibh.',
  //   image: 'https://raw.githubusercontent.com/guastallaigor/vue-horizontal-timeline/master/.github/logo.png',
  //   color: 'red'
  // }
  const defaultValue2 = {
    year: '2020',
    divider: true
  }
  const value2 = object(label2, defaultValue2)

  const label3 = 'Object 3'
  const defaultValue3 = {
    year: '2021',
    title: 'Title example 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex dolor, malesuada luctus scelerisque ac, auctor vitae risus. Vivamus risus dolor, faucibus a bibendum quis, facilisis eget odio. Nullam non condimentum orci, a cursus magna. Suspendisse tempor rutrum eros, non pellentesque odio commodo eu. Donec at volutpat enim. Vivamus mattis volutpat urna, sit amet vulputate mauris sollicitudin et. Proin consequat at dolor in sodales. Vestibulum vel porta turpis. Pellentesque sollicitudin justo est, ut dapibus felis luctus mollis. Suspendisse feugiat, metus ut auctor dictum, nulla dui fringilla nisl, a pulvinar ipsum justo non lacus. Integer vestibulum sapien metus, et congue felis efficitur iaculis. Aliquam et mi quis nulla molestie elementum. Vestibulum in nibh nibh.',
    image: 'https://raw.githubusercontent.com/guastallaigor/vue-horizontal-timeline/master/.github/logo.png'
  }
  const value3 = object(label3, defaultValue3)

  const items = [value1, value2, value3]

  return {
    components: { VueHorizontalTimeline },
    methods: { action: action('Card Clicked!') },
    props: {
      items: {
        type: Array,
        default: [...items.map(it => ({ ...it }))]
      },
      item: {
        type: Object,
        default: object('Item selected', {
          title: '',
          content: ''
        })
      },
      itemUniqueKey: {
        type: String,
        default: text('Item unique key', 'title')
      },
      oppositeAttr: {
        type: String,
        default: text('Opposite attribute', 'year')
      },
      titleAttr: {
        type: String,
        default: text('Title attribute', 'title')
      },
      titleCentered: {
        type: Boolean,
        default: boolean('Title centered', true)
      },
      titleClass: {
        type: String,
        default: text('Set title custom class (for this example if you type anything will set the color red)', '')
      },
      titleSubstr: {
        type: Number,
        default: number('Title substring', 18)
      },
      contentAttr: {
        type: String,
        default: text('Content attribute', 'content')
      },
      imageAttr: {
        type: String,
        default: text('Image attribute', 'image')
      },
      contentCentered: {
        type: Boolean,
        default: boolean('Content centered', false)
      },
      contentClass: {
        type: String,
        default: text('Set content custom class (for this example if you type anything will set the color red)', '')
      },
      contentSubstr: {
        type: Number,
        default: number('Content substring', 250)
      },
      minWidth: {
        type: String,
        default: `${number('Timeline min-width', 200)}px`
      },
      minHeight: {
        type: String,
        default: `${number('Timeline min-height', 0)}px`
      },
      timelinePadding: {
        type: String,
        default: `${number('Timeline padding', 0)}px`
      },
      timelineBackground: {
        type: String,
        default: text('Timeline background (hex/rgb)', '#E9E9E9')
      },
      lineColor: {
        type: String,
        default: text('Line color (hex/rgb)', '#03A9F4')
      },
      lineThickness: {
        type: String,
        default: text('Line thickness (px/rem/em/%)', '3px')
      },
      pointSize: {
        type: String,
        default: text('Point Size (px/rem/em/%)', '14px')
      },
      pointColor: {
        type: String,
        default: text('Point color (hex/rgb)', '#e91e63')
      },
      textColor: {
        type: String,
        default: text('Text color (hex/rgb)', '#000000')
      },
      cardTextColorAttr: {
        type: String,
        default: text('Card Text Color attribute', 'color')
      },
      clickable: {
        type: [String, Boolean],
        default: boolean('Clickable', true)
      }
    },
    template: `<vue-horizontal-timeline
      :items="items"
      :item-selected.sync="item"
      :item-unique-key="itemUniqueKey"
      :opposite-attr="oppositeAttr"
      :image-attr="imageAttr"
      :title-centered="titleCentered"
      :title-attr="titleAttr"
      :title-class="titleClass ? 'custom-class' : ''"
      :title-substr="titleSubstr"
      :content-centered="contentCentered"
      :content-attr="contentAttr"
      :content-class="contentClass ? 'custom-class' : ''"
      :content-substr="contentSubstr"
      :min-width="minWidth"
      :min-height="minHeight"
      :timeline-padding="timelinePadding"
      :timeline-background="timelineBackground"
      :line-color="lineColor"
      :line-thickness="lineThickness"
      :point-size="pointSize"
      :point-color="pointColor"
      :text-color="textColor"
      :card-text-color-attr="cardTextColorAttr"
      :clickable="clickable"
      @click="action"
    >
    <div style="font-style:17px;font-weight:bold;">
      <p>Slot text</p>
      <p>Slot text</p>
      <p>Slot text</p>
    </div>
    </vue-horizontal-timeline>`
  }
}
