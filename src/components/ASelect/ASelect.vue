<script setup lang="ts">
import { computed, ref, onMounted, watch, getCurrentInstance } from 'vue'
import {
  sizeProp,
  scrollHeightProp,
  stringProp,
  variantProp,
  booleanProp,
  anyProp,
  anyArrayProp,
  labelFieldProp,
  valueFieldProp,
  groupedOptionsFieldProp,
  groupedLabelFieldProp,
  widthAutoProp,
  booleanOrFunctionProp
} from '../proptypes'

const props = defineProps({
  variant: variantProp, // documented
  clearable: booleanProp, // documented
  labelField: labelFieldProp, // documented
  valueField: valueFieldProp, // documented
  showSearchField: booleanOrFunctionProp, // documented
  floatingLabel: stringProp, // documented
  modelValue: anyProp, // documented
  size: sizeProp, // documented
  isDisabled: booleanOrFunctionProp, // documented
  width: widthAutoProp, //
  options: anyArrayProp, // documented
  placeholder: stringProp, // documented
  autofocus: booleanProp, // documented
  scrollHeight: scrollHeightProp, // documented
  grouped: booleanProp, // documented
  groupedLabelField: groupedLabelFieldProp, // documented
  groupedOptionsField: groupedOptionsFieldProp, // documented
  groupByField: stringProp,
  loading: booleanProp // documented
})

const classes = computed(() => {
  return {
    'a-input': true,
    'a-select': true,
    [`a-${props.variant}`]: true,
    'a-input-is-floating': isFloating.value,
    'a-input-is-disabled':
      (typeof props.isDisabled === 'function'
        ? props.isDisabled(rawValue.value)
        : props.isDisabled) || props.loading,
    'a-loading': props.loading
  }
})

const emit = defineEmits(['update:modelValue', 'aChange', 'blur', 'focus'])

const currentInstance = getCurrentInstance()

const getSortedObjectKey = (obj: any) => {
  let jsonString = ''
  if (Array.isArray(obj)) {
    // If the input is an array, recursively sort its items
    const sortedArr: any = obj.map((item) => getSortedObjectKey(item))
    jsonString = JSON.stringify(sortedArr)
  } else if (typeof obj === 'object' && obj !== null) {
    // If the input is an object, recursively sort its keys and values
    const sortedObj: any = {}
    Object.keys(obj)
      .sort()
      .forEach((key) => {
        sortedObj[key] = getSortedObjectKey(obj[key])
      })
    jsonString = JSON.stringify(sortedObj)
  } else {
    // For other types of input, just return the value
    jsonString = obj
  }

  return jsonString
}

const filterInputEl = ref<HTMLInputElement | null>(null)
const inputParentEl = ref<HTMLInputElement | null>(null)
const inputFieldEl = ref<HTMLInputElement | null>(null)
const scrollEl = ref<HTMLInputElement | null>(null)

const isFocused = ref(false)
const isPlacedTop = ref(false)

const computedScrollHeight = computed(() => {
  return Number(props.scrollHeight || 188)
})

function focus() {
  inputParentEl.value?.focus()
  handleClick()
  emit('focus')
}

// const optionsWithKey = computed();

const isFloating = computed(() => props.modelValue || isFocused.value)

const optionType = computed(() => {
  if (props.grouped) {
    return 'object'
  }
  return typeof props.options[0] === 'object' ? 'object' : 'string'
})

const optionsMap = computed(() => {
  let map: any = {}

  if (props.grouped) {
    // TODO: Need to remove force object type for grouped

    props.options.forEach((group) => {
      // map[getSortedObjectKey(option)] = option;
      const groupLabel = group[props.groupedLabelField]
      const groupedOptions = group[props.groupedOptionsField]

      map[getSortedObjectKey(groupLabel)] = {
        _optionType: 'group-title',
        _label: groupLabel
      }

      groupedOptions.forEach((go: any) => {
        const goObject = typeof go === 'string' ? { _value: go } : go

        let goLabel = go

        if (props.labelField && typeof props.labelField === 'string') {
          goLabel = go[props.labelField]
        } else if (props.labelField && typeof props.labelField === 'function') {
          goLabel = props.labelField(go)
        }

        if (props.valueField) {
          if (typeof props.valueField === 'function') {
            map[getSortedObjectKey(props.valueField(go))] = {
              ...goObject,
              _label: goLabel
            }
          } else {
            map[getSortedObjectKey(go[props.valueField])] = {
              ...goObject,
              _label: goLabel
            }
          }
        } else {
          map[getSortedObjectKey(go)] = { ...goObject, _label: goLabel }
        }
      })
    })
  } else if (optionType.value === 'string') {
    props.options.forEach((option) => {
      map[getSortedObjectKey(option)] = option
    })
  } else {
    props.options.forEach((option) => {
      const label =
        typeof props.labelField === 'string' ? option[props.labelField] : props.labelField(option)
      if (props.valueField) {
        if (typeof props.valueField === 'function') {
          map[getSortedObjectKey(props.valueField(option))] = {
            ...option,
            _label: label
          }
        } else {
          map[getSortedObjectKey(option[props.valueField])] = {
            ...option,
            _label: label
          }
        }
      } else {
        map[getSortedObjectKey(option)] = { ...option, _label: label }
      }
    })
  }

  return map
})

