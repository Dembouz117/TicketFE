import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  Input,
  InputLabel,
  FormControl,
  FormHelperText,
  Typography,
  useTheme,
  TextField,
} from "@mui/material";
import { East, West, Add } from "@mui/icons-material";
import FormStepIndicator from "../../components/FormStepIndicator";
import FlexBetween from "../../components/FlexBetween";

import ScheduleSlot from "../../components/ScheduleSlot";
import { useAppSelector, useAppDispatch } from "../../state/hooks";

import {
  setFormDesc,
  setFormLocation,
  setFormPricing,
  setFormSchedules,
  setFormRoyalties,
  setFormTitle,
  setMode,
  selectFormSlice,
} from "../../state/";

const FormStep1 = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  const theme = useTheme();
  const [dateValue, setDateValue] = useState("");
  const [slotHeight, setSlotHeight] = useState(0);

  useEffect(() => {
    setActive(pathname.substring(1));
  }, []);

  const dispatch = useAppDispatch();
  const formSelected = useAppSelector((state) => state.formSlice);
  // console.log("The title is " + formSelected.title);

  console.log(formSelected.pricing);

  const addSlotHandler = (ParaHeight: any): void => {
    setSlotHeight(ParaHeight);
  };

  const styledHeight =
    slotHeight / 50 < 3
      ? "calc(30vh" + "+" + slotHeight.toString() + "px)"
      : "30vh";
  const styledOverflow = slotHeight / 50 < 3 ? "hidden" : "auto";

  return (
    <Box
      sx={{
        display: "flex",
        margin: "0 0 0 10",
        alignItems: "center",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <FormStepIndicator />
      <Box
        sx={{
          margin: "0 100 0 100",
          backgroundColor: theme.palette.background.alt,
          width: "60%",
          height: "80vh",
          transition: "height 1s linear",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "calc(50vh" + slotHeight.toString() + "px)",
            backgroundColor: theme.palette.primary[300],
            mt: 10,
            alignItems: "center",
            justifyContent: "center",
            ml: "10px",
            flexDirection: "column",
            width: "90%",
            paddingBottom: "20px",
            transition: "height 1s linear",
          }}
        >
          <Box
            sx={{
              width: "100%",
              position: "relative",
              height: "30vh",
              backgroundColor: theme.palette.primary[300],
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h1"
              mb={1}
              sx={{ fontWeight: "bold", wordWrap: "break-word" }}
            >
              Where are you holding your big event?
            </Typography>
            <FlexBetween sx={{ width: "100%", justifyContent: "center" }}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="outline-location">*Required</InputLabel>
                <Input
                  required
                  id="outline-location"
                  placeholder="National Stadium"
                  sx={{ width: "80%", height: "4rem" }}
                  onChange = {(event) => {
                    dispatch(setFormLocation(event.target.value));
                    console.log(formSelected.location);
                  }}
                  value = {formSelected.location}
                />
                <FormHelperText id="outline-location-helper">
                  Location
                </FormHelperText>
              </FormControl>
            </FlexBetween>
          </Box>
          <Box
            sx={{
              width: "100%",
              position: "relative",
              height: styledHeight,
              backgroundColor: theme.palette.primary[300],
              overflow: styledOverflow,
            }}
          >
            <Typography
              variant="h1"
              mb={1}
              sx={{ fontWeight: "bold", wordWrap: "break-word" }}
            >
              List your schedules.
            </Typography>

            <ScheduleSlot onIncrease={addSlotHandler} />
            
          </Box>

          <FlexBetween gap="2rem">
            <Button
              variant="contained"
              size="large"
              sx={{ marginTop: "2rem" }}
              onClick={() => {
                navigate("/create/");
              }}
              sx={{
                backgroundColor: theme.palette.secondary[200],
              }}
            >
              <West />
              Prev
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{ marginTop: "2rem" }}
              onClick={() => {
                navigate("/create/formstep2");
              }}
              sx={{
                backgroundColor: theme.palette.secondary[200],
              }}
            >
              Next
              <East />
            </Button>
          </FlexBetween>
        </Box>
      </Box>
    </Box>
  );
};

export default FormStep1;
