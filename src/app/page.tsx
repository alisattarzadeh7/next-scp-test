import Image from 'next/image'
import Country from "~/src/Utils/Entities/Country";
import {useAllCountries} from "~/src/Utils/Queries/CountryQueries";
import {useInView} from "framer-motion";
import qs from "qs"
import CountryList from "~/src/app/components/CountryList";
export default function Home() {




  // const [countries, setCountries] = useState<Country[]>([])
  // const [countryList,setCountryList] = useState<Country[]>()
  // const {data} = useAllCountries(qs.stringify({fields: 'name,flags,cca2'}), {
  //   onSuccess: (d) => setCountryList(d)
  // })

  // const ref = useRef(null)
  // const isInView = useInView(ref)
  // const [, startTransition] = useTransition();
  //
  // console.log('this component is rerendering')
  //
  // useEffect(() => {
  //   if (isInView && countryList && countries.length !== countryList.length)
  //     setCountries(prevState => [...prevState, ...countryList.slice(prevState.length, prevState.length + 12)])
  // }, [isInView])


  return (
      <div>
        <CountryList/>
      </div>
  )
}
