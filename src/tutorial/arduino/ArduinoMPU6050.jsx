import ModuleContent from "../../components/ModuleContent";
import mpuu1 from "../../assets/ArdinoSensor/MPU-3/MPU-1.jpg";
import mpuu2 from "../../assets/ArdinoSensor/MPU-3/MPU-2.png";
import mpuu3 from "../../assets/ArdinoSensor/MPU-3/MPU-3.jpg";

// Replace these with your own images
const mpu1 = mpuu1;
const mpu2 =mpuu2;
const mpu3 = mpuu3;

export default function ArduinoMPU6050() {
    const images = [mpu1, mpu2, mpu3];

    const description =
        "The MPU-6050 is a 6-axis motion tracking sensor by InvenSense (TDK) that combines a 3-axis accelerometer and a 3-axis gyroscope on a single chip. It communicates via I2C and includes a built-in Digital Motion Processor (DMP) capable of performing complex motion fusion algorithms. It is widely used in drones, robots, game controllers, and gesture recognition systems.";

    const features = [
        "Operating Voltage: 3.3V – 5V (on-board regulator on most breakout boards)",
        "Interface: I2C (default address 0x68, alternate 0x69)",
        "3-Axis Accelerometer: ±2g, ±4g, ±8g, ±16g (selectable full-scale range)",
        "3-Axis Gyroscope: ±250°/s, ±500°/s, ±1000°/s, ±2000°/s (selectable)",
        "Built-in Digital Motion Processor (DMP) for sensor fusion",
        "16-bit ADC for each axis — high-resolution data",
        "Built-in temperature sensor",
        "Interrupt output pin for motion detection events",
        "Auxiliary I2C bus for external magnetometer connection",
        "Low power consumption: 3.9 mA during full operation",
    ];

    const howItWorks = [
        { point: "The accelerometer uses a MEMS capacitive sensing element that detects changes in capacitance caused by acceleration forces (including gravity)." },
        { point: "The gyroscope uses a MEMS vibrating mass — when the sensor rotates, the Coriolis effect deflects the vibrating mass, producing a measurable electrical signal proportional to angular velocity." },
        { point: "Both sensors have 16-bit ADCs that convert the analog MEMS signals to digital values at up to 1 kHz." },
        { point: "The built-in DMP can perform complex 6-axis sensor fusion, offloading computation from the Arduino for smoother orientation tracking." },
        { point: "All data is transmitted to the Arduino over a standard I2C bus (SCL + SDA)." },
    ];

    const pinout = [
        { pin: "VCC", function: "Power supply input (3.3V – 5V)" },
        { pin: "GND", function: "Ground connection" },
        { pin: "SCL", function: "I2C Clock line" },
        { pin: "SDA", function: "I2C Data line" },
        { pin: "XDA", function: "Auxiliary I2C Data (for external sensor)" },
        { pin: "XCL", function: "Auxiliary I2C Clock (for external sensor)" },
        { pin: "AD0", function: "I2C address selector (LOW = 0x68, HIGH = 0x69)" },
        { pin: "INT", function: "Interrupt output (active HIGH on data ready / motion)" },
    ];

    const code = `// Arduino MPU-6050 — 6-Axis Accelerometer + Gyroscope (I2C)
#include <Wire.h>

const int MPU_ADDR = 0x68;  // Default I2C address

int16_t accelX, accelY, accelZ;
int16_t gyroX, gyroY, gyroZ;
int16_t tempRaw;

void setup() {
  Serial.begin(9600);
  Wire.begin();

  // Wake up MPU-6050 (exits sleep mode)
  Wire.beginTransmission(MPU_ADDR);
  Wire.write(0x6B);  // PWR_MGMT_1 register
  Wire.write(0);     // Set to 0 = wake up
  Wire.endTransmission(true);

  Serial.println("MPU-6050 Ready");
}

void loop() {
  Wire.beginTransmission(MPU_ADDR);
  Wire.write(0x3B);  // Start at ACCEL_XOUT_H register
  Wire.endTransmission(false);
  Wire.requestFrom(MPU_ADDR, 14, true);

  accelX = Wire.read() << 8 | Wire.read();
  accelY = Wire.read() << 8 | Wire.read();
  accelZ = Wire.read() << 8 | Wire.read();
  tempRaw = Wire.read() << 8 | Wire.read();
  gyroX  = Wire.read() << 8 | Wire.read();
  gyroY  = Wire.read() << 8 | Wire.read();
  gyroZ  = Wire.read() << 8 | Wire.read();

  float tempC = tempRaw / 340.0 + 36.53;

  Serial.print("Accel X: "); Serial.print(accelX);
  Serial.print(" | Y: "); Serial.print(accelY);
  Serial.print(" | Z: "); Serial.println(accelZ);

  Serial.print("Gyro  X: "); Serial.print(gyroX);
  Serial.print(" | Y: "); Serial.print(gyroY);
  Serial.print(" | Z: "); Serial.println(gyroZ);

  Serial.print("Temp: "); Serial.print(tempC);
  Serial.println(" °C");
  Serial.println("---");

  delay(500);
}`;

    return (
        <ModuleContent
            title="Arduino MPU-6050 Motion Sensor (Accelerometer + Gyroscope)"
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
