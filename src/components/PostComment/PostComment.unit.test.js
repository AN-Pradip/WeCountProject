import PostComment from "./PostComment"
import {render, screen} from '@testing-library/react'

describe ("PostComment test", () => {
    it("should display number of comments", () => {
        render(< PostComment/>)
        const CommentText = screen.getByTestId("CommentTextId")
        expect(CommentText).toHaveTextContent(`10 Comments`);
    })
})