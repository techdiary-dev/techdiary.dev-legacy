import React from 'react'
import 'twin.macro'
import { StyledWrapper } from './styles'
import Logo from './Logo'
import Search from './Search'
import Actions from './Actions'

const Navbar = () => {
    return (
        <StyledWrapper>
            <div tw="m-auto px-4">
                <div tw="flex justify-between items-center h-12">
                    <Logo />
                    <Search />
                    <Actions />
                </div>
            </div>
        </StyledWrapper>
    )
}

export default Navbar
