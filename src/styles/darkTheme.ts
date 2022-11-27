import { createTheme, lighten } from "@mui/material";
import { cssColors } from "../constants/colors";

export const darkTheme = createTheme({
    palette: {
        background: {
            default: cssColors.black,
        },
        text: {
            primary: cssColors.white,
            secondary: cssColors.gray
        },
        primary: {
            light: cssColors.white,
            main: cssColors.black,
            dark: cssColors.gray,
            contrastText: cssColors.red
        },
        secondary: {
            light: cssColors.white,
            main: cssColors.white,
            dark: cssColors.gray,
            contrastText: cssColors.blue
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderColor: cssColors.white,
                    color: cssColors.white,
                    ':hover': {
                        borderColor: cssColors.darkWhite
                    }
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: lighten(cssColors.black, 0.1)
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                paper: {
                    backgroundColor: lighten(cssColors.black, 0.15)
                },
                groupLabel: {
                    backgroundColor: lighten(cssColors.black, 0.2)
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& svg': {
                        color: cssColors.white
                    },
                },
                input: {
                    ':focus': {
                        outline: cssColors.darkWhite
                    },
                    width: 'initial'
                },
                notchedOutline: {
                    border: '1px solid ' + cssColors.white + ' !important',
                    ":focus": {
                        border: '1px solid ' + cssColors.white,
                    }
                },
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    overflow: 'visible',
                    '&.Mui-focused': {
                        color: cssColors.white
                    }
                }
            }
        },
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: lighten(cssColors.black, 0.1)
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: lighten(cssColors.black, 0.1)
                }
            }
        }
    }
})