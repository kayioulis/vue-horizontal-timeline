<template>
  <div class="vue-horizontal-timeline" ref="timeline" :style="setTimelineStyles">
    <section class="timeline">
      <ol>
        <li
          v-for="(item, i) in items"
          :key="i"
          :style="setLineStyles"
          :class="{'add-step': $scopedSlots.default || item[titleAttr] || item[contentAttr]}"
        >
          <div
            v-if="$scopedSlots.default || item[titleAttr] || item[contentAttr]"
            class="time"
            :class="getTimeClass(item)"
            :style="getTimeStyles" @click="cardClicked(item)"
          >
            <slot v-if="$scopedSlots.default" v-bind:item="item"/>
            <span
              class="opposite">
              {{ item[oppositeAttr] }}
            </span>
            <img
              class="image"
              v-if="!$scopedSlots.default && item[imageAttr]"
              :src="item[imageAttr]"/>
            <span
              class="title"
              v-if="!$scopedSlots.default && item[titleAttr]"
              :class="getTitleClasses">
              {{ item[titleAttr] | textSubstr(titleSubstr) }}
            </span>
            <span
              class="content"
              v-if="!$scopedSlots.default && item[contentAttr]"
              :class="getContentClasses">
              {{ item[contentAttr] | textSubstr(contentSubstr) }}
            </span>
          </div>
        </li>
        <li :style="setLineStyles"></li>
      </ol>
    </section>
  </div>
</template>

<script>
export default {
  name: 'VueHorizontalTimeline',
  props: {
    items: {
      type: Array,
      required: true
    },
    itemSelected: {
      type: Object,
      default: () => ({})
    },
    itemUniqueKey: {
      type: String,
      default: ''
    },
    oppositeAttr: {
      type: String,
      default: 'year'
    },
    imageAttr: {
      type: String,
      default: 'image'
    },
    titleAttr: {
      type: String,
      default: 'title'
    },
    titleCentered: {
      type: Boolean,
      default: false
    },
    titleClass: {
      type: String,
      default: ''
    },
    titleSubstr: {
      type: Number,
      default: 18
    },
    contentAttr: {
      type: String,
      default: 'content'
    },
    contentCentered: {
      type: Boolean,
      default: false
    },
    contentClass: {
      type: String,
      default: ''
    },
    contentSubstr: {
      type: Number,
      default: 250
    },
    minWidth: {
      type: String,
      default: '200px'
    },
    minHeight: {
      type: String,
      default: ''
    },
    timelinePadding: {
      type: String,
      default: ''
    },
    timelineBackground: {
      type: String,
      default: ''
    },
    lineColor: {
      type: String,
      default: '#03A9F4'
    },
    lineThickness: {
      type: String,
      default: '3px'
    },
    pointSize: {
      type: String,
      default: '14px'
    },
    pointColor: {
      type: String,
      default: '#e91e63'
    },
    textColor: {
      type: String,
      default: '#000000'
    },
    clickable: {
      type: [String, Boolean],
      default: true
    }
  },
  filters: {
    textSubstr (value, qtd = 250, mask = '...') {
      return value && value.length > qtd ? `${value.substring(0, qtd)}${mask}` : value
    }
  },
  computed: {
    setTimelineStyles () {
      const { timelineBackground, timelinePadding } = this
      const styleObj = {}

      if (timelinePadding) {
        styleObj.padding = timelinePadding
      }

      if (timelineBackground) {
        styleObj.background = timelineBackground
      }

      return styleObj
    },
    setLineStyles () {
      const { lineColor, lineThickness } = this

      return `${lineColor ? `background: ${lineColor};` : ''} ${lineThickness ? `height: ${lineThickness};` : ''}`
    },
    getTimeStyles () {
      const { minWidth, minHeight, clickable } = this
      const styleObj = {
        minWidth,
        minHeight
      }

      if (!clickable) {
        styleObj.cursor = 'default'
      }

      return styleObj
    },
    getTitleClasses () {
      const { titleClass, titleCentered } = this

      return titleClass || { 'text-center': titleCentered }
    },
    getContentClasses () {
      const { contentClass, contentCentered } = this

      return contentClass || { 'text-center': contentCentered }
    }
  },
  methods: {
    cardClicked (item) {
      if (!this.clickable) {
        return
      }

      this.$emit('update:itemSelected', { ...item })
      this.$emit('click', item)
    },
    getTimeClass (item) {
      const { itemUniqueKey, itemSelected } = this

      if (itemUniqueKey && itemSelected) {
        return {
          'border-blue': item[itemUniqueKey] === itemSelected[itemUniqueKey]
        }
      }

      return {}
    },
    setCSSVariables () {
      this.$refs.timeline.style.setProperty("--point-size", this.pointSize)
      this.$refs.timeline.style.setProperty("--point-color", this.pointColor)
      this.$refs.timeline.style.setProperty("--text-color", this.textColor)
    }
  },
  mounted () {
    this.setCSSVariables()
  },
  watch: {
    pointSize () {
      this.setCSSVariables()
    },
    pointColor () {
      this.setCSSVariables()
    },
    textColor () {
      this.setCSSVariables()
    }
  }
}
</script>

<style src="../assets/css/style.min.css" scoped></style>
