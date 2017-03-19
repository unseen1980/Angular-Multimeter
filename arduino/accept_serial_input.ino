long randNumber;
char byteRead;
char byteComp;
String content = "";
char character;

// Volt DC
#define NUM_SAMPLES 10
int sum = 0;                    
unsigned char sample_count = 0;
float voltage = 0.0;     
// End Volt DC

void setup(){
  Serial.begin(9600);
  //randomSeed(analogRead(0));
}

//String dc(){
//  char buffer[100];
//  randNumber = random(300);
//  sprintf(buffer,"%iv",randNumber);
//  //  String text = "DC value: ";
//  //  String textToPrint = text + randNumber + "v";
//  //  return textToPrint;
//  return buffer;
//}

String vdc(){
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
  return  dtostrf(b,8, 2, dtostrfbuffer);

}

String res(){
  randNumber = random(300);
  String text = "Resistor value: ";
  String textToPrint = text + randNumber + "ohm";
  return textToPrint;
}

void loop() {
  while (Serial.available()) {
    byteRead = Serial.read();
    if(byteRead == '\n'){
      return;
    }
    else{
      byteComp = byteRead;
    }
  }
  if(byteComp == '0'){
    String fillVal = vdc();
    Serial.println(fillVal+"vdc");
    delay(2000);
  }
  else if(byteComp == '1'){
    String fillVal = res();
    Serial.println(fillVal);
    delay(2000);
  }
}






