import styled from 'styled-components'
import deviceScreens from 'styles/DEVICES'
import tw from 'twin.macro'

export const StyledActions = styled.div`
    display: flex;
    align-items: center;
    ${tw`flex items-center`}

    .login-url {
        ${tw`flex items-center`}
    }

    @media all and (max-width: 800px) {
        .login-url {
            svg {
                padding-right: 5px;
                height: 35px;
                width: 25px;
                text {
                    display: none;
                }
            }
        }
    }

    .label {
        ${tw`ml-2 text-lg hidden md:inline-block`}
    }
`

export const StyledUserActionMenu = styled.div`
    position: relative;
    .username_ui {
        width: calc(100% - 3rem);
    }
    .dropdown-menu {
        ${tw`bg-secondary rounded shadow absolute p-3`}
        width: 200px;
        top: 50px;
        right: 0;

        &__item {
            ${tw`flex justify-start items-center hover:bg-secondaryDark px-2 rounded`}
        }
        &__icon {
            margin-right: 5px;
        }
        li {
            ${tw`leading-9`}
        }
    }
`
