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

<style>
.a-file {
  position: relative;
  border: 2px dashed var(--a-c-gray-400);
  border-spacing: 16px;
  border-radius: 4px;
  padding: 8px;

  &:hover {
    border-color: var(--a-c-gray-500);
  }

  & .a-file-label {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--a-c-gray-600);
    cursor: pointer;
  }

  & .a-file-input {
    visibility: hidden;
    width: 0;
    position: absolute;
  }

  & .a-file-upload-icon {
    color: var(--a-c-gray-400);
    font-size: 48px;
  }

  & .a-file-image-preview {
    max-width: 100%;
    display: block;
  }

  & .a-file-hover {
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    opacity: 0;
    transition: all 0.2s;
    padding: 9px 2px;
  }

  & .a-file-hover-forced {
    opacity: 1;
    background: none;
    color: var(--a-c-gray-400);
  }

  & .a-file-hover:hover {
    opacity: 1;
  }

  & .a-file-hover-header,
  & .a-file-hover-footer {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }

  & .a-file-close:hover {
    color: var(--a-c-red-200);
  }

  & .a-file-common-preview {
    position: absolute;
    left: 6px;
    top: 6px;
    right: 6px;
    bottom: 6px;
    padding: 0.5em 1em;
    background-color: var(--a-c-gray-50);
    font-size: 1em;
    color: var(--a-c-gray-600);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  & .a-fc-left {
    /* primary/primary-400 */

    border: 2px solid var(--a-c-primary-400);
    border-radius: 4px;
    padding: 33px;
    font-weight: 700;
    font-size: 1em;
    color: var(--a-c-primary-400);
    text-transform: uppercase;
  }

  & .a-fc-middle {
    flex: 1;
    padding: 0 11px;
  }

  & .a-cf-size {
    color: var(--a-c-gray-400);
  }

  & .a-file-thumbnail {
    font-size: 55px;
    color: var(--a-c-gray-400);
  }

  & .a-file-mf-item {
    aspect-ratio: 29/6;
    display: flex;
    align-items: center;
    background: var(--a-c-gray-50);
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 8px;
    position: relative;
  }

  & .a-file-mf-item:last-child {
    margin-bottom: 0;
  }

  & .a-file-mf-item-image {
    width: 30%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* background-color: red; */
    aspect-ratio: 6/4;
  }

  & .a-file-mf-name {
    flex: 1;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.125em;
    color: var(--a-c-gray-600);
    margin-left: 1rem;
  }
  & .a-file-mf-size {
    color: var(--a-c-gray-400);
    margin-top: 0.25rem;
  }

  & .a-file-remove {
    position: absolute;
    top: -6px;
    right: -6px;
    z-index: 99;
    font-size: 17px;
    color: var(--a-c-gray-300);
    cursor: pointer;
  }

  & .a-file-remove:hover {
    color: var(--a-c-red-300);
  }

  & .a-file-unknown-file {
    border: 1px solid var(--a-c-primary-300);
    border-radius: 4px;
    font-weight: 700;
    font-size: 1em;
    line-height: 1.125em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: var(--a-c-primary-400);
    text-transform: uppercase;
    background-color: var(--a-c-primary-50);
  }

  & .a-icon-upload {
    margin-bottom: 0.25em;
  }

  & .a-file-addmore {
    text-align: center;
    padding: 0 0.5em;
  }
}
</style>
