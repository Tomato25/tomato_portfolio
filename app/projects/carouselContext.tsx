import React from "react";

interface ContextProps {
  carouselToggle: boolean;
  setCarouselToggle: React.Dispatch<boolean>;
}

const InitialValues: ContextProps = {
  carouselToggle: false,
  setCarouselToggle: () => undefined,
};

interface WithChildProps {
  children: JSX.Element;
}

const context = React.createContext(InitialValues);

const { Provider } = context;

export const ContextProvider = ({ children }: WithChildProps) => {
const[carouselToggle, setCarouselToggle ] = React.useState(InitialValues.carouselToggle)
  const values = {
    carouselToggle,
    setCarouselToggle
  };

  return <Provider value={values}>{children}</Provider>;
};

export const useContext = () => {
        const {...state} = React.useContext(context)
        return {...state}
}
