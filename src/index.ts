import type { Plugin } from 'vue'
import AButton from "./components/AButton/index";
import AButtonGroup from "./components/AButtonGroup/index";
import ACheckbox from "./components/ACheckbox/index";
import ACollapse from "./components/ACollapse/index";
import ADialog from "./components/ADialog/index";
import AInput from "./components/AInput/index";
import AInputFile from "./components/AInputFile/index";
import ARadio from "./components/ARadio/index";
import ASelect from "./components/ASelect/index";
import ASpinner from "./components/ASpinner/index";
import ASwitch from "./components/ASwitch/index";
import AToasts from "./components/AToasts/index";
export { useToast } from "./composables/useToast/index";
export { vRipple } from "./directives/vRipple";
export { vTooltip } from "./directives/vTooltip";
export { AButton, AButtonGroup, ACheckbox, ACollapse, ADialog, AInput, AInputFile, ARadio, ASelect, ASpinner, ASwitch, AToasts };
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
      AButton: typeof AButton,
      AButtonGroup: typeof AButtonGroup,
      ACheckbox: typeof ACheckbox,
      ACollapse: typeof ACollapse,
      ADialog: typeof ADialog,
      AInput: typeof AInput,
      AInputFile: typeof AInputFile,
      ARadio: typeof ARadio,
      ASelect: typeof ASelect,
      ASpinner: typeof ASpinner,
      ASwitch: typeof ASwitch,
      AToasts: typeof AToasts
  }
}
const AyoVue: Plugin = {
  install(app) {
    app.component('AButton', AButton)
    app.component('AButtonGroup', AButtonGroup)
    app.component('ACheckbox', ACheckbox)
    app.component('ACollapse', ACollapse)
    app.component('ADialog', ADialog)
    app.component('AInput', AInput)
    app.component('AInputFile', AInputFile)
    app.component('ARadio', ARadio)
    app.component('ASelect', ASelect)
    app.component('ASpinner', ASpinner)
    app.component('ASwitch', ASwitch)
    app.component('AToasts', AToasts)
  }
}
export default AyoVue
  