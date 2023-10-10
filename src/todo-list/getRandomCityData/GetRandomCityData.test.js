import { BrowserRouter } from "react-router-dom";;
import { render, screen } from "@testing-library/react";
import GetRandomCityData from "./GetRandomCityData";

const MockGetRandomCityData = () => {
  return (<BrowserRouter>
    <GetRandomCityData/>
  </BrowserRouter>);
};

describe("ListItem", () => {
  it("Should render list of todo items ", async () => {
    render(<MockGetRandomCityData/>);
    const paragraphElement = await screen.findByTestId("country");
    expect(paragraphElement).toBeInTheDocument();
  });
});
