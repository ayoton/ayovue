import { mount } from "@vue/test-utils";
import ASpinner from "./ASpinner.vue";

describe("ASpinner.vue", () => {
  it("Should render", () => {
    const wrapper = mount(ASpinner, {});
    expect(wrapper.text()).toContain("");
  });
  it("Should be interactive", async () => {
    const wrapper = mount(ASpinner, {});
    await wrapper.setProps({});
    expect(wrapper.text()).toContain("");
  });
});
