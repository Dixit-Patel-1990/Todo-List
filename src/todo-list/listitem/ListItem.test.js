import { BrowserRouter } from "react-router-dom";
import ListItem from "./ListItem";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const mockedDispatch = jest.fn();

const MockListItem = ({state, dispatch}) => {
  return (<BrowserRouter>
    <ListItem
      state={state}
      dispatch={dispatch}
    />
  </BrowserRouter>);
};

describe("ListItem", () => {
  it("Should render list of todo items ", async () => {
    render(<MockListItem state={[
        {
          id: 1,
          todoItem: "Dance",
          isCompleted: false,
        },
      ]}
      dispatch={mockedDispatch}/>);
    const unorderedListElement = screen.getByTestId("listitem");
    const ListItemElement = screen.getByTestId("test1");
    expect(unorderedListElement).toBeInTheDocument();
    expect(ListItemElement).toBeInTheDocument();
    expect(screen.getByTestId("test1")).not.toHaveClass("isComplete");
    fireEvent.click(ListItemElement);

   
  });
});
