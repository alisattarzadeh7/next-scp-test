import {Grid} from "@mui/material";
import {motion, useInView} from "framer-motion"
import qs from "qs"
import Country from "~/src/Utils/Entities/Country";
import CountryCard from "~/src/app/components/CountryList/CountryCard";
import Link from "next/link";
import CountryController from "~/src/Utils/Controllers/CountryController";
import {useRef} from "react";


const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        }
    }
}


const CountryList = async  () => {
    // const [countries, setCountries] = useState<Country[]>([])
    // const [countryList,setCountryList] = useState<Country[]>()
    // // const {data} = useAllCountries(qs.stringify({fields: 'name,flags,cca2'}), {
    // //     onSuccess: (d) => setCountryList(d)
    // // })
    const countries = await CountryController.getAllCountries(qs.stringify({fields: 'name,flags,cca2'}))
    console.log({countries})
    // const ref = useRef(null)
    // const isInView = useInView(ref)
    // const [, startTransition] = useTransition();
    //
    // console.log('this component is rerendering')
    //
    // useEffect(() => {
    //     if (isInView && countryList && countries.length !== countryList.length)
    //         setCountries(prevState => [...prevState, ...countryList.slice(prevState.length, prevState.length + 12)])
    // }, [isInView])

    // useEffect(()=>{
    //     if(countryList){
    //     }
    // },[countryList])

    // useEffect(() => {
    //     return () => {
    //         if (data)
    //             setCountries(data.slice(0, 12))
    //     }
    // }, [data])

    // console.log({data})


    // const handleFilterList = useCallback((newList:Country[])=>{
    //     startTransition(()=>{
    //         setCountryList(newList)
    //         setCountries(newList.slice(0, 12))
    //     })
    // },[])


    return (
        <>
            {
                countries?.map((country, index) => (<CountryCard key={country.cca2} info={country}/>))
            }
        {/*{*/}
        {/*    data &&*/}
        {/*    <SearchBar initialData={data} handleFilterList={handleFilterList} />*/}
        {/*}*/}


            {/*{*/}
            {/*    countries.length > 0 && <motion.div variants={container}*/}
            {/*                                        initial="hidden"*/}
            {/*                                        animate="show"*/}

            {/*    >*/}
            {/*        <Grid container spacing={4}>*/}

            {/*            */}


            {/*        </Grid>*/}

            {/*    </motion.div>*/}
            {/*}*/}
            {/*<div ref={ref}/>*/}
        </>
    )
}


export default CountryList