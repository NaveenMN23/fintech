import { requestType } from "@/constants/requestType";
import { api } from "../api";
import { Endpoints } from "@/constants/endpoint";

export const bankingApiSlice = api
.enhanceEndpoints({})
.injectEndpoints({
  endpoints: (build) => ({
    getQuickTransfer:build.query({
      query:() => ({
        method: requestType.GET,
        url: Endpoints.quickTransfer
      })
    })
  })
})

export const {
  useLazyGetQuickTransferQuery
} = bankingApiSlice
