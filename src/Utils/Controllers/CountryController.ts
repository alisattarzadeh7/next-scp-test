import Country from "~/src/Utils/Entities/Country";
import Http from "~/src/Utils/Facades/Request";

export default class CountryController extends Country{
    static async  getAllCountries(params?:string):Promise<Country[]>{
       const res = await Http.get(`/all?${params}`)
       return  res.data.map((c:Country)=>Country.create(c))
    }
    static async  getCountriesByName(name?:string):Promise<Country[]>{
       const res = await Http.get(`/name/${name}`)
       return  res.data.map((c:Country)=>Country.create(c))
    }
}