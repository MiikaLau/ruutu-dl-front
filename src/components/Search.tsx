import { Autocomplete, TextField } from "@mui/material";
import { dataApi } from "../redux/data";
import { useAppDispatch } from "../redux/hooks";
import { setSelectedTitle } from "../redux/ui";

export const Search: React.FC = () => {
    const dispatch = useAppDispatch();
    const { currentData: searchItems } = dataApi.endpoints.getSearchItems.useQueryState();

    const getOptions = () => {
        if (!searchItems) return [];
        return searchItems.map((item) => {
            return { label: item.title, id: item.id, isVideo: item.type === 'movie' }
        });
    };

    return (
        <Autocomplete
            disablePortal
            id="title-selector"
            options={getOptions()}
            sx={{ width: 600, marginLeft: 'auto', marginRight: 'auto', }}
            renderInput={(params) => <TextField {...params} label="Select Title" />}
            onChange={(_, val) => {
                dispatch(setSelectedTitle(val ? { epId: val.id, isVideo: val.isVideo } : null))
            }}
        />
    );
}