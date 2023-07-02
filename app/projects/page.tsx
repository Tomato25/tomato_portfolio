"use client";

import NtuRise from "./components/ntuRise";
import Head from 'next/head'
import Tomic_code_portfolio from "./components/portfolio";
import Snaga_prirode from "./components/snaga_prirode";
import PageWrapper from "./page-wrapper";
import { PortfolioContextProvider } from "./contexts/PortfolioContext";
import { ChechuContextProvider } from "./contexts/ChechuContext";
import { NtuRiseContextProvider } from "./contexts/NtuRiseContext";
import { SnagaPrirodeContextProvider } from "./contexts/SnagaPrirodeContext";
import { WellbeingAppContextProvider } from "./contexts/WellbeingAppContext";
import WellbeingApp from "./components/WellbeingApp";
import WellbeingApplication from "./components/WellbeingApp";
import Ecommerce from "./components/ecommerce";

export default function Projects() {
  return (
    
    <WellbeingAppContextProvider>
      <SnagaPrirodeContextProvider>
        <NtuRiseContextProvider>
          <ChechuContextProvider>
            <PortfolioContextProvider>         
                <div className="flex flex-col justify-center items-center gap-8  mb-16">
                  <Ecommerce />
                  <Tomic_code_portfolio key="component1" />
                  <Snaga_prirode key="component2" />
                  <NtuRise key="component3" />
                  <WellbeingApplication />
                </div>
            </PortfolioContextProvider>
          </ChechuContextProvider>
        </NtuRiseContextProvider>
      </SnagaPrirodeContextProvider>
    </WellbeingAppContextProvider>
  );
}
