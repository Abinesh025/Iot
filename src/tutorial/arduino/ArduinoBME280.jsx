import ModuleContent from "../../components/ModuleContent";
import bm31 from "../../assets/ArdinoSensor/BM3/bm-1.jpeg";
import bm34 from "../../assets/ArdinoSensor/BM3/bm-4.jpg";
import bm33 from "../../assets/ArdinoSensor/BM3/bme-3.jpg";


// Replace these with your own images
const bme1 = bm31;
const bme2 = bm34;
const bme3 = bm33;

export default function ArduinoBME280() {
    const images = [bme1, bme2, bme3];

    const description =
        "The BME280 is a high-precision environmental sensor that measures Temperature, Humidity, and Barometric Pressure in a single compact module. Developed by Bosch Sensortec, it uses advanced MEMS (Micro-Electro-Mechanical Systems) technology to deliver accurate readings with ultra-low power consumption, making it ideal for IoT weather stations, altimeters, and indoor climate monitoring.";

    const features = [
        "Operating Voltage: 1.8V – 5V (3.3V recommended)",
        "Interface: I2C (default) and SPI",
        "Temperature Range: -40°C to +85°C (±1°C accuracy)",
        "Pressure Range: 300 – 1100 hPa (±1 hPa accuracy)",
        "Humidity Range: 0% – 100% RH (±3% accuracy)",
        "Ultra-low power consumption: 3.6 µA at 1 Hz",
        "Built-in internal ADC for digital output",
        "MEMS-based integrated environmental sensor",
        "Small form factor: 2.5 × 2.5 × 0.93 mm (sensor die)",
        "I2C address: 0x76 or 0x77 (selectable via SDO pin)",
    ];

    const howItWorks = [
        { point: "The BME280 uses MEMS technology — a tiny micro-machined silicon structure that responds to temperature, pressure, and humidity changes." },
        { point: "A resistive humidity sensor detects moisture by measuring impedance changes in a polymer dielectric film." },
        { point: "A piezo-resistive pressure sensor deforms under barometric pressure, changing its electrical resistance proportionally." },
        { point: "An integrated temperature sensor compensates readings and provides standalone temperature data." },
        { point: "The internal ADC converts all analog readings to digital values, which are transmitted via I2C or SPI bus to the Arduino." },
    ];

    const pinout = [
        { pin: "VIN / VCC", function: "Power supply input (1.8V – 5V)" },
        { pin: "GND", function: "Ground connection" },
        { pin: "SCL / SCK", function: "I2C Clock / SPI Clock" },
        { pin: "SDA / SDI", function: "I2C Data / SPI Data In (MOSI)" },
        { pin: "SDO", function: "SPI Data Out (MISO) / I2C address selector" },
        { pin: "CS", function: "Chip Select (SPI mode — pull LOW to enable)" },
    ];

    const code = `// Arduino BME280 — Environmental Sensor (I2C)
#include <Wire.h>
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;  // I2C mode

void setup() {
  Serial.begin(9600);
  Serial.println("BME280 Environmental Sensor");

  if (!bme.begin(0x76)) {
    Serial.println("Could not find BME280 sensor!");
    while (1);
  }
  Serial.println("BME280 Ready");
}

void loop() {
  Serial.print("Temperature: ");
  Serial.print(bme.readTemperature());
  Serial.println(" °C");

  Serial.print("Pressure: ");
  Serial.print(bme.readPressure() / 100.0F);
  Serial.println(" hPa");

  Serial.print("Humidity: ");
  Serial.print(bme.readHumidity());
  Serial.println(" %");

  Serial.println("---");
  delay(2000);
}`;

    return (
        <ModuleContent
            title="Arduino BME280 Environmental Sensor"
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
