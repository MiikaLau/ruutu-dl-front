import { Box, Button, DialogContent, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { baseUrl, useGetEpisodesQuery } from "../redux/data";
import { useAppSelector } from "../redux/hooks";
import { Accordion, AccordionSummary, AccordionDetails } from "./Accordions";
import { CenterProgress } from "./CenterProgress";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { VideoJsPlayerOptions } from "video.js";
import { cssColors } from "../constants/colors";

export const EpisodeListing: React.FC = () => {
    const [watchUrl, setWatchUrl] = useState<string | null>(null);
    const selectedTitle = useAppSelector((state) => state.ui.selectedTitle);
    const { data: episodes, isFetching } = useGetEpisodesQuery(selectedTitle ?? { epId: 0, isVideo: false });
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
                                    <Box sx={{
                                        display: 'inline-block',
                                        '& > p > a': {
                                            color: cssColors.white,
                                        },
                                        '& > p > a:hover': {
                                            color: cssColors.darkWhite
                                        }
                                    }}>
                                        <p style={{ marginLeft: '5px' }}><a href={baseUrl + `get_episode/${selectedTitle.epId}/${ep.id}`}>Download</a></p>
                                        <p>
                                            <Button
                                                onClick={() => {
                                                    setWatchUrl(baseUrl + `get_episode/${selectedTitle.epId}/${ep.id}?stream=true`)
                                                }}
                                                variant='outlined'
                                            >
                                                Watch
                                            </Button>
                                        </p>
                                    </Box>
                                </div>
                            )
                        })}
                    </AccordionDetails>
                </Accordion >
            )
        })
    }

    const getVideoPlayer = () => {
        if (watchUrl) {
            const videoJsOptions: VideoJsPlayerOptions = {
                sources: [
                    {
                        src: watchUrl,
                        type: "video/mp4"
                    }
                ],
                autoplay: true,
            };
            return (
                <Box
                    style={watchUrl ? {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'block',
                        width: '1280px',
                        height: '720px',
                    } : { display: 'none' }}
                >
                    <DialogContent>
                        <div style={{ minHeight: '640px' }}>
                            {watchUrl && (
                                <VideoPlayer options={videoJsOptions}></VideoPlayer>
                            )}
                        </div>
                        <Button onClick={() => { setWatchUrl(null) }}>Close</Button>
                    </DialogContent>
                </Box>
            )
        }
        return null;
    }
    return (
        <>
            {getSeriesAccordions()}
            {getVideoPlayer()}
        </>
    );

}