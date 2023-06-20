import TextContainer from "./TextContainer"
import {render, screen} from '@testing-library/react'

describe ("TextContainer test", () => {
    it("should display title", () => {
        render(< TextContainer/>)
        const Text = screen.getByTestId("TextTest")
        expect(Text).toHaveTextContent("Service Page Website")
    })
    it("should display description", () => {
        render(< TextContainer/>)
        const Text = screen.getByTestId("TextTest")
        expect(Text).toHaveTextContent("Make a page display about services for websites company with blue and red colors")
    })
})