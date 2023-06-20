import Label from "./Label"
import {render, screen} from '@testing-library/react'

describe ("Label test", () => {
    it("should display user interface", () => {
        render(< Label/>)
        const textLabel = screen.getByTestId("LabelTest")
        expect(textLabel).toHaveTextContent("User Interface")
    })
})