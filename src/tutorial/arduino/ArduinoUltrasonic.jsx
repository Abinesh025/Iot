import ModuleContent from "../../components/ModuleContent";
import ul1 from "../../assets/Ardinorelay/Ul/ul-1.jpg";
import ul2 from "../../assets/Ardinorelay/Ul/ul-2.webp";
import ul3 from "../../assets/Ardinorelay/Ul/ul-3.png";
import ul4 from "../../assets/Ardinorelay/Ul/ul-4.png";

export default function ArduinoUltrasonic() {
    const images = [
      ul1,
      ul2,
      ul3,
      ul4
    ];

    const description =
        "The HC-SR04 is an ultrasonic distance-measuring sensor that provides non-contact range detection from 2 cm to 400 cm with an accuracy of about ±3 mm. It is one of the most popular distance sensors for Arduino projects and is used in obstacle avoidance robots, parking sensors, liquid-level measurement, and interactive installations.";

    const features = [
        "Measurement range: 2 cm – 400 cm",
        "Accuracy: ~3 mm",
        "Operating voltage: 5V DC",
        "Operating current: ~15 mA",
        "Ultrasonic frequency: 40 kHz",
        "Effective angle: ~15° cone",
        "Trigger input: 10 µs TTL pulse",
        "No external library required — works with basic Arduino functions",
    ];

    const howItWorks =[
        {point:"The HC-SR04 has two ultrasonic transducers: a transmitter (T) and a receiver (R)."},
        {point:"When the Arduino sends a 10 µs HIGH pulse to the Trigger pin, the module emits a burst of eight 40 kHz ultrasonic pulses."},
        {point:"These sound waves travel through the air, bounce off the nearest object, and return to the receiver."},
        {point:"The module then drives the Echo pin HIGH for a duration proportional to the round-trip travel time."},
        {point:"The Arduino measures this pulse width using the pulseIn() function and calculates the distance with the formula: Distance = (Time × Speed of Sound) / 2."}
    ]

    const pinout = [
        { pin: "VCC", function: "Power supply input (5V DC)" },
        { pin: "Trig", function: "Trigger input — send a 10 µs HIGH pulse to start measurement" },
        { pin: "Echo", function: "Echo output — returns a pulse whose width equals the sound round-trip time" },
        { pin: "GND", function: "Ground connection" },
    ];

    const code = `// Arduino Ultrasonic Sensor (HC-SR04) — Distance Measurement
#define TRIG_PIN 9
#define ECHO_PIN 10

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Serial.begin(9600);
  Serial.println("HC-SR04 Ultrasonic Sensor Ready");
}

void loop() {
  // Send 10µs trigger pulse
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  // Read echo pulse duration (µs)
  long duration = pulseIn(ECHO_PIN, HIGH);

  // Calculate distance in cm
  float distance = duration * 0.0343 / 2.0;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  delay(500);
}`;

    return (
        <ModuleContent
            title="Arduino Ultrasonic Sensor (HC-SR04)"
            images={images}
            description={description}
            features={features}
            howItWorks={howItWorks}
            pinout={pinout}
            code={code}
        />
    );
}
