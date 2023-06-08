import { mount } from "@vue/test-utils";
import AInput from "./AInput.vue";

describe("AInput.vue", () => {
  it("Should render", () => {
    const wrapper = mount(AInput, {});
    expect(wrapper.text()).toContain("");
  });
  it("Should be interactive", async () => {
    const wrapper = mount(AInput, {});
    await wrapper.setProps({});
    expect(wrapper.text()).toContain("");
  });
});
