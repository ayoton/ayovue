<script lang="ts" setup>
import { shallowReactive } from 'vue'

const props = defineProps({
  comp: { type: Object, default: () => ({}) },
  compMeta: { type: Object, default: () => ({}) }
})

const propsMeta: any = props.compMeta.props

console.log('propsmeta', propsMeta)

const reactiveProps: any = {}

const booleanProps: string[] = []
const stringProps: string[] = []
const numberProps: string[] = []
const enumProps: string[] = []

for (const key in propsMeta) {
  if (propsMeta[key].type.name === 'Boolean') {
    booleanProps.push(key)
  } else if (propsMeta[key].type.name === 'String') {
    stringProps.push(key)
  } else if (
    propsMeta[key].type.name === 'Number' ||
    (Array.isArray(propsMeta[key].type) && propsMeta[key].type[0].name === 'Number')
  ) {
    numberProps.push(key)
  } else if (Array.isArray(propsMeta[key].type) && typeof propsMeta[key].type[0] !== 'function') {
    enumProps.push(key)
  }

  reactiveProps[key] = propsMeta[key].default
}

console.log(reactiveProps)

const vModels = shallowReactive(reactiveProps)

// const booleanProps = Object.keys(props).filter((p) => propsMeta[p].type.name === 'Boolean')
// const stringProps = Object.keys(props).filter((p) => propsMeta[p].type.name === 'String')
// const numberProps = Object.keys(props).filter(
//   (p) =>
//     propsMeta[p].type.name === 'Number' ||
//     (Array.isArray(propsMeta[p].type) && propsMeta[p].type[0].name === 'Number')
// )
// const enumProps = Object.keys(props).filter(
//   (p) => Array.isArray(propsMeta[p].type) && typeof propsMeta[p].type[0] !== 'function'
// )

// console.log(booleanProps, stringProps, enumProps, numberProps)
</script>

<template>
  <div>
    <div class="component-output">
      <component :is="comp" v-bind="vModels">
        {{ compMeta.slots.default }}
      </component>
    </div>
    <hr />

    <div class="row">
      <div class="col">
        <div v-for="bp in booleanProps">
          <label> <input type="checkbox" v-model="vModels[bp]" /> {{ bp }} </label>
        </div>
      </div>
      <div class="col">
        <div v-for="sp in stringProps">
          <div>{{ sp }}</div>
          <input type="text" v-model="vModels[sp]" />
        </div>
      </div>
      <div class="col">
        <div v-for="np in numberProps">
          <div>{{ np }}</div>
          <input type="number" v-model="vModels[np]" />
        </div>
      </div>

      <div class="col">
        <div v-for="ep in enumProps">
          <div>{{ ep }}</div>
          <select v-model="vModels[ep]">
            <option v-for="op in propsMeta[ep].type">
              {{ op }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}

.col {
  flex: 1;
  min-width: 222px;
}
</style>
