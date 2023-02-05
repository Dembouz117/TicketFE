import { DateTimePicker } from "@mui/x-date-pickers";
import { Button, TextField, useTheme } from "@mui/material";
import { Add, Remove, StackedBarChart } from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useEffect, useState } from "react";


let SlotHeight:any;
interface PropType{
  onIncrease: (a: any) => void;
}

const ScheduleSlot = ({onIncrease}: PropType) => {
  const [dateValFrom, setDateValFrom] = useState<Date | null>(new Date());
  const [dateValTo, setDateValTo] = useState<Date | null>(new Date());
  const [identifier, setIdentifier] = useState(1);
  const initialInput = [{
    dateFrom: new Date(),
    dateTo: new Date(),
    id: 0
  }]
  const [number, setNumber] = useState(initialInput);
  const theme = useTheme();

  useEffect(() => {
    SlotHeight = number.length*60;
  },[number]);
 
  const addSlotHelper = (event:any) => {
    event.preventDefault();
    setNumber((prevState) => {
      // let objectIds = prevState.map(el => el.id);
      // const maxId = Math.max(...objectIds);

      return [
        ...prevState,
        {
        dateFrom: new Date(),
        dateTo: new Date(),
        id: identifier
    }
      ]
    });
    onIncrease(SlotHeight);
    setIdentifier(prev => prev + 1);
  }

  const removeSlotHelper = (event:any) => {
    event.preventDefault();
    console.log(event);
    setNumber((prevState) => {
    return [
      ...prevState
    ].slice(0, prevState.length - 1)
    });
    //.filter(el => el.target.id !==)
    onIncrease(SlotHeight);
    setIdentifier(prev => prev - 1);
  }


  return (
    <FlexBetween sx = {{flexDirection: "column"}}>

    {number.map((el, idx) => {
      return (
        <FlexBetween sx = {{width: "100%",justifyContent:"center", position: "relative", marginBottom: "10px"}} gap = {5} key = {el.id.toString()}>
        <DateTimePicker
        label="Start Date"
        value = {dateValFrom}
        onChange={(newValue) => {
          setDateValFrom(newValue);
         
        }}
        renderInput={(params) => <TextField {...params} />}
      />
        <DateTimePicker
        label="End Date"
        value = {dateValTo}
        onChange={(newValue) => {
          // setDateValTo(newValue !== null ? newValue : "");
          setDateValTo(newValue)
          console.log(dateValTo);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      {idx == 0 ? 
      <Button 
          variant = "contained"
          sx = {{
          borderRadius:"50%", 
          width:"40px", 
          height:"40px",
          backgroundColor:theme.palette.secondary[200],
        }}
        id = {el.id.toString()}
        >
      <Add onClick = {addSlotHelper} id = {el.id.toString()}/>
    </Button> 
    : 
    <Button
    variant = "contained"
    sx = {{
    borderRadius:"50%", 
    width:"40px", 
    height:"40px",
    backgroundColor:theme.palette.secondary[200],
  }}


    >
      <Remove onClick = {removeSlotHelper} id = {idx.toString()}/>
    </Button>
    }
      </FlexBetween>
      )
    })}
    </FlexBetween>
  )
}

export default ScheduleSlot;

export {SlotHeight};