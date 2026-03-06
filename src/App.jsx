import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


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

/* Raspberry Pi */
const RaspberryPiHome = lazy(() => import('./tutorial/raspberrypi/RaspberryPiHome'))
const WhatIsRaspberryPi = lazy(() => import('./tutorial/raspberrypi/WhatIsRaspberryPi'))
const RpiHistory = lazy(() => import('./tutorial/raspberrypi/RpiHistory'))
const RpiFoundation = lazy(() => import('./tutorial/raspberrypi/RpiFoundation'))
const RpiVersions = lazy(() => import('./tutorial/raspberrypi/RpiVersions'))
const RpiPi3 = lazy(() => import('./tutorial/raspberrypi/RpiPi3'))
const RpiPi4 = lazy(() => import('./tutorial/raspberrypi/RpiPi4'))
const RpiPi5 = lazy(() => import('./tutorial/raspberrypi/RpiPi5'))
const RpiPiZero = lazy(() => import('./tutorial/raspberrypi/RpiPiZero'))
const RpiComparison = lazy(() => import('./tutorial/raspberrypi/RpiComparison'))
const RpiProgramming = lazy(() => import('./tutorial/raspberrypi/RpiProgramming'))
const RpiPython = lazy(() => import('./tutorial/raspberrypi/RpiPython'))
const RpiGPIO = lazy(() => import('./tutorial/raspberrypi/RpiGPIO'))
const RpiCProg = lazy(() => import('./tutorial/raspberrypi/RpiCProg'))
const RpiSamples = lazy(() => import('./tutorial/raspberrypi/RpiSamples'))
const RpiWebServer = lazy(() => import('./tutorial/raspberrypi/RpiWebServer'))
const RpiHttpMethods = lazy(() => import('./tutorial/raspberrypi/RpiHttpMethods'))
const RpiHtmlForm = lazy(() => import('./tutorial/raspberrypi/RpiHtmlForm'))
const RpiPhpHandling = lazy(() => import('./tutorial/raspberrypi/RpiPhpHandling'))
const RpiMysqlDatabase = lazy(() => import('./tutorial/raspberrypi/RpiMysqlDatabase'))
const RpiRealtimeMonitoring = lazy(() => import('./tutorial/raspberrypi/RpiRealtimeMonitoring'))

/* ESP32 */
const ESP32Home = lazy(() => import('./tutorial/esp32/ESP32Home'))
const WhatIsESP32 = lazy(() => import('./tutorial/esp32/WhatIsESP32'))
const ESP32Protocols = lazy(() => import('./tutorial/esp32/ESP32Protocols'))
const ESP32Sensors = lazy(() => import('./tutorial/esp32/ESP32Sensors'))
const ESP32Modules = lazy(() => import('./tutorial/esp32/ESP32Modules'))

/* ESP32 Protocol Pages */
const WifiProtocol = lazy(() => import('./tutorial/esp32/protocols/WifiProtocol'))
const MQTTProtocol = lazy(() => import('./tutorial/esp32/protocols/MQTTProtocol'))
const BluetoothProtocol = lazy(() => import('./tutorial/esp32/protocols/BluetoothProtocol'))
const BLEProtocol = lazy(() => import('./tutorial/esp32/protocols/BLEProtocol'))
const ESPNOWProtocol = lazy(() => import('./tutorial/esp32/protocols/ESPNOWProtocol'))
const WebSocketProtocol = lazy(() => import('./tutorial/esp32/protocols/WebSocketProtocol'))

/* ESP32 Module Pages */
const WROOM32Module = lazy(() => import('./tutorial/esp32/modules/WROOM32Module'))
const WROVERModule = lazy(() => import('./tutorial/esp32/modules/WROVERModule'))
const ESP32S2Module = lazy(() => import('./tutorial/esp32/modules/ESP32S2Module'))
const ESP32S3Module = lazy(() => import('./tutorial/esp32/modules/ESP32S3Module'))
const ESP32C3Module = lazy(() => import('./tutorial/esp32/modules/ESP32C3Module'))
const ESP32CAMModule = lazy(() => import('./tutorial/esp32/modules/ESP32CAMModule'))

/* ESP32 Sensor Pages */
const DHT11Sensor = lazy(() => import('./tutorial/esp32/sensors/DHT11Sensor'))
const UltrasonicSensor = lazy(() => import('./tutorial/esp32/sensors/UltrasonicSensor'))
const PIRSensor = lazy(() => import('./tutorial/esp32/sensors/PIRSensor'))
const LDRSensor = lazy(() => import('./tutorial/esp32/sensors/LDRSensor'))
const GasSensor = lazy(() => import('./tutorial/esp32/sensors/GasSensor'))

