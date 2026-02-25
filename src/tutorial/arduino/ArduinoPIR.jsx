import ModuleContent from "../../components/ModuleContent";
import pir1 from "../../assets/Ardinorelay/Pir/pir-1.jpg";
import pir2 from "../../assets/Ardinorelay/Pir/pir-2.jpg";
import pir3 from "../../assets/Ardinorelay/Pir/pir-3.jpg";

export default function ArduinoPIR() {
    const images = [
        pir1,
        pir2,
        pir3
    ];

    const description = "The PIR (Passive Infrared) Sensor detects motion by measuring changes in infrared radiation from human bodies or animals."

    const features = [
        "Detection range: 3–7 metres (adjustable via potentiometer)",
        "Detection angle: approximately 110° cone",
        "Operating voltage: 4.5V – 20V DC",
        "Output: digital HIGH (3.3V) when motion detected",
        "Two trigger modes: single trigger (L) and repeatable trigger (H)",
        "Adjustable sensitivity and time-delay potentiometers",
        "Low power consumption — suitable for battery-powered projects",
        "Warm-up / stabilisation time: ~60 seconds after power on",
    ];

    const howItWorks =[
        {point:"The HC-SR501 contains a pyroelectric sensor element behind a Fresnel lens."},
        {point:"The HC-SR501 contains a pyroelectric sensor element behind a Fresnel lens. "},
        {point:" Every warm object emits infrared radiation. When a warm body moves across the sensor's field of view, the amount of IR radiation hitting the two halves of the pyroelectric element changes, producing a small voltage difference. "},
        {point:"The on-board BISS0001 IC amplifies this difference and drives the output pin HIGH for a user-adjustable duration (typically 3 s – 5 min)."},
        {point:"  The Fresnel lens focuses and segments the detection zone to increase sensitivity and range."},
    ];

    const pinout = [
        { pin: "VCC", function: "Power supply input (5V – 20V DC)" },
        { pin: "OUT", function: "Digital output — HIGH when motion detected, LOW otherwise" },
        { pin: "GND", function: "Ground connection" },
    ];

    const code = `// Arduino PIR Sensor (HC-SR501) — Motion Detection
#define PIR_PIN 2   // PIR output connected to digital pin 2
#define LED_PIN 13  // Built-in LED for visual feedback

void setup() {
  pinMode(PIR_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
  Serial.println("Warming up PIR sensor...");
  delay(60000); // Allow 60s warm-up for stable readings
  Serial.println("PIR Sensor Ready");
}

void loop() {
  int motionDetected = digitalRead(PIR_PIN);

  if (motionDetected == HIGH) {
    digitalWrite(LED_PIN, HIGH);
    Serial.println("Motion Detected!");
  } else {
    digitalWrite(LED_PIN, LOW);
    Serial.println("No Motion");
  }

  delay(200);
}`;

    return (
        <ModuleContent
            title="Arduino PIR Sensor (HC-SR501)"
            images={images}
            description={description}
            features={features}
            howItWorks={howItWorks}
            pinout={pinout}
            code={code}
        />
    );
}
