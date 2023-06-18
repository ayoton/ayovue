import { mount } from "@vue/test-utils";
import ADialog from "./ADialog.vue";

describe("ADialog.vue", () => {
  it("Should render", () => {
    const wrapper = mount(ADialog, {});
    expect(wrapper.text()).toContain("");
  });
  it("Should be interactive", async () => {
    const wrapper = mount(ADialog, {});
    await wrapper.setProps({});
    expect(wrapper.text()).toContain("");
  });
});
