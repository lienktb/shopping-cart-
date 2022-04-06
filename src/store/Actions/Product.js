import {
  ADD_QUALITY,
  GET_PRODUCT,
  SET_SEARCH,
  SUB_QUALITY
} from "../Constants/Product";

export const subQuality = (payload) => ({
  type: SUB_QUALITY,
  payload,
});

export const addQuality = (payload) => ({
  type: ADD_QUALITY,
  payload,
});

export const getProduct = (payload) => ({
  type: GET_PRODUCT,
  payload,
});

export const setSearch = payload=>({
    type: SET_SEARCH,
    payload
})