import { mount } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";

describe("Home.vue", () => {
  xit("it should contain profile details", () => {
    const wrapper = mount(Home);
    const title = wrapper.get('[data-test="title"]');

    expect(title.text()).toBe("PROFILE DETAILS");
  });
});
