import axios from 'axios'

const URL = "https://jsonplaceholder.typicode.com/todos"

export const axiosOnce = axios.create({
  withCredentials: true,
  headers: {
    Authorization: `bearer ${localStorage.getItem("accessToken")}`,
  }
})

const getClient = () => {
  return axiosOnce
}

export const get = async () => {
  return (await getClient().post(URL, {})).data
}

export const removeToken = () => {
  delete getClient().defaults.headers.common.Authorization
}

