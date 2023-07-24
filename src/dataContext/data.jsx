import { createContext } from "react";

import mainConfig from "../config";

export const DataContext = createContext();

export const DataProvider = ({ children }) => <DataContext.Provider value={ mainConfig }> { children } </DataContext.Provider>;