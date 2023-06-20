import UserInvite from "./UserInvite"
import {render, screen} from '@testing-library/react'

describe ("UserInvite test", () => {
    it("should display the right number of bubble", () => {
        render(< UserInvite/>)
        const UserBubbles = screen.getAllByTestId("UserTest")
        expect(UserBubbles.length).toBe(3)
    })
    it("should display the invite button", () => {
        render(< UserInvite/>)
        const UserInviteButton = screen.getByTestId("UserInviteButton")
        expect(UserInviteButton).toHaveTextContent('Invite');
    })
})