import React from "react";
import styled from 'styled-components';

const S = {};

S.page = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

S.SmallLogo = styled.img` 
    // position: fixed;
    height: 12vh;
   
`;

S.SmallLogoContainer = styled.div`
`;

S.Nav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 1vh;
    padding-right: 4vh;
`;

S.NavItem = styled.div`
    font-family: Poppins, sans-serif;
    font-size: 1.2em;
    color: #0003FF;
    text-align: center;
    padding-left: 2vw;
    padding-right: 2vw;
    text-decoration: none;

    &:hover {
        transform: scale(1.1);
    }
`;

S.Top = styled.div`
    height: 12vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 3vh;
`;

S.Content = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

S.AboutImage = styled.img`
    position: fixed;
    height: 85%;
    // width: 30%;
    margin-left: 60%;
    //margin-right: 0%;
    //margin-top: 4%;

`;

S.Title = styled.div`
    
    font-family: Poppins;
    font-weight: 600;
    font-size: 2em;
    color: #0003FF;
    text-align: center;

    margin-right: 45vw;
    margin-top: 5%;
    margin-bottom: 1%;
`;

S.Text = styled.div`
    display: block;

    font-family: Poppins;
    font-size: 1.2em;
    color: #000000;
    // text-align: center;
    margin-left: 5%;
    margin-right: 50%;
    margin-top: 2%;
    margin-bottom: 2%;
`;

S.TextParagraph = styled.p`
`;

S.Test = styled.img`
    position: absolute;
    width: 228px;
    height: 55px;
    left: 834px;
    top: 757px;

    //background: #0003FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-180deg);
`;

const AboutPage = () => {
    
    return (
        <S.page>
            <S.Top>
                <S.SmallLogoContainer as="a" href="/">
                    <S.SmallLogo 
                        src="https://user-images.githubusercontent.com/46095809/77265982-7640bf80-6c5b-11ea-8286-c3d85e85f33f.png" 
                    />
                </S.SmallLogoContainer>
                <S.Nav>
                    <S.NavItem as="a" href="/home">Home</S.NavItem>
                    <S.NavItem as="a" href="/about">About Us</S.NavItem>
                    <S.NavItem as="a" href="/volunteer">Volunteer</S.NavItem>
                </S.Nav>
            </S.Top>

            <S.Content>
                <S.Title>
                    About Us
                </S.Title>
                {/* <S.Test src="https://user-images.githubusercontent.com/46095809/77288378-eb7cb680-6c94-11ea-9330-c66a4b581178.png" /> */}

                <S.Text>
                    <S.TextParagraph>
                    Helpful Neighbor was started by two University students, James and Young. With University classes  postponed and the city in a state of emergency, we wanted to find a useful way to volunteer our time and energy.  
                    </S.TextParagraph>

                    <S.TextParagraph> 
                        Outlining our procedure.. call or text type of delivery (eg. grocery list, pickup pharmacy stuff), address and any other details, and we will respond with an estimated time of delivery. Recipts will be delivered and payment can be made in cash, cheque or etransfer to the person of delivery.
                    </S.TextParagraph>
                    
                </S.Text>

                <S.AboutImage src="https://user-images.githubusercontent.com/46095809/77266087-bd2eb500-6c5b-11ea-8e28-00b11d1dcfdc.JPG" />
            </S.Content>
            
        </S.page>
    );
    
    
};

export default AboutPage;