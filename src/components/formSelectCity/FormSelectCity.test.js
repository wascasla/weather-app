import React from "react";
import { shallow } from "enzyme";
import FormSelectCity from "./FormSelectCity";

describe(" Pruebas en <FormSelectCity />", () => {
  const getWeather = jest.fn();
  let wrapper = shallow(<FormSelectCity getWeather={getWeather} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<FormSelectCity getWeather={getWeather} />);
  });

  test("Debe de mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe de llamar a la función si no selecciona una ciudad", () => {
    window.alert = jest.fn();
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(getWeather).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalled();
    //expect(wrapper.find("alert").exists()).toBe(true);
  });
});
