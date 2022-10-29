import { DyteMeeting } from "@dytesdk/react-ui-kit";
import { DyteProvider, useDyteClient } from "@dytesdk/react-web-core";
import React, { useEffect } from "react";

export default function Dyte() {
  const [dyteMeeting, initMeeting] = useDyteClient();

  useEffect(() => {
    initMeeting({
      roomName: process.env.DYTE_ROOM_NAME,
      authToken: process.env.DYTE_AUTH_TOKEN,
      defaults: {
        audio: false,
        video: false,
      },
    });
  }, []);

  return (
    <DyteProvider value={dyteMeeting}>
      <div style={{ height: "100vh", width: "100vw" }}>
        <DyteMeeting meeting={dyteMeeting} mode="fill" />
      </div>
    </DyteProvider>
  );
}
