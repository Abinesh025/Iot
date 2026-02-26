import ModuleContent from "../../components/ModuleContent";
import dh1 from "../../assets/ArdinoSensor/Dht/dht-1.jpg";
import dh2 from "../../assets/ArdinoSensor/Dht/dht-2.jpg";
import dh3 from "../../assets/ArdinoSensor/Dht/dht-4.webp";

// Replace these with your own images
const dht1 = dh1
const dht2 =dh2
const dht3 = dh3

export default function ArduinoDHT() {
    const images = [dht1, dht2, dht3];

    const description =
        "The DHT11 and DHT22 are popular digital temperature and humidity sensors used in Arduino projects. They provide calibrated digital output using a single-wire protocol, making them easy to interface with microcontrollers. The DHT22 (also known as AM2302) offers higher accuracy and a wider measurement range compared to the DHT11.";

    const features = [
        "Operating Voltage: 3.3V – 5V DC",
        "Single-wire digital communication protocol",
        "Built-in ADC for direct digital output",
        "Factory calibrated — no external components needed",
        "Low power consumption",
        "DHT11: ±2°C accuracy | DHT22: ±0.5°C accuracy",
        "Long-term stability and reliable performance",
        "Compact form factor — easy to mount in enclosures",
    ];

    const howItWorks = [
        { point: "The sensor contains a capacitive humidity sensing element and a thermistor for temperature measurement." },
        { point: "When the Arduino sends a start signal on the data pin, the sensor responds with 40 bits of data — 16 bits for humidity and 16 bits for temperature, plus an 8-bit checksum." },
        { point: "The built-in ADC converts analog readings to digital values, eliminating the need for an external ADC." },
        { point: "Data is transmitted using a single-wire (proprietary) protocol — only one GPIO pin is needed." },
    ];

    const pinout = [
        { pin: "VCC", function: "Power supply input (3.3V – 5V)" },
        { pin: "DATA", function: "Digital data output (connect 10kΩ pull-up to VCC)" },
        { pin: "NC", function: "Not Connected (on 4-pin variant)" },
        { pin: "GND", function: "Ground connection" },
    ];

    const code = `// Arduino DHT11/DHT22 — Temperature & Humidity Reading
#include "DHT.h"

#define DHTPIN 2        // Data pin connected to digital pin 2
#define DHTTYPE DHT22   // Change to DHT11 if using DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println("DHT Sensor Initializing...");
  dht.begin();
}

void loop() {
  float humidity = dht.readHumidity();
  float tempC = dht.readTemperature();
  float tempF = dht.readTemperature(true);

  if (isnan(humidity) || isnan(tempC)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.print("% | Temp: ");
  Serial.print(tempC);
  Serial.print("°C / ");
  Serial.print(tempF);
  Serial.println("°F");

  delay(2000);  // DHT22 needs ~2s between reads
}`;

    /* Comparison table rendered as children */
    const comparisonTable = (
        <section className="mb-10">
            <h2 className="text-xl font-semibold text-surface-100 mb-3 flex items-center gap-2">
                <span className="w-1 h-5 rounded-full bg-yellow-500 inline-block" />
                DHT11 vs DHT22 Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border border-surface-800/50">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-surface-900/60">
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">Specification</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">DHT11</th>
                            <th className="text-left px-4 py-3 text-surface-300 font-semibold">DHT22</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-800/40">
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 text-surface-400 font-medium">Humidity Range</td>
                            <td className="px-4 py-2.5 font-mono text-arduino">20% – 80%</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">0% – 100%</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 text-surface-400 font-medium">Temperature Range</td>
                            <td className="px-4 py-2.5 font-mono text-arduino">0°C – 50°C</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">-40°C – 80°C</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 text-surface-400 font-medium">Accuracy</td>
                            <td className="px-4 py-2.5 font-mono text-arduino">±2°C</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">±0.5°C</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 text-surface-400 font-medium">Sampling Rate</td>
                            <td className="px-4 py-2.5 font-mono text-arduino">1 Hz</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">0.5 Hz</td>
                        </tr>
                        <tr className="hover:bg-surface-900/30 transition-colors">
                            <td className="px-4 py-2.5 text-surface-400 font-medium">Price</td>
                            <td className="px-4 py-2.5 font-mono text-arduino">~$1–2</td>
                            <td className="px-4 py-2.5 font-mono text-primary-400">~$4–6</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );

    return (
        <ModuleContent
            title="Arduino DHT11 / DHT22 Temperature & Humidity Sensor"
            images={images}
            description={description}
            features={features}
            howItWorks={howItWorks}
            pinout={pinout}
            code={code}
            backTo={{ label: "Back to Sensors", to: "/tutorial/arduino/sensors" }}
        >
            {comparisonTable}
        </ModuleContent>
    );
}
