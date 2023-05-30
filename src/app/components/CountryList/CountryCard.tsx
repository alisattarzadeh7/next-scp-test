"use client"

import React from "react";
import Country from "~/src/Utils/Entities/Country";
import CustomCard from "~/components/CustomCard";
import {motion, useInView} from "framer-motion"


interface ICountryCardProps{
    info:Country
}

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

const CountryCard:React.FC<ICountryCardProps>  = ({info})=>{
    return (
        <motion.div
            initial="hidden"
            onClick={()=>alert('hii')}
            animate="show"
            exit={{
                opacity: 0,
                x: 100
            }}
            key={info.name.official} variants={animationVariant}
        >
        <CustomCard sx={{width:250}} title={info.name.official} image={info.flags.png} >
            test
        </CustomCard>
        </motion.div>
    )
}


export default CountryCard