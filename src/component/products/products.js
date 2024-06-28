import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setProduct } from '../../redux/productSlice'

const products = () => {
    const dispatch = useDispatch()
    const fetchData = async () => {
        try {
            const response = await axiosInstance.get("/products");
            const data = response.data;
            dispatch(setProduct(data))
        } catch (error) {
            setError(error.message);
            console.error("Error fetching data:", error);
        }
    };
    fetchData();
}

export default products
