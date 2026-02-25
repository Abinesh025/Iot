import ModuleContent from "../../components/ModuleContent";
import rfid1 from "../../assets/Ardinorelay/Rfid/rfid-3.webp";
import rfid2 from "../../assets/Ardinorelay/Rfid/rfid-2.jpg";
import rfid3 from "../../assets/Ardinorelay/Rfid/rfid-1.jpg";
import rfid from "../../assets/Ardinorelay/Rfid/rfid.webp";

export default function ArduinoRFID() {
    const images = [
        // "https://components101.com/sites/default/files/component_pin/RFID-RC522-Module-Pinout.png",
        // "https://components101.com/sites/default/files/components/RFID-Module.jpg",
        rfid,
        rfid1,
        rfid2,
        rfid3
    ];

    const description =
        "The MFRC522 RFID module is used for contactless communication using RFID cards or tags. It operates at 13.56 MHz frequency.";

    const features = [
        "Operating frequency: 13.56 MHz (ISO 14443A / MIFARE)",
        "Communication interface: SPI (up to 10 Mbit/s)",
        "Operating voltage: 3.3V (5V tolerant on some breakout boards)",
        "Read range: up to ~5 cm depending on tag/antenna",
        "Supports MIFARE Classic 1K, 4K, Mini, and Ultralight tags",
        "Built-in antenna on PCB — no external antenna required",
        "Low standby current (~10 µA) with hardware power-down mode",
        "Well-supported Arduino library (MFRC522 by miguelbalboa)",
    ];

    const howItWorks = [
        {point:"The MFRC522 generates a 13.56 MHz electromagnetic field through its on-board antenna."},
        {point:"When an RFID tag enters this field, the tag draws energy from the RF signal to power its internal chip."},
        {point:"The tag then modulates the field to transmit its unique identifier (UID) and stored data back to the reader."},
        {point:"The MFRC522 demodulates this response and sends the data to the Arduino over the SPI bus, where it can be read, compared, or written to using the MFRC522 library."}
    ]
        ;

    const pinout = [
        { pin: "SDA (SS)", function: "SPI Slave Select — connect to digital pin 10" },
        { pin: "SCK", function: "SPI Clock — connect to digital pin 13" },
        { pin: "MOSI", function: "SPI Master Out Slave In — connect to digital pin 11" },
        { pin: "MISO", function: "SPI Master In Slave Out — connect to digital pin 12" },
        { pin: "IRQ", function: "Interrupt pin (optional, usually left unconnected)" },
        { pin: "GND", function: "Ground connection" },
        { pin: "RST", function: "Reset pin — connect to digital pin 9" },
        { pin: "3.3V", function: "Power supply input (3.3V only — do NOT supply 5V)" },
    ];

    const code = `// Arduino RFID MFRC522 — Read Card UID
#include <SPI.h>
#include <MFRC522.h>

#define SS_PIN  10
#define RST_PIN  9

MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init();
  Serial.println("RFID Reader Ready — Scan a card...");
}

void loop() {
  // Look for a new card
  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) {
    return;
  }

  // Print UID
  Serial.print("Card UID: ");
  for (byte i = 0; i < rfid.uid.size; i++) {
    Serial.print(rfid.uid.uidByte[i] < 0x10 ? " 0" : " ");
    Serial.print(rfid.uid.uidByte[i], HEX);
  }
  Serial.println();

  // Halt PICC and stop encryption
  rfid.PICC_HaltA();
  rfid.PCD_StopCrypto1();
}`;

    return (
        <ModuleContent
            title="Arduino RFID MFRC522"
            images={images}
            description={description}
            features={features}
            howItWorks={howItWorks}
            pinout={pinout}
            code={code}
        />
    );
}
