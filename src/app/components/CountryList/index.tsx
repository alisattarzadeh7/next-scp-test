import {Grid} from "@mui/material";
import {motion, useInView} from "framer-motion"
import qs from "qs"
import Country from "~/src/Utils/Entities/Country";
import CountryCard from "~/src/app/components/CountryList/CountryCard";
import Link from "next/link";
import CountryController from "~/src/Utils/Controllers/CountryController";
import {useRef} from "react";

const animationVariant = {
    hidden: {
        opacity: 0,
        x: 100
    },
    show: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: 100
    },

}
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
                countries?.map((country, index) => (
                    <motion.div
                exit={{
                    opacity: 0,
                    x: 100
                }}
                transition={{
                    delay:Math.min(index,12) * 0.05
                }}
                key={country.name.official} variants={animationVariant}
            >
                        {country.name.official}
                    </motion.div>
                    // <Grid xs={12} md={4} lg={3} item container justifyContent="center" key={country.cca2}>
                    //     <Link  href={`/country/${country.cca2}`}>
                    //         {/*<motion.div*/}
                    //         {/*    exit={{*/}
                    //         {/*        opacity: 0,*/}
                    //         {/*        x: 100*/}
                    //         {/*    }}*/}
                    //         {/*    transition={{*/}
                    //         {/*        delay:Math.min(index,12) * 0.05*/}
                    //         {/*    }}*/}
                    //         {/*    key={country.name.official} variants={animationVariant}*/}
                    //         {/*>*/}
                    //
                    //             <CountryCard info={country}/>
                    //         {/*</motion.div>*/}
                    //     </Link>
                    // </Grid>
                ))
            }
            asdf
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