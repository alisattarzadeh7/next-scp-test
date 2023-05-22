import React, {ReactElement} from "react"
import ReactQueryProvider from "~/src/Utils/Providers/ReactQueryProvider";
import MasterThemeProvider from "~/src/Utils/Providers/MasterThemeProvider";


interface IMainProviderProps {
    children: ReactElement
}

const MainProvider: React.FC<IMainProviderProps> = ({children}) => {
    console.log('main provider')
    return (<>
        {/*<MasterThemeProvider>*/}
            <ReactQueryProvider>
                {children}
            </ReactQueryProvider>
        {/*</MasterThemeProvider>*/}
    </>)
}


export default MainProvider