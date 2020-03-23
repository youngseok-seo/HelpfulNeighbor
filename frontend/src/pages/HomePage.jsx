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

S.Logo = styled.img` 
    position: fixed;
    height: 60vh;
   
`;

const HomePage = () => {
    
    return (
        <S.page>
            <S.Logo src="https://user-images.githubusercontent.com/46095809/77264774-51971880-6c58-11ea-854e-a432342d1075.png" />
            
        </S.page>
    );
    
    
};

export default HomePage;