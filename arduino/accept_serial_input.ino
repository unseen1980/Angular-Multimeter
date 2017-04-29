#include <SPI.h>
#include "Adafruit_MAX31855.h"

// Temp k-type
#define MAXDO   3
#define MAXCS   4
#define MAXCLK  5
long randNumber;
char byteRead;
char byteComp;
String content = "";
char character;

// initialize the Thermocouple
Adafruit_MAX31855 thermocouple(MAXCLK, MAXCS, MAXDO);

// Volt DC
#define NUM_SAMPLES 10
int sum = 0;
unsigned char sample_count = 0;
float voltage = 0.0;
// End Volt DC

void setup() {
  Serial.begin(9600);
}

String vdc() {
  static char dtostrfbuffer[15];
  while (sample_count < NUM_SAMPLES) {
    sum += analogRead(A2);
    sample_count++;
    delay(100);
  }
  voltage = ((float)sum / (float)NUM_SAMPLES * 5.015) / 1024.0;
  sample_count = 0;
  sum = 0;
  float b = voltage * 11.1;
  return  dtostrf(b, 8, 2, dtostrfbuffer);
}

long res() {
  return random(300);
}

double temp() {
  double c = thermocouple.readCelsius();
  return c;
}

void loop() {
  while (Serial.available()) {
    byteRead = Serial.read();
    if (byteRead == '\n') {
      return;
    }
    else {
      byteComp = byteRead;
    }
  }
  if (byteComp == '0') {
    String fillVal = vdc();
    Serial.println(fillVal + "vdc");
    delay(1000);
  }
  else if (byteComp == '1') {
    String fillVal = String(res());
    Serial.println(fillVal + "ohm");
    delay(1000);
  }
  else if (byteComp == '2') {
    String fillVal = String(temp());
    Serial.println(fillVal + "cel");
    delay(1000);
  }
}