/* ESP32 features Pages */
const ADCand = lazy(() => import('./tutorial/esp32/features/ADCandDAC'))
const Bluetooth = lazy(() => import('./tutorial/esp32/features/BluetoothSupport'))
const BuiltIn = lazy(() => import('./tutorial/esp32/features/BuiltInWiFi'))
const DualCore = lazy(() => import('./tutorial/esp32/features/DualCoreProcessor'))
const GPIO = lazy(() => import('./tutorial/esp32/features/GPIOPins'))
const Low = lazy(() => import('./tutorial/esp32/features/LowPowerConsumption'))
const PWM = lazy(() => import('./tutorial/esp32/features/PWMControl'))

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
            <Route path="introduction" element={<WhatIsRaspberryPi />} />
            <Route path="introduction/history" element={<RpiHistory />} />
            <Route path="introduction/foundation" element={<RpiFoundation />} />
            <Route path="versions" element={<RpiVersions />} />
            <Route path="versions/pi3" element={<RpiPi3 />} />
            <Route path="versions/pi4" element={<RpiPi4 />} />
            <Route path="versions/pi5" element={<RpiPi5 />} />
            <Route path="versions/pi-zero" element={<RpiPiZero />} />
            <Route path="versions/comparison" element={<RpiComparison />} />
            <Route path="programming" element={<RpiProgramming />} />
            <Route path="programming/python" element={<RpiPython />} />
            <Route path="programming/gpio" element={<RpiGPIO />} />
            <Route path="programming/c" element={<RpiCProg />} />
            <Route path="programming/samples" element={<RpiSamples />} />
            <Route path="web-server" element={<RpiWebServer />} />
            <Route path="web-server/http-methods" element={<RpiHttpMethods />} />
            <Route path="web-server/html-form" element={<RpiHtmlForm />} />
            <Route path="web-server/php-handling" element={<RpiPhpHandling />} />
            <Route path="web-server/mysql-database" element={<RpiMysqlDatabase />} />
            <Route path="web-server/realtime-monitoring" element={<RpiRealtimeMonitoring />} />
          </Route>

          {/* ESP32 */}
          <Route path="/tutorial/esp32" element={<TutorialLayout category="esp32" />}>
            <Route index element={<ESP32Home />} />
            <Route path="introduction" element={<WhatIsESP32 />} />
            <Route path="modules" element={<ESP32Modules />} />
            <Route path="modules/wroom32" element={<WROOM32Module />} />
            <Route path="modules/wrover" element={<WROVERModule />} />
            <Route path="modules/s2" element={<ESP32S2Module />} />
            <Route path="modules/s3" element={<ESP32S3Module />} />
            <Route path="modules/c3" element={<ESP32C3Module />} />
            <Route path="modules/cam" element={<ESP32CAMModule />} />
            <Route path="protocols" element={<ESP32Protocols />} />
            <Route path="protocols/wifi" element={<WifiProtocol />} />
            <Route path="protocols/mqtt" element={<MQTTProtocol />} />
            <Route path="protocols/bluetooth" element={<BluetoothProtocol />} />
            <Route path="protocols/ble" element={<BLEProtocol />} />
            <Route path="protocols/espnow" element={<ESPNOWProtocol />} />
            <Route path="protocols/websocket" element={<WebSocketProtocol />} />
            <Route path="sensors" element={<ESP32Sensors />} />
            <Route path="sensors/dht11" element={<DHT11Sensor />} />
            <Route path="sensors/ultrasonic" element={<UltrasonicSensor />} />
            <Route path="sensors/pir" element={<PIRSensor />} />
            <Route path="sensors/ldr" element={<LDRSensor />} />
            <Route path="sensors/gas" element={<GasSensor />} />
            <Route path="features/adcanddac" element={<ADCand  />} />
            <Route path="features/bluetooth" element={<Bluetooth />} />
            <Route path="features/builtin" element={<BuiltIn />} />
            <Route path="features/dual" element={<DualCore />} />
            <Route path="features/gpio" element={<GPIO />} />
            <Route path="features/lowepower" element={<Low />} />
            <Route path="features/pwm" element={<PWM />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<ComingSoon />} />

        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}
