import React, { useEffect } from 'react'
import { userAppDispatch } from '../store/store'
import { counter1Selecttor, increase1, setValuesAsync } from '../store/slice/counter1Slice'
import { useSelector } from 'react-redux'

type Props = {}

export default function Page1({}: Props) {
    const dispatch = userAppDispatch()
    const counter1Reducer = useSelector(counter1Selecttor)
    
  return (
    <div>
        <h4>Page1</h4>
        <button onClick={()=>{dispatch(increase1())}}>counter1 = {counter1Reducer.counter1} </button>
        <button onClick={()=>{dispatch(setValuesAsync(-2))}}>counter1 = {counter1Reducer.counter1} </button>
    </div>
  )
}