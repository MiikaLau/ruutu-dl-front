
import { styled } from "@mui/system";
import { Body } from "./Body";
import { EpisodeListing } from "./EpisodeListing";
import { Search } from "./Search";

export const FrontPage: React.FC = () => {
    const SearchContainer = styled('div')(({ theme }) => ({
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '24px 0px',
    }));
    return (
        <Body>
            <SearchContainer>
                <Search />
            </SearchContainer>
            <EpisodeListing />
        </Body>
    );
}