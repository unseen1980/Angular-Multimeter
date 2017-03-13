long randNumber;
char byteRead;
char byteComp;
String content = "";
char character;

void setup(){
  Serial.begin(9600);
  randomSeed(analogRead(0));
}

String dc(){
  char buffer[100];
  randNumber = random(300);
  sprintf(buffer,"%iv",randNumber);
//  String text = "DC value: ";
//  String textToPrint = text + randNumber + "v";
//  return textToPrint;
  return buffer;
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
    String fillVal = dc();
    Serial.println(fillVal);
    delay(2000);
  }
  else if(byteComp == '1'){
    String fillVal = res();
    Serial.println(fillVal);
    delay(2000);
  }

}





