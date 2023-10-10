import { render, screen } from "@testing-library/react";
import DisplayTotalItems from "./DisplayTotalItems";

describe("DisplayTotalItems", () => {

    it("Should display total counts of pending todo items", () => {

        render(<DisplayTotalItems state={[{
            id: 1,
            todoItem: "Dance",
            isCompleted: false
        }]}/>);

        const paragraphElement = screen.getByText("1 pending item");
        expect(paragraphElement).toBeInTheDocument();
    });
});