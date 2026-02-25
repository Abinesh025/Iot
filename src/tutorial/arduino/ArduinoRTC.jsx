import ModuleContent from "../../components/ModuleContent";
import rtc1 from "../../assets/Ardinorelay/Rtc/rtc-1.webp"
import rtc2 from "../../assets/Ardinorelay/Rtc/rtc-2.webp"
import rtc3 from "../../assets/Ardinorelay/Rtc/rtc-3.jpg"
import rtc4 from "../../assets/Ardinorelay/Rtc/rtc-4.png"

export default function ArduinoRTC() {
    const images = [
        rtc1,
        rtc2,
        rtc3,
        rtc4
    ];

    const description =
        "The DS3231 RTC module is a highly accurate Real-Time Clock used to maintain time and date information even when power is removed. It has a built-in temperature-compensated crystal oscillator.";

    const features = [
        "Accuracy: ±2 ppm (≈ ±1 minute per year) thanks to TCXO",
        "Communication: I2C (address 0x68)",
        "Operating voltage: 2.3V – 5.5V",
        "Battery backup: CR2032 coin cell keeps time during power loss",
        "Built-in temperature sensor (±3 °C accuracy)",
        "Two programmable alarms with interrupt output",
        "32 KHz square-wave output",
        "Automatic leap-year compensation up to year 2100",
    ];

    const howItWorks = [
        {point:"The DS3231 uses a temperature-compensated crystal oscillator (TCXO) to maintain a highly accurate 32.768 kHz clock signal."},
        {point:"An internal temperature sensor continuously measures die temperature and adjusts digital trimming capacitors to compensate for frequency drift caused by temperature changes."},
        {point:"A binary counter chain divides the oscillator output to produce seconds, minutes, hours, day-of-week, date, month, and year registers."},
        {point:"The Arduino reads and writes these registers over I2C. A backup battery (CR2032) takes over when main power is removed, so time-keeping never stops."}
    ];

    const pinout = [
        { pin: "VCC", function: "Power supply input (3.3V or 5V)" },
        { pin: "GND", function: "Ground connection" },
        { pin: "SDA", function: "I2C data line — connect to Arduino A4" },
        { pin: "SCL", function: "I2C clock line — connect to Arduino A5" },
        { pin: "SQW", function: "Square-wave / interrupt output (optional)" },
        { pin: "32K", function: "32.768 kHz clock output (optional)" },
    ];

    const code = `// Arduino RTC Module (DS3231) — Read Date & Time
#include <Wire.h>
#include <RTClib.h>   // Install "RTClib" by Adafruit

RTC_DS3231 rtc;

void setup() {
  Serial.begin(9600);
  Wire.begin();

  if (!rtc.begin()) {
    Serial.println("Couldn't find RTC!");
    while (1);
  }

  // Uncomment the line below to set the time
  // (run once, then comment out and re-upload)
  // rtc.adjust(DateTime(F(__DATE__), F(__TIME__)));

  Serial.println("DS3231 RTC Ready");
}

void loop() {
  DateTime now = rtc.now();

  Serial.print(now.year());   Serial.print('/');
  Serial.print(now.month());  Serial.print('/');
  Serial.print(now.day());    Serial.print("  ");
  Serial.print(now.hour());   Serial.print(':');
  Serial.print(now.minute()); Serial.print(':');
  Serial.println(now.second());

  // Read built-in temperature sensor
  Serial.print("Temperature: ");
  Serial.print(rtc.getTemperature());
  Serial.println(" °C");

  delay(1000);
}`;

    return (
        <ModuleContent
            title="Arduino RTC Module (DS3231)"
            images={images}
            description={description}
            features={features}
            howItWorks={howItWorks}
            pinout={pinout}
            code={code}
        />
    );
}
