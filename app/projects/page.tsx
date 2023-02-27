import React from "react";
import Image from "next/image";
import Screen1 from "public/Images/SnagaPrirode/screen1.png"

export default function Projects() {
  return (
    <div className="flex flex-row 2xl:flex-nowrap md:flex-wrap gap-20 px-14  w-screen">
      <div className="flex flex-col gap-16 mt-10 max-w-lg">
        <h1 className="text-6xl">Snaga prirode</h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, omnis.
          Dolor, sint nam. Iusto corporis totam, rem mollitia quaerat, culpa
          sapiente omnis voluptatem earum fugit autem tenetur esse veniam quis
          repellat nostrum animi laboriosam quibusdam error delectus magnam ab
          dolor? Nam ab quae architecto laudantium dolorum odio, error velit
          adipisci animi! Dolore, quasi in! Dignissimos quo, sunt labore dolore
          pariatur fuga, ipsa laboriosam dolor non culpa nihil itaque sapiente
          rem. Delectus architecto incidunt eum recusandae dolores accusantium
          distinctio maiores quis.
        </p>
        <div className="flex flex-col gap-8">
        <div className="flex flex-row justify-between gap-6 items-center w-1/2">
          <h2 className="text-xl self-start">Check it out here</h2>
          <h2>icon</h2>
        </div>
        <div className="flex flex-row justify-between gap-6 items-center w-1/2">
          <h2 className="text-xl self-start">Check the code here</h2>
          <h2>icon</h2>
        </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-16 mt-20 w-full">
        <Image className="w-9/12 rounded-lg" src={Screen1} width={1000} height={600} alt="screenshotMobile"/>
        <div className="flec flex-col gap-16 items-center w-1/3">
          <h1 className="text-2xl text-center">Technologies</h1>
          <div className="flex flex-rox justify-between mt-6 items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-lg">React</h1>
              <h1>Icon</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-lg">AdobeXD</h1>
              <h1>Icon</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-lg">CSS</h1>
              <h1>Icon</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
