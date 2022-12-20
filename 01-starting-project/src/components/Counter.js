import {useSelector,useDispatch} from "react-redux"

import classes from './Counter.module.css';

const Counter = () => {
 const counter= useSelector(state=>state.counter)
 const show=useSelector(state=>state.isShow)
 const dispatch=useDispatch()

 const incrementhandler=(value)=>{
  dispatch({type:"increment",payload:value})
 }

 const decrementhandler=()=>{
dispatch({type:"decrement"})
 }
  const toggleCounterHandler = () => {
    dispatch({type:"toggle"})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={()=>incrementhandler(1)}>INC</button>
        <button onClick={()=>incrementhandler(5)}>INC by 5</button>
        <button onClick={decrementhandler}>DEC</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
