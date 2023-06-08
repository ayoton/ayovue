<script lang="ts" setup>
import { ref, shallowReactive } from 'vue'
import { AButton } from '..'

const props = defineProps({
  comp: { type: Object, default: () => ({}) },
  compMeta: { type: Object, default: () => ({}) }
})

// eslint-disable-next-line vue/no-setup-props-destructure
const propsMeta: any = props.compMeta.props

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

const vModels = shallowReactive(reactiveProps)

const codeBlock = ref<HTMLDivElement>()

const copyCode = () => {
  navigator.clipboard.writeText(codeBlock.value?.innerText || '')
  return
}

const log = (e: Event) => {
  console.log(e)
}
</script>

<template>
  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  <div>
    <div class="component-output">
      <component :is="comp" v-bind="vModels" @click="log">
        {{ compMeta.slots.default }}
      </component>
    </div>
    <hr />

    <div class="row">
      <div class="col">
        <div v-for="bp in booleanProps" :key="bp">
          <label> <input type="checkbox" v-model="vModels[bp]" /> {{ bp }} </label>
        </div>
      </div>
      <div class="col">
        <div v-for="sp in stringProps" :key="sp">
          <div>{{ sp }}</div>
          <input type="text" v-model="vModels[sp]" />
        </div>
      </div>
      <div class="col">
        <div v-for="np in numberProps" :key="np">
          <div>{{ np }}</div>
          <input type="number" v-model="vModels[np]" />
        </div>
      </div>

      <div class="col">
        <div v-for="ep in enumProps" :key="ep">
          <div>{{ ep }}</div>
          <select v-model="vModels[ep]">
            <option v-for="op in propsMeta[ep].type" :key="op">
              {{ op }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="gen-code">
      <AButton @click="copyCode" class="copy-btn">Copy</AButton>
      <div class="pg-code" ref="codeBlock">
        <span class="symb">&lt;</span><span class="tag-name">{{ compMeta.name }}</span>
        <!-- all props -->
        <template v-for="(val, key) in vModels" :key="key">
          <!-- {{ key }} -->
          <template v-if="booleanProps.includes(key as any)">
            <span v-if="val" class="prop-name">&nbsp;&nbsp;{{ key }}</span>
          </template>
          <template v-else-if="propsMeta[key].default !== val && val !== ''">
            <span class="prop-name"
              >&nbsp;&nbsp;<span v-if="numberProps.includes(key as any)">:</span>{{ key
              }}<span class="code-eq">=</span><span class="code-val">"{{ val }}"</span></span
            >
          </template>
        </template>
        <span class="symb">&gt;</span>
        <!-- Slots -->
        <span class="symb">&lt;/</span><span class="tag-name">{{ compMeta.name }}</span
        ><span class="symb">&gt;</span>
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
.pg-code {
  font-size: 14px;
  border: 1px solid green;
  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  background: #242424;
  margin: 1rem 0;
  padding: 1rem;
}
.pg-code .symb {
  color: #89ddff;
}
.pg-code .tag-name {
  color: #ffcb6b;
}
.pg-code .prop-name {
  color: #c792ea;
  display: block;
}
.pg-code .code-eq {
  color: white;
}
.pg-code .code-val {
  color: #c3e88d;
}
.gen-code {
  position: relative;
}
.copy-btn {
  position: absolute;
  right: 0.3em;
  top: 0.3em;
}
</style>
