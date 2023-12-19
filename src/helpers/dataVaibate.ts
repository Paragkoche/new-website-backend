import { dataValidateFunction } from "@/types/datavaibater.types";

export const InternShipProgramPostingData: dataValidateFunction = (
  req,
  res,
  next
) => {
  const {
    name,
    contactNumber,
    hoursOfWeek,
    timeSlot,
  }: { [x in string]: string } = req.body;

  if (name == "")
    return res.status(401).json({
      message: `[error] please enter valid name`,
    });
  if (contactNumber == "")
    return res.status(401).json({
      message: `[error] please enter Contact Number`,
    });
  if (contactNumber != "") {
    if (!contactNumber.startsWith("+"))
      return res.status(401).json({
        message: `[error] please enter valid Contact Number with country code`,
      });
  }
  if (hoursOfWeek == "")
    return res.status(401).json({
      message: `[error] please enter many hours per week can you commit to the internship?`,
    });
  if (hoursOfWeek != "") {
    if (parseInt(hoursOfWeek) > 0) {
      return res.status(401).json({
        message: `[error] 0 hours is not valid`,
      });
    }
    if (parseInt(hoursOfWeek) < 168) {
      return res.status(401).json({
        message: `[error] 1 - 168 hours is not valid`,
      });
    }
  }
  if (timeSlot == "")
    return res.status(401).json({
      message: `[error] please enter your preferred time slots for the internship.`,
    });

  return next();
};
