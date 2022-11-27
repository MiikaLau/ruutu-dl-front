import { Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { baseUrl, useGetEpisodesQuery } from "../redux/data";
import { useAppSelector } from "../redux/hooks";
import { Accordion, AccordionSummary, AccordionDetails } from "./Accordions";
import { CenterProgress } from "./CenterProgress";

export const EpisodeListing: React.FC = () => {
    const selectedTitle = useAppSelector((state) => state.ui.selectedTitle);
    const { data: episodes, isFetching } = useGetEpisodesQuery(selectedTitle ?? 0);
    if (isFetching) return <CenterProgress />
    if (!selectedTitle || !episodes) return null;

    const getSeriesAccordions = () => {
        return Object.keys(episodes).map((series) => {
            return (
                <Accordion key={series}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                    >
                        <Typography>{series}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {episodes[series].map((ep) => {
                            return (
                                <div key={ep.id} style={{ padding: '16px' }}>
                                    <div style={{ display: 'inline-block', width: '90%', paddingRight: '16px' }}>
                                        <Typography variant='body1' style={{ fontWeight: 'bold' }}>{ep.title}</Typography>
                                        <Typography variant='body2'>{ep.description}</Typography>
                                    </div>
                                    <div style={{ display: 'inline-block' }}>
                                        <a href={baseUrl + `get_episode/${selectedTitle}/${ep.id}`}>Download</a>
                                    </div>
                                </div>
                            )
                        })}
                    </AccordionDetails>
                </Accordion>
            )
        })
    }
    return <>{getSeriesAccordions()}</>;

}