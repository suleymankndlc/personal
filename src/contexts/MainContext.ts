import { createContext } from "react";

interface IMainContext {
  theme: string;
  changeTheme: () => void;
}

const MainContext = createContext<Partial<IMainContext>>({})

export default MainContext;