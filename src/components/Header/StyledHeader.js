import styled from "styled-components";

export const StyledMenu = styled.div`
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        background-color: ${({theme})=> theme.backgroundLevel1};
        color: ${({theme})=> theme.textColorBase};
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`
export const StyledBanner = styled.div`
    background-image: url(${({banner}) => banner});
    height: 230px;
`