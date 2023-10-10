import Input_todo_item from "./Input_todo_item";
import { fireEvent, render, screen } from "@testing-library/react"


const mockedDispatch = jest.fn();

describe("Input_todo_item", () => {

    beforeEach(() => {
        render(<Input_todo_item state={{}} dispatch={mockedDispatch}/>);
    });
    it("Should render input element", () => {
        const inputElement = screen.getByTestId("todo_item");
        expect(inputElement).toBeInTheDocument();
    });

    it("Should render Add item button element", () => {
        const buttonElement = screen.getByText("Add Item");
        expect(buttonElement).toBeInTheDocument();
    });
    it("Should change the input todo as we type", () => {
        const inputElement = screen.getByTestId("todo_item");
        const buttonElement = screen.getByText("Add Item");
        fireEvent.change(inputElement, {target: { value: "Dance"}});
        expect(inputElement.value).toBe("Dance");
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe("");
    });

});