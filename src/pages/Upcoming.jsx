import React from "react";
import AllTasks from "./AllTasks";
import { addDays, format } from "date-fns";

const Upcoming = () => {
  const upcomingDate = format(addDays(new Date(), 7), "yyyy-MM-dd");
  return <AllTasks filterDate={upcomingDate} />;
};

export default Upcoming;