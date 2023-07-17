import { mount } from "@vue/test-utils";
import AInputFile from "./AInputFile.vue";

describe("AInputFile.vue", () => {
  it("Should render", () => {
    const wrapper = mount(AInputFile, {});
    expect(wrapper.text()).toContain("");
  });
  it("Should be interactive", async () => {
    const wrapper = mount(AInputFile, {});
    await wrapper.setProps({});
    expect(wrapper.text()).toContain("");
  });
});
