import { mount } from "@vue/test-utils";
import ACheckbox from "./ACheckbox.vue";

describe("ACheckbox.vue", () => {
  it("Should render", () => {
    const wrapper = mount(ACheckbox, {});
    expect(wrapper.text()).toContain("");
  });
  it("Should be interactive", async () => {
    const wrapper = mount(ACheckbox, {});
    await wrapper.setProps({});
    expect(wrapper.text()).toContain("");
  });
});
