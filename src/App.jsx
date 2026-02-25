import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

/* ── Lazy-loaded pages ── */
const TutorialHome = lazy(() => import('./pages/TutorialHome'))
const ComingSoon = lazy(() => import('./pages/ComingSoon'))

/* Arduino */
const TutorialLayout = lazy(() => import('./components/TutorialLayout'))
const ArduinoHome = lazy(() => import('./tutorial/arduino/ArduinoHome'))
const WhatIsArduino = lazy(() => import('./tutorial/arduino/WhatIsArduino'))
const ArduinoModules = lazy(() => import('./tutorial/arduino/ArduinoModules'))
const ArduinoRelay = lazy(() => import('./tutorial/arduino/ArduinoRelay'))
const ArduinoPIR = lazy(() => import('./tutorial/arduino/ArduinoPIR'))
const ArduinoRFID = lazy(() => import('./tutorial/arduino/ArduinoRFID'))
const ArduinoRTC = lazy(() => import('./tutorial/arduino/ArduinoRTC'))
const ArduinoUltrasonic = lazy(() => import('./tutorial/arduino/ArduinoUltrasonic'))
const ArduinoSensors = lazy(() => import('./tutorial/arduino/ArduinoSensors'))
const ArduinoConnectivity = lazy(() => import('./tutorial/arduino/ArduinoConnectivity'))
const InstallWindows = lazy(() => import('./tutorial/arduino/InstallWindows'))
const InstallLinux = lazy(() => import('./tutorial/arduino/InstallLinux'))
const InstallMacOS = lazy(() => import('./tutorial/arduino/InstallMacOS'))
const ProjectsBeginner = lazy(() => import('./tutorial/arduino/ProjectsBeginner'))
const ProjectsIntermediate = lazy(() => import('./tutorial/arduino/ProjectsIntermediate'))
const ProjectsAdvanced = lazy(() => import('./tutorial/arduino/ProjectsAdvanced'))

/* Raspberry Pi & ESP32 placeholders */
const RaspberryPiHome = lazy(() => import('./tutorial/raspberrypi/RaspberryPiHome'))
const ESP32Home = lazy(() => import('./tutorial/esp32/ESP32Home'))

/* ── Loading fallback ── */
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-[3px] border-surface-700 border-t-primary-500 animate-spin" />
        <div className="mt-4 text-surface-400 text-sm font-medium text-center">Loading…</div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<TutorialHome />} />

          {/* Arduino nested routes */}
          <Route path="/tutorial/arduino" element={<TutorialLayout category="arduino" />}>
            <Route index element={<ArduinoHome />} />
            <Route path="what-is-arduino" element={<WhatIsArduino />} />
            <Route path="modules" element={<ArduinoModules />} />
            <Route path="modules/relay" element={<ArduinoRelay />} />
            <Route path="modules/pir" element={<ArduinoPIR />} />
            <Route path="modules/rfid" element={<ArduinoRFID />} />
            <Route path="modules/rtc" element={<ArduinoRTC />} />
            <Route path="modules/ultrasonic" element={<ArduinoUltrasonic />} />
            <Route path="sensors" element={<ArduinoSensors />} />
            <Route path="connectivity" element={<ArduinoConnectivity />} />
            <Route path="install/windows" element={<InstallWindows />} />
            <Route path="install/linux" element={<InstallLinux />} />
            <Route path="install/macos" element={<InstallMacOS />} />
            <Route path="projects/beginner" element={<ProjectsBeginner />} />
            <Route path="projects/intermediate" element={<ProjectsIntermediate />} />
            <Route path="projects/advanced" element={<ProjectsAdvanced />} />
          </Route>

          {/* Raspberry Pi */}
          <Route path="/tutorial/raspberry-pi" element={<TutorialLayout category="raspberrypi" />}>
            <Route index element={<RaspberryPiHome />} />
          </Route>

          {/* ESP32 */}
          <Route path="/tutorial/esp32" element={<TutorialLayout category="esp32" />}>
            <Route index element={<ESP32Home />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </Suspense>
    </div>
  )
}
