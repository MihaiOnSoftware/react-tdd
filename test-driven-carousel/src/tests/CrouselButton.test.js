// src/tests/CarouselButton.test.js
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CarouselButton from "../CarouselButton";

configure({ adapter: new Adapter() });

describe("CarouselButton", () => {
  const text = "Button text";
  const defaultWrapper = () => {
    return shallow(<CarouselButton>{text}</CarouselButton>);
  };

  it("renders a <button>", () => {
    expect(defaultWrapper().type()).toBe("button");
  });

  it("passes `children` through to the <button>", () => {
    expect(defaultWrapper().prop("children")).toBe(text);
  });

  it("passes other props through to the <button>", () => {
    const onClick = () => {};
    const className = "my-carousel-button";
    const dataAction = "prev";

    const wrapper = shallow(
      <CarouselButton
        onClick={onClick}
        className={className}
        data-action={dataAction}
      >
        {text}
      </CarouselButton>
    );

    expect(wrapper.prop("onClick")).toBe(onClick);
    expect(wrapper.prop("className")).toBe(className);
    expect(wrapper.prop("data-action")).toBe(dataAction);
  });
});
