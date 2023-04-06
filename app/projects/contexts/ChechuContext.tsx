import React from "react";

interface ContextProps {
  carouselToggle: boolean;
  setCarouselToggle: React.Dispatch<boolean>;
}

const InitialValues: ContextProps = {
  carouselToggle: true,
  setCarouselToggle: () => undefined,
};

interface WithChildProps {
  children: JSX.Element;
}

const context = React.createContext(InitialValues);

const { Provider } = context;

export const ChechuContextProvider = ({ children }: WithChildProps) => {
const[carouselToggle, setCarouselToggle ] = React.useState(InitialValues.carouselToggle)
  const values = {
    carouselToggle,
    setCarouselToggle
  };

  return <Provider value={values}>{children}</Provider>;
};

export const useChechuContext = () => {
        const {...state} = React.useContext(context)
        return {...state}
}
