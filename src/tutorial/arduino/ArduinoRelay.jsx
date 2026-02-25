import ModuleContent from "../../components/ModuleContent";
import realy1 from "../../assets/Ardinorelay/relay/relay-1.jpg";
import realy2 from "../../assets/Ardinorelay/relay/relay-2.jpg";
import realy3 from "../../assets/Ardinorelay/relay/relay-3.jpg";

export default function ArduinoRelay() {
    const images = [
        realy1,
        realy2,
        realy3
    ];

    const description =
        "The Arduino Relay Module is used to control high-voltage AC or DC devices using a low-voltage Arduino signal. It acts as an electrically operated switch and provides isolation between the control circuit and the load circuit.";

    const features = [
        "Controls high-voltage AC (up to 250V 10A) and DC (up to 30V 10A) loads",
        "Opto-isolated input for safe interfacing with Arduino",
        "LED indicators for relay status (ON/OFF)",
        "Available in 1-channel, 2-channel, 4-channel, and 8-channel variants",
        "Trigger voltage: 5V (active LOW or HIGH depending on module)",
        "Screw terminal block for easy load wiring",
        "Built-in flyback diode to protect against voltage spikes",
    ];

    const howItWorks =[
        {point:"When Arduino sends HIGH signal to IN pin"},
        {point:"Relay coil gets energized"},
        {point:"Internal switch changes position (NO ↔ NC)"},
        {point:"External device (bulb/motor/fan) turns ON"},
    ]
        // "When Arduino sends HIGH signal to IN pinRelay coil gets energized Internal switch changes position (NO ↔ NC) External device (bulb/motor/fan) turns ON When signal is LOW → Relay turns OFF.";

    const pinout = [
        { pin: "VCC", function: "Power supply input (5V from Arduino)" },
        { pin: "GND", function: "Ground connection" },
        { pin: "IN (Signal)", function: "Digital control input from Arduino (active LOW on most modules)" },
        { pin: "COM", function: "Common terminal — connects to one pole of the load" },
        { pin: "NO", function: "Normally Open — disconnected at rest, closes when relay is activated" },
        { pin: "NC", function: "Normally Closed — connected at rest, opens when relay is activated" },
    ];

    const code = `// Arduino Relay Module — Basic ON/OFF Example
#define RELAY_PIN 7  // Connect relay IN to digital pin 7

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, HIGH); // Relay OFF (active LOW module)
  Serial.begin(9600);
  Serial.println("Relay Module Ready");
}

void loop() {
  // Turn relay ON
  digitalWrite(RELAY_PIN, LOW);
  Serial.println("Relay ON — Load is powered");
  delay(3000);

  // Turn relay OFF
  digitalWrite(RELAY_PIN, HIGH);
  Serial.println("Relay OFF — Load is disconnected");
  delay(3000);
}`;

    return (
        <ModuleContent
            title="Arduino Relay Module"
            images={images}
            description={description}
            features={features}
            howItWorks={howItWorks}
            pinout={pinout}
            code={code}
        />
    );
}
