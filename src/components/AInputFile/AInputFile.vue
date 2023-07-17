<script lang="ts" setup>
/***
 * New Props: accept, capture
 */
import { computed, ref } from 'vue'
import { AButton } from '../../index'
import {
  variantProp,
  sizeProp,
  booleanProp,
  stringProp,
  widthProp,
  aspectRatioProp,
  nameProp
} from '../proptypes/'

const props = defineProps({
  variant: variantProp,
  size: sizeProp,
  outlined: booleanProp,
  raised: booleanProp,
  rounded: booleanProp,
  accept: stringProp,
  width: widthProp,
  aspectRatio: aspectRatioProp,
  name: nameProp,
  multiple: booleanProp
})

const emit = defineEmits(['change', 'drop'])

const classes = computed(() => {
  return {
    'a-file': true,
    [`a-${props.variant}`]: true,
    'a-outlined': props.outlined
  }
})

const fileEl = ref<HTMLInputElement | null>(null)

const base64String = ref('')

interface SelectedFileType {
  raw: Object | null
  fileName?: string
  fileType?: string
  fileSize?: string
  fileExtension?: string
  blobURL?: string
}

const selectedFile = ref<SelectedFileType>({ raw: null })
const selectedFiles = ref<Array<SelectedFileType>>([])

function handleChange(e: Event) {
  const targetElement = e.target as HTMLInputElement

  if (!targetElement.files || !targetElement.files[0]) {
    return
  }
  selectFile(targetElement?.files)
  emit('change', e)
}

function selectFile(files: FileList /*File[]*/) {
  // console.log(files);

  const filesArray = Array.from(files)

  // console.log(targetElement?.files[0]);
  if (props.multiple) {
    // selectedFiles.value = [];
    filesArray.forEach((file: File) => {
      let fileWithMeta: SelectedFileType = createFileWithMeta(file)
      if (fileWithMeta.fileName) {
        selectedFiles.value.push(fileWithMeta)
      }
    })
  } else {
    let fileWithMeta = createFileWithMeta(files[0])
    if (fileWithMeta.fileName) {
      selectedFile.value = fileWithMeta
    }
  }
}

function createFileWithMeta(file: File): SelectedFileType {
  let fwm: SelectedFileType = { raw: file }

  let fileSize: string = ''
  if (file.size > 1024 * 1024) {
    fileSize = Math.ceil(file.size / 1024 / 1024) + 'MB'
  } else {
    fileSize = Math.ceil(file.size / 1024) + 'KB'
  }

  const parts = file.name.split('.')

  if (parts.length == 1) {
    return fwm
  }

  const fileExtension = parts[parts.length - 1]

  let fileNameWithoutExtension = parts.slice(0, parts.length - 1).join('.')

  let fileName = file.name
  if (fileName.length > 16) {
    fileName =
      fileNameWithoutExtension.slice(0, 10) +
      '...' +
      fileNameWithoutExtension.slice(-3) +
      '.' +
      fileExtension
  }

  let fileType = file.type.split('/')[0]

  fwm.fileSize = fileSize
  fwm.fileName = fileName
  fwm.fileType = fileType
  fwm.fileExtension = fileExtension

  if (fileType === 'image') {
    fwm.blobURL = URL.createObjectURL(file)
  }

  return fwm
}

function resetFile() {
  selectedFile.value = { raw: null }
}

function openFileDialog() {
  console.log(fileEl.value)
  let el = document.querySelector('#' + props.name)
  console.log(el)
}

function handleDrop(e: DragEvent) {
  e.preventDefault()
  const files = e.dataTransfer?.files
  // console.log(file);
  selectFile(files!!)
  emit('drop')
}

function removeFile(i: number) {
  selectedFiles.value.splice(i, 1)
}

function chooseFile() {
  fileEl.value?.click()
}

function getFile() {
  return getFiles()
}

function getFiles() {
  if (props.multiple) {
    return selectedFiles.value
  } else {
    return selectedFile.value
  }
}

defineExpose({
  getFile,
  getFiles
})
</script>

<template>
  <div
    class=""
    :class="classes"
    :style="{
      fontSize: `${size || 16}px`,
      width: width,
      aspectRatio: aspectRatio
    }"
    @dragover.prevent
    @drop="handleDrop"
  >
    <input
      :id="name"
      :name="name"
      type="file"
      class="a-file-input"
      @change="handleChange"
      ref="fileEl"
      :accept="accept"
      :multiple="multiple"
      capture
    />
    <label
      class="a-file-label"
      :for="name"
      v-if="(!multiple && !selectedFile.raw) || (multiple && selectedFiles.length === 0)"
    >
      <div class="a-file-upload-icon a-icon-upload"></div>
      <div class="">Drag & Drop files here</div>
    </label>

    <div v-else>
      <!-- Multiple file upload -->
      <template v-if="multiple">
        <!-- {{ selectedFiles }} -->

        <div class="a-file-mf-item" v-for="(f, i) in selectedFiles">
          <div class="a-file-remove a-icon-circle-with-cross" @click="removeFile(i)">
            <!-- <div class="a-icon-circle-with-cross"></div> -->
          </div>
          <div class="a-file-mf-item-image">
            <img
              v-if="f.fileType == 'image'"
              :src="f.blobURL"
              :alt="`.${f.fileExtension}`"
              style="max-width: 100%"
            />
            <div class="a-file-unknown-file" v-else>
              {{ f.fileExtension }}
            </div>
          </div>
          <div class="a-file-mf-name">
            <div>{{ f.fileName }}</div>
            <div class="a-file-mf-size">{{ f.fileSize }}</div>
          </div>
        </div>

        <div class="a-file-addmore">
          <AButton variant="info" outlined @click="chooseFile"> Add More </AButton>
        </div>
      </template>

      <!-- Single file upload -->
      <template v-else>
        <img
          v-if="selectedFile.raw && selectedFile.fileType === 'image'"
          :src="selectedFile.blobURL"
          :alt="`${selectedFile.fileName}`"
          class="a-file-image-preview"
        />

        <div v-else class="a-file-common-preview">
          <div class="a-icon-file a-file-thumbnail"></div>
          <div>
            {{ selectedFile.fileName }}
          </div>
          <div class="a-cf-size">
            {{ selectedFile.fileSize }}
          </div>
        </div>

        <div
          v-if="selectedFile.raw"
          class="a-file-hover"
          :class="{
            'a-file-hover-forced': selectedFile.fileType !== 'image'
          }"
        >
          <div class="a-file-hover-header">
            <label class="a-icon-pencil" @click="openFileDialog" :for="name"></label>
            <div
              class="a-icon-close a-file-close"
              click="resetFile"
              style="cursor: pointer"
              @click="resetFile"
            ></div>
          </div>

          <div class="a-file-hover-footer" v-if="selectedFile.fileType === 'image'">
            <span>{{ selectedFile.fileName }}</span>
            <span>{{ selectedFile.fileSize }}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style></style>
