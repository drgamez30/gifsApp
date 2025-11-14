import React from "react";
import { Header } from './components/Header';
import { events } from "./data/events";
import { Events } from "./components/Events";

export const App = () => {
  const dataEvents = events;

  return (
    <>
      {dataEvents.map((events) => {
        return (
          <Events 
            key={event.id_evento}
            event={event.evento}
            starDate={event.fecha_inicio}
            endDate={event.fecha_final}
          />
        );
      })}
    </>
  );
};