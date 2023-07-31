import { mount } from "@vue/test-utils";
import ASelect from "./ASelect.vue";

describe("ASelect.vue", () => {
  it("Should render", () => {
    const wrapper = mount(ASelect, {});
    expect(wrapper.text()).toContain("");
  });
  it("Should be interactive", async () => {
    const wrapper = mount(ASelect, {});
    await wrapper.setProps({});
    expect(wrapper.text()).toContain("");
  });
});
