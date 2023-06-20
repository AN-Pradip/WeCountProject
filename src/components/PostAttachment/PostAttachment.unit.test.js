import PostAttachment from "./PostAttachment"
import {render, screen} from '@testing-library/react'

describe ("PostAttachment test", () => {
    it("should display number of attachments", () => {
        render(< PostAttachment/>)
        const AttachmentText = screen.getByTestId("AttachmentTextId")
        expect(AttachmentText).toHaveTextContent(`4 Attachments`);
    })
})