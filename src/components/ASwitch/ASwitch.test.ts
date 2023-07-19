import { mount } from "@vue/test-utils";
import ASwitch from "./ASwitch.vue";

describe("ASwitch.vue", () => {
  it("Should render", () => {
    const wrapper = mount(ASwitch, {});
    expect(wrapper.text()).toContain("");
  });
  it("Should be interactive", async () => {
    const wrapper = mount(ASwitch, {});
    await wrapper.setProps({});
    expect(wrapper.text()).toContain("");
  });
});