const filteredKeys = computed(() => {
  if (!filterText.value) {
    return Object.keys(optionsMap.value)
  }

  return Object.keys(optionsMap.value).filter((key) => {
    if (optionType.value === 'string') {
      return optionsMap.value[key].toLowerCase().indexOf(filterText.value.toLowerCase()) > -1
    } else {
      return (
        optionsMap.value[key]._label.toLowerCase().indexOf(filterText.value.toLowerCase()) > -1 ||
        optionsMap.value[key]._optionType === 'group-title'
      )
    }
  })
})

function handleClick() {
  isFocused.value = !isFocused.value
  const el: HTMLElement = inputFieldEl.value!!
  const viewportOffset: any = inputFieldEl.value?.getBoundingClientRect()
  const top = viewportOffset.top
  const availableBottomSpace = innerHeight - top - el.offsetHeight
  isPlacedTop.value = availableBottomSpace < Number(props.scrollHeight)
}

function handleBlur(e: Event) {
  setTimeout(() => {
    if (!inputParentEl.value?.contains(document.activeElement)) {
      isFocused.value = false
    }
    emit('blur')
  }, 111)
}

function handleFilterBlur() {
  inputParentEl.value?.focus()
}

function handleDropdownClick(e: Event) {
  e.stopPropagation()
}

function updateValue(option: any) {
  if (option._optionType === 'group-title') {
    return
  }

  inputParentEl.value?.focus()

  let toEmit = option

  if (option && option._value) {
    toEmit = option._value
  } else if (optionType.value === 'object') {
    if (props.valueField) {
      if (typeof props.valueField === 'function') {
        toEmit = props.valueField(option)
      } else {
        toEmit = option[props.valueField]
      }
    } else {
      toEmit = { ...option }
      delete toEmit._key
      delete toEmit._label
    }
  }

  emit('update:modelValue', toEmit)

  emit('aChange', option)
  isFocused.value = !isFocused.value
  resetFilter()
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    hoverIndex.value = hoverIndex.value < filteredKeys.value.length - 1 ? hoverIndex.value + 1 : 0
    if (optionsMap.value[filteredKeys.value[hoverIndex.value]]._optionType === 'group-title') {
      hoverIndex.value = hoverIndex.value < filteredKeys.value.length - 1 ? hoverIndex.value + 1 : 0
    }
    scrollIntoView()
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    hoverIndex.value = hoverIndex.value > 0 ? hoverIndex.value - 1 : filteredKeys.value.length - 1
    if (optionsMap.value[filteredKeys.value[hoverIndex.value]]._optionType === 'group-title') {
      hoverIndex.value = hoverIndex.value > 0 ? hoverIndex.value - 1 : filteredKeys.value.length - 1
    }
    scrollIntoView()
  } else if (e.key === 'Enter') {
    if (hoverIndex.value > -1) {
      updateValue(optionsMap.value[filteredKeys.value[hoverIndex.value]])
    } else {
      isFocused.value = !isFocused.value
    }
  } else if (e.code.startsWith('Key') || e.code.startsWith('Digit')) {
    setTimeout(() => {
      if (!filterText.value) {
        filterText.value = e.key
      }
    }, 0)
    setTimeout(() => {
      filterInputEl.value?.focus()
    }, 0)
  }
}

function scrollIntoView() {
  setTimeout(() => {
    const hoveredElement: HTMLElement | null = document.querySelector(
      `#a-option` + currentInstance?.uid + hoverIndex.value
    )

    var parentRect: any = scrollEl.value?.getBoundingClientRect()
    // What can you see?
    var parentViewableArea = {
      height: scrollEl.value?.clientHeight,
      width: scrollEl.value?.clientWidth
    }

    // Where is the child
    var childRect: any = hoveredElement?.getBoundingClientRect()
    // Is the child viewable?
    var isViewable =
      childRect.top >= parentRect.top &&
      childRect.bottom <= parentRect.top + parentViewableArea.height

    // if you can't see the child try to scroll parent
    if (!isViewable) {
      // Should we scroll using top or bottom? Find the smaller ABS adjustment
      const scrollTop = childRect.top - parentRect.top
      const scrollBot = childRect.bottom - parentRect.bottom
      if (Math.abs(scrollTop) < Math.abs(scrollBot)) {
        // we're near the top of the list
        scrollEl.value!!.scrollTop += scrollTop
      } else {
        // we're near the bottom of the list
        scrollEl.value!!.scrollTop += scrollBot
      }
    }
  }, 111)
}

onMounted(() => {
  if (props.autofocus) {
    focus()
  }
})

const hoverIndex = ref(-1)
const filterText = ref('')

watch(filterText, (currentValue: string, oldValue: string) => {
  hoverIndex.value = -1
})

