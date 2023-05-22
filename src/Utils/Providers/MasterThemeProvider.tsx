import {CacheProvider} from "@emotion/react"
import React, {ReactElement} from "react"
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import {createTheme, ThemeProvider} from "@mui/material";
import useIsRtl from "~/src/Utils/Hooks/useIsRtl.tsx";
import {useAppSelector} from "~/src/Utils/Hooks";

interface IMuiProviderProps {
    children: ReactElement
}

// const theme = createTheme({
//     palette:{
//       // mode:'dark'
//     },
//     components: {
//         MuiAppBar: {
//             styleOverrides: {
//                 root: {
//                 },
//             },
//         },
//     },
// });


const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLtr = createCache({
    key: 'muiltr',
    stylisPlugins: [prefixer],
});


const colorPalette = {
    primary:{
        main:'#FFFFFF',
        dark:'#2B3743',
        light:'#FFFFFF',
    },
    secondary:{
        main:'#FFFFFF',
        dark:'#212E37',
        light:'#FFFFFF',
    },
}

const MuiProvider: React.FC<IMuiProviderProps> = ({children}) => {
    const isRtl = useIsRtl()
    const mode = useAppSelector(state=>state.layout.mode)

    const theme = React.useMemo(() =>
            createTheme({
                palette: {
                    mode,
                    ...colorPalette,
                },
                components:{
                    MuiAppBar:{
                        styleOverrides:{
                            root:{
                                background:colorPalette.primary[mode],
                                boxShadow:`0px 2px 9px -3px ${mode === 'light' ? '#cbcbcb' : 'black'}`,
                                position:'relative'
                            }
                        }
                    },
                    MuiCard:{
                        styleOverrides:{
                            root:{
                                background:colorPalette.primary[mode],
                                boxShadow:`0px 0px 9px 0px ${mode === 'light' ? '#cbcbcb' : '#2e2d2d'}`
                            }
                        }
                    }
                }
            }),
        [mode],
    );


    return (
        <ThemeProvider theme={theme}>
            <CacheProvider value={isRtl ? cacheRtl : cacheLtr}>
                {children}
            </CacheProvider>
        </ThemeProvider>
    )
}

export default React.memo(MuiProvider)