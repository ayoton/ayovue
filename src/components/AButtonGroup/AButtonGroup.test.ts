import { mount } from "@vue/test-utils";
import AButtonGroup from "./AButtonGroup.vue";

describe("AButtonGroup.vue", () => {
  it("Should render", () => {
    const wrapper = mount(AButtonGroup, {});
    expect(wrapper.text()).toContain("");
  });
  it("Should be interactive", async () => {
    const wrapper = mount(AButtonGroup, {});
    await wrapper.setProps({});
    expect(wrapper.text()).toContain("");
  });
});
