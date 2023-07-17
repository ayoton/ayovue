import { mount } from "@vue/test-utils";
import ARadio from "./ARadio.vue";

describe("ARadio.vue", () => {
  it("Should render", () => {
    const wrapper = mount(ARadio, {});
    expect(wrapper.text()).toContain("");
  });
  it("Should be interactive", async () => {
    const wrapper = mount(ARadio, {});
    await wrapper.setProps({});
    expect(wrapper.text()).toContain("");
  });
});
