import React from "react";
import AllTasks from "./AllTasks";
import { format } from "date-fns";

const Today = () => {
  const today = format(new Date(), "yyyy-MM-dd");
  return <AllTasks filterDate={today} />;
};

export default Today;