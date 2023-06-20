import UserTick from "./UserTick"
import {render, screen} from '@testing-library/react'

describe ("UserInvite test", () => {
    it("should display tick", () => {
        render(< UserTick/>)
        const userTick = screen.getByTestId("TickTest")
        expect(userTick).toHaveTextContent(`\u2713`);
    })
    it("should display CheckCount", () => {
        render(< UserTick/>)
        const userCount = screen.getByTestId("CountTest")
        expect(userCount).toHaveTextContent('0/20');
    })
})