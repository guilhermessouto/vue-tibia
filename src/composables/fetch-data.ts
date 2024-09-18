import { useQuery } from "@tanstack/vue-query"

import api from "../utils/api"

interface Props {
  key: string
  url: string
}

type ResponseData<T> = T

const fetchData = <T>({ key, url }: Props) => {
  return  useQuery<ResponseData<T>>({
    queryKey: [key],
    queryFn: async () => {
      const { data } = await api.get<ResponseData<T>>(url)

      return data
    }
  })
}

export default fetchData