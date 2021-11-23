import { mount } from "@vue/test-utils";
import Register from "../../src/views/Register.vue";

describe("Register.vue", () => {
  it("it should contain title 'Mocro Bank'", () => {
    const wrapper = mount(Register);
    const title = wrapper.get('[data-test="title"]');

    expect(title.text()).toBe("Micro Bank");
  });

  it("it should contain title 'Create an Account'", () => {
    const wrapper = mount(Register);
    const createaccount = wrapper.get('[data-test="create-account"]');

    expect(createaccount.text()).toBe("Create an Account");
  });
});
