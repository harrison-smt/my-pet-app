"use client";

import StatsSection from "./StatsSection";
import ActionButtonSection from "./ActionButtonSection";
import LogSection from "./LogSection";
import ScreenSection from "./ScreenSection";
import { jersey20 } from "./fonts/fonts";
import { usePetContext } from "./PetContext";
import { useEffect, useState } from "react";
import Header from "./Header";

export default function Home() {
  const { name, setStats, triggerPrompt } = usePetContext();
  const [petDescriptor, setPetDescriptor] = useState<string>("");

  const statToDescriptor: { [key: string]: string } = {
    Hunger: "hungry",
    Happiness: "sad",
    Sleep: "sleepy",
    Hygiene: "stinky",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => {
        const updatedStats = { ...prevStats };
        let newDescriptor = "normal";
        for (const key in updatedStats) {
          const randomDecrement = Math.floor(Math.random() * 3);
          const newStat = updatedStats[key] - randomDecrement;

          if (newStat <= 5) {
            triggerPrompt("urgent", `${name} is ${statToDescriptor[key]}!!!`);
          } else if (newStat <= 20) {
            triggerPrompt(
              "normal",
              `${name} is getting ${statToDescriptor[key]}...`
            );
            newDescriptor = statToDescriptor[key];
          }

          updatedStats[key] = Math.max(0, newStat);
        }

        setPetDescriptor(newDescriptor);
        return updatedStats;
      });
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div
      className={`${jersey20.className} h-screen mt-3 text-center lg:overflow-hidden`}
    >
      <Header />
      <main className="lg:flex lg:flex-row h-full mx-5 justify-center">
        <ScreenSection petDescriptor={petDescriptor} />
        <div className="flex flex-col lg:ml-16">
          <StatsSection />
          <ActionButtonSection />
          <LogSection />
        </div>
      </main>
    </div>
  );
}