import type { VNode, Component } from "vue";
export type Slot =
  | VNode
  | string
  | {
      render: Function;
    }
  | Function
  | Component;
type SlotDictionary = {
  [key: string]: Slot;
};

interface APropType {
  description: string;
  type: any;
  validator?: Function;
  required?: true;
  default?: any;
  enums?: any[];
  conditionalDescription?: string;
}

interface AProps {
  [key: string]: APropType;
}

export interface AComponentMeta {
  name: string;
  props?: AProps;
  slots?: SlotDictionary;
}
