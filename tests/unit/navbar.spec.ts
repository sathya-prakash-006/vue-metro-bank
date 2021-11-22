import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Navbar.vue", () => {
  it("renders props.name when passed", () => {
    const name = "Something";
    const wrapper = shallowMount(Navbar, {
      propsData: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });
});
