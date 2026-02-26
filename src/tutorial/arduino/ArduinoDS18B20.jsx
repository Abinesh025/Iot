import ModuleContent from "../../components/ModuleContent";
import dss1 from "../../assets/ArdinoSensor/DS1/ds-1.jpg";
import dss2 from "../../assets/ArdinoSensor/DS1/ds-2.jpg";
import dss3 from "../../assets/ArdinoSensor/DS1/ds-3.png";
import dss4 from "../../assets/ArdinoSensor/DS1/ds-4.png";

// Replace these with your own images
const ds1 = dss1;
const ds2 = dss2;
const ds3 = dss3;
const ds4 = dss4;

export default function ArduinoDS18B20() {
    const images = [ds1, ds2, ds3];

    const description =
        "The DS18B20 is a digital temperature sensor manufactured by Maxim Integrated (formerly Dallas Semiconductor). It communicates over a 1-Wire bus, meaning it requires only one data line (plus ground) to communicate with the Arduino. It is widely used in industrial and hobbyist applications and is available in both the standard TO-92 package and a waterproof stainless steel probe variant for liquid/outdoor measurements.";

    const features = [
        "Operating Voltage: 3.0V – 5.5V",
        "Temperature Range: -55°C to +125°C",
        "Accuracy: ±0.5°C (from -10°C to +85°C)",
        "Communication: 1-Wire protocol (single data line)",
        "Resolution: 9-bit to 12-bit (user configurable)",
        "Each sensor has a unique 64-bit serial code — multiple sensors on one bus",
        "Parasite power mode — can operate with only 2 wires (data + GND)",
        "Available in waterproof stainless steel probe version",
        "Conversion time: 750ms at 12-bit resolution",
    ];

    const howItWorks = [
        { point: "The DS18B20 contains an internal band-gap temperature sensor that measures the die temperature." },
        { point: "The analog temperature reading is converted by an internal ADC to a 12-bit digital value (default)." },
        { point: "Communication uses the Dallas 1-Wire protocol — the Arduino sends commands and reads data on a single GPIO pin." },
        { point: "A 4.7kΩ pull-up resistor is required between the data pin and VCC." },
        { point: "Multiple DS18B20 sensors can share a single 1-Wire bus using their unique 64-bit ROM addresses." },
    ];

    const pinout = [
        { pin: "VDD (Red)", function: "Power supply input (3.0V – 5.5V)" },
        { pin: "DQ (Yellow/White)", function: "1-Wire data line (requires 4.7kΩ pull-up to VCC)" },
        { pin: "GND (Black)", function: "Ground connection" },
    ];

    const code = `// Arduino DS18B20 — 1-Wire Temperature Sensor
#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2  // Data pin connected to digital pin 2

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(9600);
  Serial.println("DS18B20 Temperature Sensor");
  sensors.begin();
  Serial.print("Found ");
  Serial.print(sensors.getDeviceCount());
  Serial.println(" sensor(s) on bus.");
}

void loop() {
  sensors.requestTemperatures();

  float tempC = sensors.getTempCByIndex(0);
  float tempF = sensors.getTempFByIndex(0);

  if (tempC == DEVICE_DISCONNECTED_C) {
    Serial.println("Error: Sensor disconnected!");
    return;
  }

  Serial.print("Temperature: ");
  Serial.print(tempC);
  Serial.print(" °C / ");
  Serial.print(tempF);
  Serial.println(" °F");

  delay(1000);
}`;

    return (
        <ModuleContent
            title="Arduino DS18B20 Temperature Sensor"
            images={images}
            description={description}
            features={features}
            howItWorks={howItWorks}
            pinout={pinout}
            code={code}
            backTo={{ label: "Back to Sensors", to: "/tutorial/arduino/sensors" }}
        />
    );
}
