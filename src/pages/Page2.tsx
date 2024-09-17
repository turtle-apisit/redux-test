import React from 'react'
import { userAppDispatch } from '../store/store'
import { useSelector } from 'react-redux'
import { counter2Selecttor,increase2, setValuesAsync } from '../store/slice/counter2Slice'

type Props = {}

export default function Page2({}: Props) {
    const dispatch = userAppDispatch()
    const counter2Reducer = useSelector(counter2Selecttor)
    return (
        <div>
            <h4>Page2</h4>
            <button onClick={()=>{dispatch(increase2())}}>counter2 = {counter2Reducer.counter2} </button>
            <button onClick={()=>{dispatch(setValuesAsync(-2))}}>counter1 = {counter2Reducer.counter2} </button>
        </div>
      )
}