import { createContext, useContext, useState } from "react";

const CarContext = createContext([0, () => {}]);

export function CarProvider({ children }: any) {
  const [total, setTotal] = useState(0);

  const toggleTotal = () => {
    setTotal(total + 1);
  };

  return (
    <CarContext.Provider value={[total, toggleTotal]}>
      {children}
    </CarContext.Provider>
  );
}
export function useCarContext() {
  return useContext(CarContext);
}
