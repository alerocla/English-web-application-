import React from 'react';
import ListWords from "../components/ListWords.tsx";
import SearchWord from "../components/SearchWord.tsx";


const MainPage: React.FC = () => {
    return (
        <div>
            <SearchWord/>
            <ListWords />
        </div>
    );
};

export default MainPage;