function resetFilter() {
  filterText.value = ''
}

function clearValue(e: Event) {
  e.stopPropagation()
  emit('update:modelValue', '')
  emit('aChange', {})
}

const floatingStyle = computed(() => {
  if (!inputFieldEl.value || !inputParentEl.value) {
    return {}
  }
  if (!isFloating.value) {
    return {
      top: inputFieldEl.value?.offsetTop! + 'px',
      left: inputFieldEl.value?.offsetLeft! + 'px',
      height: inputFieldEl.value?.clientHeight! + 'px'
    }
  } else {
    return {
      top: `var(--floating-pos-top, -1.5em)`,
      left: `var(--floating-pos-left, 0.15em)`,
      zIndex: '1'
    } as any
  }
})

const rawValue = computed(() => {
  if (optionType.value === 'string' || !props.modelValue) {
    return props.modelValue
  }

  const activeKey = getSortedObjectKey(props.modelValue)

  return optionsMap.value[activeKey]
})

defineExpose({
  clearValue,
  isFocused,
  focus,
  blur: handleBlur
})
</script>

<template>
  <div
    :class="classes"
    :style="{ width: width || 'auto', fontSize: `${size || 16}px` }"
    ref="inputParentEl"
    aria-label="Select Box"
    tabindex="-1"
    role="listbox"
    @blur="handleBlur"
    @click="handleClick"
    @keydown="handleKeydown"
    :aria-activedescendant="'a-option' + $.uid + hoverIndex"
  >
    <span class="a-fl-label" v-if="floatingLabel" :style="floatingStyle">
      {{ floatingLabel }}
    </span>
    <slot name="prepend"></slot>
    <div ref="inputFieldEl" class="a-input-field a-select-field">
      <div v-if="modelValue && rawValue">
        <slot name="selected" :selectedOption="rawValue">
          {{ optionType === 'string' ? rawValue : rawValue._label }}
        </slot>
      </div>

      <div v-else-if="!floatingLabel" class="a-placeholder">
        {{ placeholder }}
      </div>
    </div>

    <slot name="append"></slot>

    <div
      class="a-icon-close a-action-btn"
      v-if="clearable && modelValue"
      @click.prevent="clearValue"
    ></div>

    <div class="a-icon-chevron-down a-action-btn" :class="{ 'a-rotated-180': isFocused }"></div>

    <Transition name="dropdown">
      <div
        class="a-select-dropdown"
        v-show="isFocused"
        :class="{ 'a-select-dropdown-top': isPlacedTop }"
        @click="handleDropdownClick"
      >
        <div
          class="a-select-filter d-flex ai-center jc-between"
          v-if="
            filterText ||
            (typeof showSearchField === 'function' ? showSearchField(rawValue) : showSearchField)
          "
        >
          <div class="a-icon-search a-select-search-icon"></div>
          <input
            type="text"
            placeholder="Search"
            class="a-select-filter-input flex-1"
            v-model="filterText"
            @blur="handleFilterBlur"
            ref="filterInputEl"
          />
        </div>

        <div
          class="a-select-dropdown-fixed"
          ref="scrollEl"
          :style="{ maxHeight: computedScrollHeight + `px` }"
        >
          <template v-if="optionType === 'string'">
            <div
              v-for="(key, i) in filteredKeys"
              :id="`a-option` + $.uid + i"
              :key="key"
              class="a-select-option"
              :class="{
                'a-select-option-active': modelValue === optionsMap[key],
                'a-select-option-hovered': hoverIndex === i
              }"
              @mouseover="hoverIndex = i"
              @mouseleave="hoverIndex = -1"
              @click="updateValue(optionsMap[key])"
              role="option"
              tabindex="0"
              :aria-selected="modelValue === optionsMap[key]"
            >
              <slot name="option" :option="optionsMap[key]">
                {{ optionsMap[key] }}
              </slot>
            </div>
          </template>

          <template v-else>
            <div
              v-for="(key, i) in filteredKeys"
              :id="`a-option` + $.uid + i"
              :key="key"
              class="a-select-option"
              :class="{
                'a-select-option-active': rawValue == optionsMap[key],
                'a-select-option-hovered': hoverIndex === i,
                'a-select-option-grouped':
                  (props.grouped || props.groupByField) &&
                  optionsMap[key]._optionType !== `group-title`,
                'a-select-option-grouped-title': optionsMap[key]._optionType === `group-title`
              }"
              @click="updateValue(optionsMap[key])"
              @mouseover="hoverIndex = i"
              tabindex="0"
              @mouseleave="hoverIndex = -1"
              role="option"
              :aria-selected="rawValue == optionsMap[key]"
            >
              <div v-if="optionsMap[key]._optionType === `group-title`">
                {{ optionsMap[key]._label }}
              </div>
              <slot name="option" :option="optionsMap[key]" v-else>
                {{ optionsMap[key]._label }}
              </slot>
            </div>
          </template>

          <div v-if="filteredKeys.length === 0" class="text-center" @click="isFocused = false">
            No option available
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
