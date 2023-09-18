function minDaysToEmpty(C, L) {
  let day = 1;
  let capacity = C;
  while (capacity ) {
   
    capacity = capacity - day; //end of the day
    if (capacity <= 0) {
        // Check if the tank is empty after removing water
        return day;
      }
  
    day++; //second day
    capacity = capacity + L; //starting of second day

    if (capacity > C) {
      //check overflow
      capacity = C;
    }

   
  }
  return day;
}

console.log(minDaysToEmpty(6, 1));