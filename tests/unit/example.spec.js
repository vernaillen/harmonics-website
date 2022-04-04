import { mount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer.vue", () => {
  it("test for date variable", () => {
    const wrapper = mount(Footer);
    const { vm } = wrapper;

    expect(typeof vm.date).toBe("number");
  });
});
