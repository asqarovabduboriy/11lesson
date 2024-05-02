import axios from "../Api/Api"
import { useState, useEffect } from "react"

export  const Usefect = (api, ...rest) => { 

    const [data, setdata] = useState(null)

    useEffect(() => {
       axios
       .get(api)
       .then(res =>setdata(res))
       .catch(err=> console.log(err))

    }, [...rest])
  
    return{data}
}

