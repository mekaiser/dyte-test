import { DyteMeeting } from "@dytesdk/react-ui-kit";
import { DyteProvider, useDyteClient } from "@dytesdk/react-web-core";
import React, { useEffect } from "react";

export default function Meeting({roomName, authToken}) {
  const [dyteMeeting, initMeeting] = useDyteClient();

  useEffect(() => {
    initMeeting({
      roomName: roomName,
      authToken: authToken,
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