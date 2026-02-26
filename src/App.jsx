import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

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
const ArduinoDHT = lazy(() => import('./tutorial/arduino/ArduinoDHT'))
const ArduinoBME280 = lazy(() => import('./tutorial/arduino/ArduinoBME280'))
const ArduinoDS18B20 = lazy(() => import('./tutorial/arduino/ArduinoDS18B20'))
const ArduinoMQ2 = lazy(() => import('./tutorial/arduino/ArduinoMQ2'))
const ArduinoMPU6050 = lazy(() => import('./tutorial/arduino/ArduinoMPU6050'))
const ArduinoConnectivity = lazy(() => import('./tutorial/arduino/ArduinoConnectivity'))
const ArduinoWiFi = lazy(() => import('./tutorial/arduino/ArduinoWiFi'))
const ArduinoBluetooth = lazy(() => import('./tutorial/arduino/ArduinoBluetooth'))
const ArduinoBLE = lazy(() => import('./tutorial/arduino/ArduinoBLE'))
const ArduinoLoRa = lazy(() => import('./tutorial/arduino/ArduinoLoRa'))
const ArduinoEthernet = lazy(() => import('./tutorial/arduino/ArduinoEthernet'))
const InstallWindows = lazy(() => import('./tutorial/arduino/InstallWindows'))
const InstallLinux = lazy(() => import('./tutorial/arduino/InstallLinux'))
const InstallMacOS = lazy(() => import('./tutorial/arduino/InstallMacOS'))
const ProjectsBeginner = lazy(() => import('./tutorial/arduino/ProjectsBeginner'))
const ProjectsIntermediate = lazy(() => import('./tutorial/arduino/ProjectsIntermediate'))
const ProjectsAdvanced = lazy(() => import('./tutorial/arduino/ProjectsAdvanced'))

/* Project Detail Pages — Beginner */
const LedBlink = lazy(() => import('./tutorial/arduino/projects/LedBlink'))
const TrafficLight = lazy(() => import('./tutorial/arduino/projects/TrafficLight'))
const TemperatureMonitor = lazy(() => import('./tutorial/arduino/projects/TemperatureMonitor'))
const ServoSweep = lazy(() => import('./tutorial/arduino/projects/ServoSweep'))

/* Project Detail Pages — Intermediate */
const LCDWeatherStation = lazy(() => import('./tutorial/arduino/projects/LCDWeatherStation'))
const UltrasonicRangeFinder = lazy(() => import('./tutorial/arduino/projects/UltrasonicRangeFinder'))
const IRRemoteCar = lazy(() => import('./tutorial/arduino/projects/IRRemoteCar'))
const BluetoothChat = lazy(() => import('./tutorial/arduino/projects/BluetoothChat'))

/* Project Detail Pages — Advanced */
const SmartHome = lazy(() => import('./tutorial/arduino/projects/SmartHome'))
const GPSTracker = lazy(() => import('./tutorial/arduino/projects/GPSTracker'))
const PlantMonitor = lazy(() => import('./tutorial/arduino/projects/PlantMonitor'))
const SecuritySystem = lazy(() => import('./tutorial/arduino/projects/SecuritySystem'))

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
      <Navbar />
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
            <Route path="sensors/dht" element={<ArduinoDHT />} />
            <Route path="sensors/bme280" element={<ArduinoBME280 />} />
            <Route path="sensors/ds18b20" element={<ArduinoDS18B20 />} />
            <Route path="sensors/mq2" element={<ArduinoMQ2 />} />
            <Route path="sensors/mpu6050" element={<ArduinoMPU6050 />} />
            <Route path="connectivity" element={<ArduinoConnectivity />} />
            <Route path="connectivity/wifi" element={<ArduinoWiFi />} />
            <Route path="connectivity/bluetooth" element={<ArduinoBluetooth />} />
            <Route path="connectivity/ble" element={<ArduinoBLE />} />
            <Route path="connectivity/lora" element={<ArduinoLoRa />} />
            <Route path="connectivity/ethernet" element={<ArduinoEthernet />} />
            <Route path="install/windows" element={<InstallWindows />} />
            <Route path="install/linux" element={<InstallLinux />} />
            <Route path="install/macos" element={<InstallMacOS />} />
            <Route path="projects/beginner" element={<ProjectsBeginner />} />
            <Route path="projects/beginner/led-blink" element={<LedBlink />} />
            <Route path="projects/beginner/traffic-light" element={<TrafficLight />} />
            <Route path="projects/beginner/temperature-monitor" element={<TemperatureMonitor />} />
            <Route path="projects/beginner/servo-sweep" element={<ServoSweep />} />
            <Route path="projects/intermediate" element={<ProjectsIntermediate />} />
            <Route path="projects/intermediate/lcd-weather-station" element={<LCDWeatherStation />} />
            <Route path="projects/intermediate/ultrasonic-range-finder" element={<UltrasonicRangeFinder />} />
            <Route path="projects/intermediate/ir-remote-car" element={<IRRemoteCar />} />
            <Route path="projects/intermediate/bluetooth-chat" element={<BluetoothChat />} />
            <Route path="projects/advanced" element={<ProjectsAdvanced />} />
            <Route path="projects/advanced/smart-home" element={<SmartHome />} />
            <Route path="projects/advanced/gps-tracker" element={<GPSTracker />} />
            <Route path="projects/advanced/plant-monitor" element={<PlantMonitor />} />
            <Route path="projects/advanced/security-system" element={<SecuritySystem />} />
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
