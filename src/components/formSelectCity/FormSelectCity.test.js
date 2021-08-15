import React from "react";
import { shallow } from "enzyme";
import FormSelectCity from "./FormSelectCity";

// eslint-disable-next-line no-undef
describe("Pruebas en <FormSelectCity />", () => {
  // eslint-disable-next-line no-undef
  const getWeather = jest.fn();
  let wrapper = shallow(<FormSelectCity getWeather={getWeather} />);

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    jest.clearAllMocks();
    wrapper = shallow(<FormSelectCity getWeather={getWeather} />);
  });

  // eslint-disable-next-line no-undef
  test("Debe de mostrar el componente correctamente", () => {
    // eslint-disable-next-line no-undef
    expect(wrapper).toMatchSnapshot();
  });

  // eslint-disable-next-line no-undef
  test("No debe de llamar a la función si no selecciona una ciudad", () => {
    // eslint-disable-next-line no-undef
    window.alert = jest.fn();
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    // eslint-disable-next-line no-undef
    expect(getWeather).not.toHaveBeenCalled();
    // eslint-disable-next-line no-undef
    expect(window.alert).toHaveBeenCalled();
  });
});
