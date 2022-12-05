
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { cssColors } from "../constants/colors";
import { dataApi } from "../redux/data";
import { useAppSelector } from "../redux/hooks";
import { Body } from "./Body";
import { EpisodeListing } from "./EpisodeListing";
import { Search } from "./Search";

export const FrontPage: React.FC = () => {
    const { currentData: searchItems } = dataApi.endpoints.getSearchItems.useQueryState();
    const selectedTitle = useAppSelector((state) => state.ui.selectedTitle);

    const alias = searchItems?.find(itm => itm.id === selectedTitle?.epId)?.alias;
    const seriesLink = `https://www.ruutu.fi/ohjelmat/${alias}`;

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
            {alias && (
                <Box sx={{
                    textAlign: 'center',
                    paddingBottom: '24px',
                    '& > a': {
                        color: cssColors.white,
                    },
                    '& > a:hover': {
                        color: cssColors.darkWhite
                    }
                }}
                >
                    <a href={seriesLink} target='_blank' rel="noreferrer">{seriesLink}</a>
                </Box>
            )}
            <EpisodeListing />
        </Body>
    );
}