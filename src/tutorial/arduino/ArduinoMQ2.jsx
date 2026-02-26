import ModuleContent from "../../components/ModuleContent";
import mqq1 from "../../assets/ArdinoSensor/MQ2/mq-1.webp";
import mqq2 from "../../assets/ArdinoSensor/MQ2/mq-2.avif";
import mqq3 from "../../assets/ArdinoSensor/MQ2/mq-3.webp";
import mqq4 from "../../assets/ArdinoSensor/MQ2/mq-4.webp";

// Replace these with your own images
const mq1 = mqq1;
const mq2 = mqq2;
const mq3 = mqq3;
const mq4 = mqq4

export default function ArduinoMQ2() {
    const images = [mq1, mq2, mq3];

    const description =
        "The MQ-2 is an analog gas and smoke sensor widely used in Arduino-based safety and air-quality monitoring projects. It can detect a variety of combustible gases including LPG, Methane (CH₄), Propane, Hydrogen, and Smoke. The sensor module provides both analog and digital output pins, making it versatile for threshold-based alarms and precise concentration measurement.";

    const features = [
        "Operating Voltage: 5V DC",
        "Detects LPG, Methane, Propane, Hydrogen, Alcohol, Smoke",
        "Analog Output: proportional voltage based on gas concentration",
        "Digital Output: HIGH/LOW based on adjustable threshold (via potentiometer)",
        "Detection Range: 200 – 10,000 ppm (varies by gas)",
        "Built-in heater element for gas sensing",
        "Preheat Time: ~20 seconds for stable readings (recommended 24–48 hrs for first use)",
        "On-board LM393 comparator for digital output",
        "Adjustable sensitivity via onboard potentiometer",
    ];

    const howItWorks = [
        { point: "The MQ-2 contains a tin dioxide (SnO₂) semiconductor sensing element inside a small heating chamber." },
        { point: "When powered, the internal heater raises the sensor to operating temperature (~200–300°C)." },
        { point: "In clean air, SnO₂ has high resistance. When combustible gas molecules contact the heated surface, the resistance drops proportionally to gas concentration." },
        { point: "The analog output pin (A0) provides a voltage proportional to the gas concentration — higher gas = higher voltage." },
        { point: "The digital output pin (D0) goes HIGH when the gas concentration exceeds a threshold set by the on-board potentiometer." },
        { point: "Important: The sensor needs a preheat period of ~20 seconds after power-on for stable readings. For best accuracy, allow 24–48 hours of initial burn-in." },
    ];

    const pinout = [
        { pin: "VCC", function: "Power supply input (5V DC)" },
        { pin: "GND", function: "Ground connection" },
        { pin: "A0", function: "Analog output — voltage proportional to gas concentration" },
        { pin: "D0", function: "Digital output — HIGH when gas exceeds threshold" },
    ];

    const code = `// Arduino MQ-2 Gas/Smoke Sensor — Analog & Digital Reading
#define MQ2_ANALOG A0   // Analog output
#define MQ2_DIGITAL 2   // Digital output
#define LED_PIN 13      // Alert LED

void setup() {
  Serial.begin(9600);
  pinMode(MQ2_DIGITAL, INPUT);
  pinMode(LED_PIN, OUTPUT);

  Serial.println("MQ-2 Gas Sensor Warming Up...");
  delay(20000);  // 20-second preheat
  Serial.println("MQ-2 Ready");
}

void loop() {
  int analogValue = analogRead(MQ2_ANALOG);
  int digitalValue = digitalRead(MQ2_DIGITAL);

  Serial.print("Analog: ");
  Serial.print(analogValue);
  Serial.print(" | Digital: ");
  Serial.println(digitalValue == HIGH ? "GAS DETECTED!" : "Clean Air");

  if (digitalValue == HIGH) {
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }

  delay(500);
}`;

    return (
        <ModuleContent
            title="Arduino MQ-2 Gas / Smoke Sensor"
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
