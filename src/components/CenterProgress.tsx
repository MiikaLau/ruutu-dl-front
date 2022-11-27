import { CircularProgress } from "@mui/material"
import { cssColors } from "../constants/colors"

export const CenterProgress: React.FC = () => {
    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <CircularProgress sx={{ color: cssColors.darkWhite }} />
        </div>
    )
}