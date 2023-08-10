
// Evet listeners
var elCalc = document.getElementById("calculator");
if(elCalc != null){
	document.getElementById("calculator").addEventListener("click", function(){ 
	  adjustCalculatorPosition(5);
	});
}
var classCalc = document.getElementsByClassName('calculator')[0];
if(classCalc != null){
	document.getElementsByClassName('calculator')[0].addEventListener("click", function(){ 
	  adjustCalculatorPosition(5);
	});
}
	
function adjustCalculatorPosition(desiredPositionFromTop){
	// Ajustar o css assim:
	// css -> html{scroll-behavior:smooth} // transição suave
	if(desiredPositionFromTop == undefined){desiredPositionFromTop = 10;}
	
	if (window.screen.width <= 728) {
		var distanceToTop = 0;
		var element = document.getElementById('calculator');
		if(element == undefined){ // se não encontrou pela Id, tenta pela classe
			element = document.getElementsByClassName('calculator')[0];	
		}
		do {
			distanceToTop += element.offsetTop || 0;
			element = element.offsetParent;
		} while (element);

		var scroll = distanceToTop - desiredPositionFromTop;
		window.scrollTo(0,scroll);
	}
}

// Clear some input onfocus. Sets autocomple off (these are disirable behavior. at leastfor me)
function clearOnFocus(field){
  field.value = "";
  // alert("cleared");
}
var elements = document.getElementsByTagName("input");
var inType;
  
for (var i = 0; i < elements.length; i++) {
  inType = elements[i].type;
if(inType == 'number' || inType == 'text' || inType == null || inType == 'tel') {
   elements[i].setAttribute('onfocus', 'selectedField=this;clearOnFocus(this);');
   elements[i].setAttribute('autocomplete', 'off');  
 }
}


'usestrict';

var property = [];
var unit = [];
var factor = [];
var defaultUnits = [];

property[0] = "Area";
unit[0] = ["acre","are","hectare","square centimeter","square foot","square inch","square kilometer","square meter","square mile","square yard","square feet"];
factor[0] = [0.09290304*43560,100,10000,0.0001,0.09290304,0.09290304/144,1000000,1,0.09290304*27878400,0.09290304*9,0.09290304];
defaultUnits[0] = ["acre", "square mile"];

property[1] = "Length, Height & Distance";
unit[1] = ["kilometer","meter","centimeter","decimeter","millimeter","angstrom","mile","fathom","yard","foot","hand","inch","finger","bamboo","barleycorn"];
factor[1] = [1000,1,0.01,0.1,0.001,0.0000000001,0.3048*5280,6*0.3048,0.9144,0.3048,0.1016,0.3048/12,(0.3048/12)*4.5,3.2,0.0085];
defaultUnits[1] = ["centimeter", "inch"];

property[2] = "Mass (Weight)";
unit[2] = ["tonne","kilogram","gram","milligram","ton [long, UK]","ton [short, US]","hundredweight [long, UK]","hundredweight [short, US]","quarter [UK]","quarter [US]","slug","stone","pound","troy pound","ounce","troy ounce","Robie","dram","drachme","point","grain"];
factor[2] = [1000,1,0.001,0.000001,0.45359237*2240,0.45359237*2000,0.45359237*112,0.45359237*100,0.45359237*28,0.45359237*25,14.593903,0.45359237*14,0.45359237,(144/175)*0.45359237,0.45359237/16,((144/175)*0.45359237)/12,0.01,0.45359237/256,0.0038,0.000002,0.0000647989];
defaultUnits[2] = ["kilogram", "pound"];

property[3] = "Pressure";
unit[3] = ["atm","bar","mbar","kgf/m2","kgf/cm2","kPa","MPa","Pa","lbf/ft2","psi","torr","ksi","kilopascal [kPa]","Pascal","millimeter of mercury [0 °C]","atmosphere [standard]","atmosphere technical [at]","Water Column [meter]","kilogram-force per square meter","dyne per square centimeter","gram-force per square centimeter","kilogram-force per square centimeter","kilogram-force per square millimeter","kilopond per square meter","millibar","newton per square meter","ounce per square inch","pound per square foot","pound per square inch","poundal per square foot","technical atmosphere","ton per square meter","Water Column [centimeter]","Water Column [inch]","Water Column [millimeter]"];
factor[3] = [101325,100000,100,9.80665,98066.5,1000,1000000,1,430.92233/9,430.92233*16,101325/760,(430.92233*(1/0.009))*144,1000,1,133.3223874,101325,98066.5,9806.65,9.80665,0.1,98.0665,98066.5,9806650,9.80665,100,1,430.92233,430.92233/9,430.92233*16,1.4881639,98066.5,9806.65,98.0665,2989.0669/12,9.80665];
defaultUnits[3] = ["pound per square inch", "kilopascal [kPa]"];

// !!! Caution: Temperature requires an increment as well as a multiplying factor
// !!! and that's why it's handled differently
property[4] = "Temperature";
unit[4] = ["Celsius", "Fahrenheit", "Kelvin", "Rankine","Delisle","Newton","Reaumur","Romer"];
factor[4] = []; // não usado em temperatura, pois é um conversor a parte
defaultUnits[4] = ["Celsius", "Fahrenheit"];

property[5] = "Volume & Capacity";
unit[5] = ["cubic meter","liter","litre","centiliter","milliliter","cc","cubic centimeter","microliter","cup [metric]","Tablespoon [metric]","Teaspoon [metric]","barrel","bucket","barrel [UK]","bucket [UK]","bushel [UK]","cubic foot","cubic inch","cubic mile","cup","dram","fifth","gallon [liquid]","gallon [UK]","gill [US]","gill [UK]","minim","ounce","ounce [UK, liquid]","peck [UK]","peck [US]","pint","pint [UK]","quart","Robie","shot","Tablespoon","Teaspoon","Tablespoon [UK]","Teaspoon [UK]"];
factor[5] = [1,0.001,0.001,0.00001,0.000001,0.000001,0.000001,0.000000001,0.00025,0.000015,0.000005,0.003785411784*31.5,0.003785411784*5,0.00454609*36,0.00454609*4,0.00454609*8,(0.003785411784/231)*1728,0.003785411784/231,(((0.003785411784/231)*1728)*43560)*3379200,0.003785411784/16,(0.003785411784/128)/8,0.003785411784/5,0.003785411784,0.00454609,0.003785411784/32,0.00454609/32,(0.003785411784/128)/480,0.003785411784/128,0.00454609/160,0.00454609*2,0.0044048838*2,0.003785411784/8,0.00454609/8,0.003785411784/4,0.00001,0.003785411784/128,(0.003785411784/128)/2,(0.003785411784/128)/6,(0.00454609/160)/2,(0.00454609/160)/8];
defaultUnits[5] = ["liter", "ounce"];

property[6] = "Acceleration";
unit[6] = ["meter per square second","foot per square second","gravity (acceleration)","Galileo","inch per square second"];
factor[6] = [1,0.3048,9.80665,0.01,0.0254];
defaultUnits[6] = ["meter per square second", "foot per square second"];

property[7] = "Capacitance";
unit[7] = ["Faraday [F]","millifaraday [mF]","microfaraday [µF]","manofaraday [nF]","picofaraday [pF]"];
factor[7] = [1, 1E-3, 1E-6, 1E-9, 1E-12];
defaultUnits[7] = ["microfaraday [µF]", "nanofaraday [nF]"];

property[8] = "Density & Mass capacity";
unit[8] = ["gram per cubic centimeter","gram per liter","gram per milliliter","kilogram per liter","kilogram per cubic meter","tonne per cubic meter","milligram per liter","milligram per milliliter","ounce per cubic inch","ounce per gallon [UK]","ounce per gallon [US]","pound per cubic inch","pound per gallon [UK]","pound per gallon [US]"];
factor[8] = [1000,1,1000,1000,1,1000,0.001,1,(0.45359237/16)/(0.0037854118/231),(0.45359237/16)/0.00454609,(0.45359237/16)/0.0037854118,0.45359237/(0.0037854118/231),0.45359237/0.00454609,0.45359237/0.0037854118];
defaultUnits[8] = ["kilogram per cubic meter","pound per gallon [US]"];

property[9] = "Electric Charge";
unit[9] = ["Coulomb [C]", "abcoulomb", "Ampere hour [A.hr]"];
factor[9] = [1, 10, 3600];
defaultUnits[9] = ["Coulomb [C]", "Ampere hour [A.hr]"];

property[10] = "Energy";
unit[10] = ["Btu","calorie (nutritional)","calorie (thermochemical)","gallon (US) of LPG","horsepower-hour","Joule","kilogram-force meter","kilowatt-hour","ton (explosive)","watt-hour"];
factor[10] = [1055.0559,4186.8,4.184,100757838.45,2684519.5,1,9.80665,3600000,4184000000,3600];
defaultUnits[10] = ["Joule","kilowatt-hour"];

property[11] = "Force";
unit[11] = ["Newton (N)", "Dyne (dy)", "Kilogram force (kgf)", "Kilopond (kpf)", "Kip (k)", "Ounce force (ozf)", "Pound force (lbf)", "Poundal"];
factor[11] = [1, 0.00001, 9.806650, 9.806650, 4448.222, 0.2780139, 4.4482216, 0.138255];
defaultUnits[11] = ["Kilogram force (kgf)","Newton (N)"];

property[12] = "Force / Length";
unit[12] = ["Newton per meter (N/m)","pound force per inch (lbf/in)","pound force per foot (lbf/ft)",];
factor[12] = [1, 175.1268, 14.5939];
defaultUnits[12] = ["Newton per meter (N/m)", "pound force per inch (lbf/in)"];

property[13] = "Illuminance";
unit[13] = ["lumen/m² (lu/m²)","lumen/cm²","lumen/ft²","foot-candle (ft-cdl)","foot-lambert","candela/m²","candela/cm²","lux (lx)","nox (nx)","phot (ph)"];
factor[13] = [1,10000,10.76391,10.76391,10.76391,3.141592505,31415.92505,1,-328716,10000];
defaultUnits[13] = ["lumen/m² (lu/m²)","lumen/ft²"];

property[14] = "Mass Flow";
unit[14] = ["kilogram per second (kg/s)","pound mass per second (lbm/s)","pound mass per minute (lbm/min)",];
factor[14] = [1, 0.4535924, 0.007559873];
defaultUnits[14] = ["kilogram per second (kg/s)", "pound mass per second (lbm/s)"];

property[15] = "Power";
unit[15] = ["Btu/hour","calorie/hour","gigawatt","horsepower (electric)","horsepower (international)","horsepower (metric)","horsepower (water)","kilocalorie/hour","kilowatt","megawatt","microwatt","milliwatt","ton of refrigeration","watt"];
factor[15] = [0.29307107,11630*1.0e-7,1000000000,746,745.69987,9.80665*75,746.043,1.163,1000,1000000,0.000001,0.001,0.012*293071.07,1];
defaultUnits[15] = ["horsepower (electric)","watt"];

property[16] = "Torque";
unit[16] = ["Newton-meter (N.m)","dyne-centimeter(dy.cm)","kgf-meter (kgf.m)","lbf-inch (lbf.in)","lbf-foot (lbf.ft)"];
factor[16] = [1, 0.0000001, 9.806650, 0.1129848, 1.355818];
defaultUnits[16] = ["Newton-meter (N.m)","kgf-meter (kgf.m)"];

property[17] = "Time";
unit[17] = ["Second (sec)", "Day (mean solar)", "Day (sidereal)", "Hour (mean solar)", "Hour (sidereal)", "Minute (mean solar)", "Minute (sidereal)", "Month (mean calendar)", "Second (sidereal)", "Year (calendar)", "Year (tropical)", "Year (sidereal)"];
factor[17] = [1, 8.640E4, 86164.09, 3600, 3590.17, 60, 60, 2628000, 0.9972696, 31536000, 31556930, 31558150];
defaultUnits[17] = ["Day (mean solar)","Second (sec)"];

property[18] = "Velocity & Speed";
unit[18] = ["kilometer per second","kilometer per hour","centimeter per second","meter per second","meter per minute","foot per second","foot per minute","foot per hour","mile per hour","mile per second","nautical mile per hour","yard per second","knot","mach","speed of light [air]","speed of light [vacuum]","speed of sound [air]"];
factor[18] = [1000,1000/3600,0.01,1,1/60,0.3048,0.3048/60,0.3048,(0.3048*5280)/3600,0.3048*5280,1852/3600,0.3048*3,1852/3600,340.29,299702547,299792458,340.29];
defaultUnits[18] = ["kilometer per hour","mile per hour"];

property[19] = "Viscosity";
unit[19] = ["Newton-second per meter","centipoise","centistoke","square foot per second","Poise","poundal-second per square foot","pound mass per foot-second","pound force-second per square foot","rhe","slug per foot-second","stoke"];
factor[19] = [1, 0.001, 0.000001, 9.290304E-02, 0.1, 1.488164, 1.488164, 47.88026, 10, 47.88026, 0.0001];
defaultUnits[19] = ["Newton-second per meter","poundal-second per square foot"];

property[20] = "Volume Flow";
unit[20] = ["barrel per minute [UK]","barrel per minute [US]","cubic centimeter per second","cubic foot per second","cubic meter per second","cubic millimeter per second","gallon per second [UK]","gallon per second [US]","liter per second","milliliter per second"];
factor[20] = [(0.00454609/60)*36,(0.003785411784/60)*31.5,0.000001,0.028316847,1,0.000000001,0.00454609,0.003785411784,0.001,0.000001];
defaultUnits[20] = ["cubic foot per minute","cubic meter per second"];

property[21] = "Angle";
unit[21] = ["degree","grad","radian","1/10 circle","1/16 circle","1/2 circle","1/4 circle","1/6 circle","1/8 circle","arc minute","binary degree","binary radian","cycle","full angle","gradian [grad]","mil","milliarc minute","millisecond of arc","minute","octant","point","quadrant","right angle","second","sextant","sign","straight angle"];
factor[21] = [(Math.PI/180),(Math.PI/200),1,(Math.PI/5),(Math.PI/8),(Math.PI),(Math.PI/2),(Math.PI/3),(Math.PI/4),(Math.PI/180)/60,(Math.PI/128),(Math.PI/128),(2*Math.PI),(2*Math.PI),(Math.PI/200),(Math.PI/3200),(Math.PI/180)/(60*1000),((Math.PI/180)/(60*60*1000)),(Math.PI/(180*60)),2*Math.PI/8,(Math.PI/16),2*Math.PI/4,(Math.PI/2),(Math.PI/(180*3600)),2*Math.PI/6,30*(Math.PI/180),(Math.PI)];
defaultUnits[21] = ["radian","degree"];


// =======================
//  Functions
// =======================

function enableDisableFractions(){
	// Enable/disable fraction input. Default = number to show a smaller keyboard on mobile
	// Not currently used
	var in1 = document.getElementById("input1");
	var in2 = document.getElementById("input2");
	
	if(in1.type === "text"){
		in1.type = "number";
		in2.type = "number";		
	} else {
		in1.type = "text";
		in2.type = "text";	
	}
}

function clearResults() {
	document.formA.unitInput.value = "";
	document.formB.unitInput.value = "";
	document.getElementById("verbose").innerHTML = "<span class='destacado'>Please, choose a physical quantity, two units and then enter a value in any of the boxes above.</span>";
}

function update() {

	var myMenuSelect = document.propertyForm.propertyMenu;
	var selectedProperty = myMenuSelect.options[myMenuSelect.selectedIndex].value; // Ex.: Acceleration -> 0
	var selectedPropertyIndex = property.indexOf(selectedProperty); // Ex.: Acceleration -> 0

	if (property[selectedPropertyIndex] == "Temperature") {
		document.formA.unitInput.value = 0;
	} else {
		document.formA.unitInput.value = 1;
	}

	CalculateUnit(document.formA, document.formB);
}

function UpdateUnitMenu(unitMenu, selectedUnit) {
	// Updates the units display given a unit to be selected
	// unitMenu: document.formA.unitMenu ou document.formB.unitMenu

	var myMenuSelect = document.propertyForm.propertyMenu;
	var selectedProperty = myMenuSelect.options[myMenuSelect.selectedIndex].value; // Ex.: Acceleration -> 0
	var selectedPropertyIndex = property.indexOf(selectedProperty); // Ex.: Acceleration -> 0

	if (selectedUnit === undefined) {
		//selectedUnit = unit[selectedPropertyIndex][0];
		selectedUnit = unitMenu.value; // Ex.: metro, centímetro, ...
	}

	FillMenuWithArray(unitMenu, unit[selectedPropertyIndex], selectedUnit);

}

function updateUnitMenuOnPropertyMenuChange(unitMenu, i) {
	// Updates the units display on the event onchange of the menu selec (dropdown)
	// unitMenu: document.formA.unitMenu ou document.formB.unitMenu
	// i pode ser 0 ou 1
	if (i == undefined) {
		i = 0; // 0 -> primeira unidade, 1 -> segunda da default unit
	}
	var myMenuSelect = document.propertyForm.propertyMenu;
	var selectedProperty = myMenuSelect.options[myMenuSelect.selectedIndex].value; // Ex.: Acceleration -> 0
	var selectedPropertyIndex = property.indexOf(selectedProperty); // Ex.: Acceleration -> 0

	var selectedUnit = defaultUnits[selectedPropertyIndex][i]; // Ex.: defaultUnits[1] = ["centímetro (cm)","Inch (in)"];

	FillMenuWithArray(unitMenu, unit[selectedPropertyIndex], selectedUnit);

}

function updateUnitsMenus() {

	updateUnitMenuOnPropertyMenuChange(document.formA.unitMenu, 0);
	updateUnitMenuOnPropertyMenuChange(document.formB.unitMenu, 1);
	clearResults();

}

function FillMenuWithArray(myMenu, myArray, selectedUnitOrProperty) {
	// Fills the options of propertyMenu (properties = gradezas físicas = Area, Volume ...) or unitMenu (unidades = metro, cm ...) with the elements of myArray.
	// !CAUTION!: It replaces the elements, so old ones will be deleted.
	var i;

	myMenu.innerHTML = ""; // Limpa os <option> e os <optgroup> se exitentes de menu carregado anteriomente

	myMenu.length = myArray.length;

	// Preenche o menu com o array de gradezas ou de unidades myArray =[metro, centímetro...] ou [Area, Comprimento...]
	for (i = 0; i < myArray.length; i++) {

		myMenu.options[i].text = myArray[i];

	}

	// Muito bem Adilson
	//	Insere o início dos gupos (<optgroup>), se existirem, detectando a string "BEGINGROUP" no 
	// array de unidades ou gradezas e editando o HTML
	var toReplace, label;
	for (i = 0; i < myArray.length; i++) {

		if (myArray[i].indexOf("BEGINGROUP") > -1) { // Seleciona uma unidade ou property
			label = myArray[i].replace("BEGINGROUP", "");
			toReplace = "<option>" + myArray[i] + "</option>";
			myMenu.innerHTML = myMenu.innerHTML.replace(toReplace, "<optgroup label='" + label + "'>");
		}

	}

	//	Finaliza os gupos (</optgroup>), se existirem, detectando a string "ENDGROUP" no 
	// array de unidades ou gradezas e editando o HTML
	for (i = 0; i < myArray.length; i++) {

		if (myArray[i].indexOf("ENDGROUP") > -1) { // Seleciona uma unidade ou property
			toReplace = "<option>" + myArray[i] + "</option>";
			myMenu.innerHTML = myMenu.innerHTML.replace(toReplace, "</optgroup>");
		}

	}

	// Seleciona a opção. Tem que ser feito depois de inseridas as tags <optgroup> e </optgroup> nos dois últimos 'for loops' acima
	// se foram inseridas as tags, myMenu.options[] pode ter menos elementos do que 
	// myArray (que unclui pode conter elementos do tipo "BEGINGROUP" e "ENDGROUP")

	var myMenuIndex = -1;
	for (i = 0; i < myArray.length; i++) {
		myMenuIndex++;
		if (myMenuIndex < myMenu.options.length) { // este if é para evita erro

			if (myMenu.options[myMenuIndex].text == selectedUnitOrProperty) { // Seleciona uma unidade ou property
				myMenu.selectedIndex = myMenuIndex;
			}

		}

		if ((myArray[i].indexOf("BEGINGROUP") > -1) || (myArray[i].indexOf("ENDGROUP") > -1)) {
			myMenuIndex--;
			if (myMenuIndex < 0) {
				myMenuIndex = 0;
			}
		}

	}

}

function CalculateUnit(sourceForm, targetForm) {
	// A simple wrapper function to validate input before making the conversion
	var sourceValue = sourceForm.unitInput.value;
	if (sourceValue == "") { // Se a entrada estiver vazia ou 0, apaga o resultado
		targetForm.unitInput.value = "";
		return false;
	}

	sourceValue = sourceValue.toString().trim().replace(". ", ".").replace(" .", ".");	// Corrige inserção acidental de espaços. Principalemnete o celular
	sourceValue = sourceValue.replace(", ", ",").replace(" ,", ",");							// Corrige inserção acidental de espaços. Principalemnete o celular
	sourceValue = sourceValue.replace(",", ".");					// compatibilizar os sites em pt-br
	
	// First check if the user has given numbers or anything that can be made to one...	
	var regexp = /^[0-9 eE\/]+([-+.\/][0-9 eE]+)?$/g; // AF: Aceita números, ponto decimal, sinal de menos e de  e barra
	var validate = regexp.test(sourceValue);

	sourceValue = frac2dec(sourceValue); // transforma fração em número

	if (eval(sourceValue) || eval(sourceValue) === 0) { // AF
		// If we can make a valid floating-point number, put it in the text box and convert!
		// sourceValue = sourceValue.match(regexp);
		// sourceForm.unitInput.value = eval(sourceValue); // AF reescreve de volta o controle
		ConvertFromTo(sourceForm, targetForm);
		return false;

	} else if (validate && sourceValue) {

		sourceForm.unitInput.value = sourceValue.match(regexp); // AF filtra o que foi diditado errado
		targetForm.unitInput.value = "";

	}

	return false;

}

function ConvertFromTo(sourceForm, targetForm) {
	// Converts the contents of the sourceForm input box to the units specified in the targetForm unit menu and puts the result in the targetForm input box.In other words, this is the heart of the whole script...
	var propIndex;
	var sourceIndex;
	var sourceFactor;
	var targetIndex;
	var targetFactor;
	var result;
	var verbose = document.getElementById("verbose");
	var fromUnit, toUnit;
  var verbText = "";
  
	// Start by checking which property we are working in...
	propIndex = document.propertyForm.propertyMenu.selectedIndex;

	// Let's determine what unit are we converting FROM (i.e. source) and the factor needed to convert that unit to the base unit.
	sourceIndex = sourceForm.unitMenu.selectedIndex;
	sourceFactor = factor[propIndex][sourceIndex];
	fromUnit = sourceForm.unitMenu.value;

	// Cool! Let's do the same thing for the target unit - the units we are converting TO:
	targetIndex = targetForm.unitMenu.selectedIndex;
	targetFactor = factor[propIndex][targetIndex];
	toUnit = targetForm.unitMenu.value;

	// Simple, huh? let's do the math: a) convert the source TO the base unit: (The input has been checked by the CalculateUnit function).
	var sourceValue = sourceForm.unitInput.value;

	if (sourceValue == "") { // Se a entrada estiver vazia, apaga o resultado
		clearResults();
		return false;
	}

	var evaluatedSourceValue = frac2dec(sourceValue); // transforma fração em número
	
	if (property[propIndex] != "Temperature") {

    var conversionFactor = 1 * Number.parseFloat(sourceFactor / targetFactor).toPrecision(12); // Evita mostrar os erros de arredondamento

    // Ta-da! All that's left is to update the target input box:
    result = 1 * Number.parseFloat(evaluatedSourceValue*conversionFactor).toPrecision(12); // multiplicar por 1 para remover zeros à direita. Não quero mostrá-los

    if (evaluatedSourceValue < 0) {
			verbose.innerHTML = "<span class='destacado'>Negative values makes no sense!</span>";
			return false;
		}
    
    if(sourceValue != evaluatedSourceValue){ // Exemplo: SourceValue = 1 1/3 --> evaluatedSourceValue = 1.333333...

      verbText = "<p><span class='destacado'><strong>" + sourceValue + " (" + evaluatedSourceValue + ") " + pluralForConverters(fromUnit, evaluatedSourceValue) + " = " + bestFmt(result) + " " + pluralForConverters(toUnit, result) + "</strong></span></p>";

    } else {

      verbText = "<p><span class='destacado'><strong>" + sourceValue + " " + pluralForConverters(fromUnit, evaluatedSourceValue) + " = " + bestFmt(result) + " " + pluralForConverters(toUnit, result) + "</strong></span></p>";

    }

    if(hasFraction(toUnit)) {
      verbText += explain(sourceValue, fromUnit, toUnit, result) + usableFractionsVerbose(result, fromUnit, toUnit, sourceValue) + copyright();
    } else {
      verbText += explain(sourceValue, fromUnit, toUnit, result) + " <br> " + copyright();
    }
    
  } else {
    
    // Temperature Conversion
    if(validateTemperature(fromUnit, parseFloat(evaluatedSourceValue))){
      verbose.innerHTML = "<span class='destacado'>A value less than absolute zero (-273.15 Kelvin) cannot be converted.</span>";
      return false;
    }
    
    result = temperatureConversion(fromUnit, toUnit, parseFloat(evaluatedSourceValue));

    verbText = "<p><span class='destacado'><strong>" + sourceValue + " " + fromUnit + " = " + roundDec(result,2) + " " + toUnit + "</strong></span></p>";
    verbText += explainTemperature(sourceValue, fromUnit, toUnit) + " <br> " + copyright();

  }
  
  
	targetForm.unitInput.value = result;

	verbose.innerHTML = verbText;

}
	
function explain(qTxt, from, to, converted) {
	
	converted = parseFloat( converted);
	var q = splitFraction(qTxt.toString());
	var ret = "";
	if(q==0){return "";} // não consegue calcular o 'factor'
	
	var factor = parseFloat((converted / q).toPrecision(14)); //parseFloat remove os zeros à direita. 
	//14 é o comprimento do número retornado pela função do PHP no arquivo xxxxx-unit-process.php
	var factorTxt = conversionFactorTxt(factor, 1E-8);
	var inv = 1 / factor;
	var invFact = roundDec(inv, 12); 

	if (invFact % 1 === 0 && float2rat_p_error(invFact, 1E-8) === 0 && invFact > 0) { // verifica se é um inteiro // invFact pode ser zero se o 'factor for muito grande ( > 10^12)

		ret += "<p><span class='destacado'>Formula:</span> divide the value in " + pluralForConverters(from, 2) + " by " + invFact + " because 1 " + to + " equals " + invFact + " " + pluralForConverters(from, 2) + ".</p>";

		ret += "<p>So, " + qTxt + " " + pluralForConverters(from, q) + " = <span class='fraction'><span class='top'>" + qTxt + "</span><span class='bottom'>" + invFact + "</span></span> = <span class='destacado'>" + bestFmt(converted,14) + "</span> " + (bestFmt(converted,14) != converted ? (" or <span class='destacado'>" + converted + "</span> ") : "") + pluralForConverters(to, converted) + ".</p>";

	} else {

		ret = "<p><span class='destacado'>Formula:</span> multiply the value in " + pluralForConverters(from, 2) + " by the conversion factor '" + factorTxt + "'.</p>";

ret += "<p>So, " + qTxt + " " + pluralForConverters(from, q) + " = " + qTxt + " × " + factorTxt + " = <span class='destacado'>" + bestFmt(converted,14) + "</span> " + (bestFmt(converted,14) != converted ? (" or <span class='destacado'>" + converted + "</span> ") : "") + pluralForConverters(to, converted) + ".</p>";
	
	}

	return ret;

}

function explainTemperature(val,from,to){
  var dec = 3;
	val *=1;
	var tuple = from + "_" + to;
  
  if(from == to){
     return "Please choose two different units.";
  }

	var how = "<h3>How to convert " + val + " " + from + " to " + to + "?<\/h3>";
	how += "<p>To convert " + from + " to " + to + ", use the formula: <\/p><p><span class=\"formula\">" + temperatureFormula(tuple) + "<\/span><\/p>";

  if(tuple == "Celsius_Fahrenheit"){
    //"Celsius Fahrenheit":q*9/5+32,
    how += "<p>Thus, multiplying the value '" + val + "' in " + from + " by 9, dividing the result by 5 then adding 32, we get:<\/p><p>";
    how += val + " " + from + " = " + val + " × " + " 9⁄5 + 32 = " + roundDec(val*9/5,dec) + " + 32 = " + roundDec(val*9/5+32,dec) + " " + to + ".";
  } else if (tuple == "Celsius_Kelvin") {
    //"Celsius Kelvin":q+273.15,
    how += "<p>Thus, adding 273.15 to the value '" + val + "' in " + from + ", we get <\/p><p>";
    how += val + " " + from + " = " + val + " + 273.15 = " + roundDec(val + 273.15,dec) + " " + to + ".";
  } else if (tuple == "Kelvin_Celsius") {
    //"Kelvin Celsius":q-273.15,
    how += "<p>Thus, subtracting 273.15 from the value '" + val + "' in " + from + ", we get <\/p><p>";
    how += val + " " + from + " = " + val + " - 273.15 = " + roundDec(val - 273.15,dec) + " " + to + ".";
  } else if (tuple == "Kelvin_Fahrenheit") {
    //"Kelvin Fahrenheit":q*9/5-459.67,
    how += "<p>Thus, multiplying the value '" + val + "' in " + from + " by 9, dividing the result by 5 and subtracting -459.67, we get<\/p><p>";
    how += val + " " + from + " = " + val + " × " + " 9⁄5 - 459.67 = " + roundDec(val*9/5,dec) + " - 459.67 = " + roundDec(val*9/5-459.67,dec) + " " + to + ".";
  } else if (tuple == "Fahrenheit_Celsius") {
    //"Fahrenheit Celsius":(q-32)*5/9,
    how += "<p>Thus, subtracting 32 from the value '" + val + "' in " + from + ", multiplying the result by 5, and dividing the result by 9, we get<\/p><p>";
    how += val + " " + from + " = (" + val + " - 32) × 5⁄9 = (" + (val - 32) + ") × 5⁄9 = " + roundDec((val - 32) * 5/9,dec) + " " + to + ".";
  } else if (tuple == "Fahrenheit_Kelvin") {
    //"Fahrenheit Kelvin":(q+459.67)*5/9,
    how += "<p>Thus, adding 459.67 to the value '" + val + "' in " + from + ", multiplying the result by 5 and  dividing by 9, we get<\/p><p>";
    how += val + " " + from + " = (" + val + " + 459.67) × 5⁄9 = (" + (val + 459.67) + ") × 5⁄9 = " + roundDec((val+459.67) * 5/9,dec) + " " + to + ".";
  }

	how += "<\/p>";

	return how;

}

function temperatureFormula(tuple){
  var f = {
  Celsius_Celsius:"[°C] = [°C]",
  Celsius_Delisle:"[°De] = (100 − [°C]) × 3⁄2",
  Celsius_Fahrenheit:"[°F] = [°C] × 9⁄5 + 32",
  Celsius_Kelvin:"[K] = [°C] + 273.15",
  Celsius_Newton:"[°N] = [°C] × 33⁄100",
  Celsius_Rankine:"[°R] = ([°C] + 273.15) × 9⁄5",
  Celsius_Reaumur:"[°Ré] = [°C] × 4⁄5",
  Celsius_Romer:"[°Ro] = [°C] × 21⁄40 + 7.5",
  Delisle_Celsius:"[°C] = 100 − [°De] × 2⁄3",
  Delisle_Delisle:"[°De] = [°De]",
  Delisle_Fahrenheit:"[°F] = 212 − [°De] × 6⁄5",
  Delisle_Kelvin:"[K] = 373.15 − [°De] × 2⁄3",
  Delisle_Newton:"[°N] = 33 − [°De] × 11⁄50",
  Delisle_Rankine:"[°R] = 373.15 − [°De] × 6⁄5",
  Delisle_Reaumur:"[°Ré] = 80 − [°De] × 8⁄15",
  Delisle_Romer:"[°Ro] = 60 − [°De] × 7⁄20",
  Fahrenheit_Celsius:"[°C] = ([°F] − 32) × 5⁄9",
  Fahrenheit_Delisle:"[°De] = (212 − [°F]) × 5⁄6",
  Fahrenheit_Fahrenheit:"[°F] = [°F]",
  Fahrenheit_Kelvin:"[K] = ([°F] + 459.67) × 5⁄9",
  Fahrenheit_Newton:"[°N] = ([°F] − 32) × 11⁄60",
  Fahrenheit_Rankine:"[°R] = [°F] + 459.67",
  Fahrenheit_Reaumur:"[°Ré] = ([°F] − 32) × 4⁄9",
  Fahrenheit_Romer:"[°Ro] = ([°F] − 32) × 7⁄24 + 7.5",
  Kelvin_Celsius:"[°C] = [K] − 273.15",
  Kelvin_Delisle:"[°De] = (373.15 − [K]) × 3⁄2",
  Kelvin_Fahrenheit:"[°F] = [K] × 9⁄5 − 459.67",
  Kelvin_Kelvin:"[°K] = [°K]",
  Kelvin_Newton:"[°N] = ([K] − 273.15) × 33⁄100",
  Kelvin_Rankine:"[°R] = [K] × 9⁄5",
  Kelvin_Reaumur:"[°Ré] = ([K] − 273.15) × 4⁄5",
  Kelvin_Romer:"[°Ro] = ([K] − 273.15) × 21⁄40 + 7.5",
  Newton_Celsius:"[°C] = [°N] × 100⁄33",
  Newton_Delisle:"[°De] = (33 − [°N]) × 50⁄11",
  Newton_Fahrenheit:"[°F] = [°N] × 60⁄11 + 32",
  Newton_Kelvin:"[K] = [°N] × 100⁄33 + 273.15",
  Newton_Newton:"[°N] = [°N]",
  Newton_Rankine:"[°R] = [°N] × 60⁄11 + 459.67",
  Newton_Reaumur:"[°Ré] = [°N] × 80⁄33",
  Newton_Romer:"[°Ro] = [°N] × 35⁄22 + 7.5",
  Rankine_Celsius:"[°C] = ([°R] − 459.67) × 5⁄9",
  Rankine_Delisle:"[°De] = (373.15 − [°R]) × 5⁄6",
  Rankine_Fahrenheit:"[°F] = [°R] − 459.67",
  Rankine_Kelvin:"[K] = [°R] × 5⁄9",
  Rankine_Newton:"[°N] = ([°R] − 459.67 ) × 11⁄60",
  Rankine_Rankine:"[°R] = [°R]",
  Rankine_Reaumur:"[°Ré] = ([°R] − 459.67) × 4⁄9",
  Rankine_Romer:"[°Ro] = ([°R] − 459.67) × 7⁄24 + 7.5",
  Reaumur_Celsius:"[°C] = [°Ré] × 5⁄4",
  Reaumur_Delisle:"[°De] = (80 − [°Ré]) × 15⁄8",
  Reaumur_Fahrenheit:"[°F] = [°Ré] × 9⁄4 + 32",
  Reaumur_Kelvin:"[K] = [°Ré] × 5⁄4 + 273.15",
  Reaumur_Newton:"[°N] = [°Ré] × 33⁄80",
  Reaumur_Rankine:"[°R] = [°Ré] × 9⁄4 + 491.67",
  Reaumur_Reaumur:"[°Ré] = [°Ré]",
  Reaumur_Romer:"[°Ro] = [°Ré] × 21⁄32 + 7.5",
  Romer_Celsius:"[°C] = ([°Ro] − 7.5) × 40⁄21",
  Romer_Delisle:"[°De] = (60 − [°Ro]) × 20⁄7",
  Romer_Fahrenheit:"[°F] = ([°Ro] − 7.5) × 24⁄7 + 32",
  Romer_Kelvin:"[K] = ([°Ro] − 7.5) × 40⁄21 + 273.15",
  Romer_Newton:"[°N] = ([°Ro] − 7.5) × 22⁄35",
  Romer_Rankine:"[°R] = ([°Ro] − 7.5) × 24⁄7+ 491.67",
  Romer_Reaumur:"[°Ré] = ([°Ro] − 7.5) × 32⁄21",
  Romer_Romer:"[°Ro] = [°Ro]",
  };
	return f[tuple];
}

function temperatureConversion(from,to,q){
  q *= 1;
  var calculate = {
    Celsius_Celsius:q*1,
    Celsius_Delisle:(100-q)*3/2,
    Celsius_Fahrenheit:q*9/5+32,
    Celsius_Kelvin:q+273.15,
    Celsius_Newton:q*33/100,
    Celsius_Rankine:(q+273.15)*9/5,
    Celsius_Reaumur:q*4/5,
    Celsius_Romer:q*21/40+7.5,
    Delisle_Celsius:100-q*2/3,
    Delisle_Delisle:q*1,
    Delisle_Fahrenheit:212-q*6/5,
    Delisle_Kelvin:373.15-q*2/3,
    Delisle_Newton:33-q*11/50,
    Delisle_Rankine:671.67-q*6/5,
    Delisle_Reaumur:80-q*8/15,
    Delisle_Romer:60-q*7/20,
    Fahrenheit_Celsius:(q-32)*5/9,
    Fahrenheit_Delisle:(212-q)*5/6,
    Fahrenheit_Fahrenheit:q*1,
    Fahrenheit_Kelvin:(q+459.67)*5/9,
    Fahrenheit_Newton:(q-32)*11/60,
    Fahrenheit_Rankine:q+459.67,
    Fahrenheit_Reaumur:(q-32)*4/9,
    Fahrenheit_Romer:(q-32)*7/24+7.5,
    Kelvin_Celsius:q-273.15,
    Kelvin_Delisle:(373.15-q)*3/2,
    Kelvin_Fahrenheit:q*9/5-459.67,
    Kelvin_Kelvin:q*1,
    Kelvin_Newton:(q-273.15)*33/100,
    Kelvin_Rankine:q*9/5,
    Kelvin_Reaumur:(q-273.15)*4/5,
    Kelvin_Romer:(q-273.15)*21/40+7.5,
    Newton_Celsius:q*100/33,
    Newton_Delisle:(33-q)*50/11,
    Newton_Fahrenheit:q*60/11+32,
    Newton_Kelvin:q*100/33+273.15,
    Newton_Newton:q*1,
    Newton_Rankine:q*60/11+491.67,
    Newton_Reaumur:q*80/33,
    Newton_Romer:q*35/22+7.5,
    Rankine_Celsius:(q-491.67)*5/9,
    Rankine_Delisle:(671.67-q)*5/6,
    Rankine_Fahrenheit:q-459.67,
    Rankine_Kelvin:q*5/9,
    Rankine_Newton:(q-491.67)*11/60,
    Rankine_Rankine:q*1,
    Rankine_Reaumur:(q-491.67)*4/9,
    Rankine_Romer:(q-491.67)*7/24+7.5,
    Reaumur_Celsius:q*5/4,
    Reaumur_Delisle:(80-q)*15/8,
    Reaumur_Fahrenheit:q*9/4+32,
    Reaumur_Kelvin:q*5/4+273.15,
    Reaumur_Newton:q*33/80,
    Reaumur_Rankine:q*9/4+491.67,
    Reaumur_Reaumur:q*1,
    Reaumur_Romer:q*21/32+7.5,
    Romer_Celsius:(q-7.5)*40/21,
    Romer_Delisle:(60-q)*20/7,
    Romer_Fahrenheit:(q-7.5)*24/7+32,
    Romer_Kelvin:(q-7.5)*40/21+273.15,
    Romer_Newton:(q-7.5)*22/35,
    Romer_Rankine:(q-7.5)*24/7+491.67,
    Romer_Reaumur:(q-7.5)*32/21,
    Romer_Romer:q*1,
  };
  
  var ret = calculate[from + "_" + to];

  return ret;

}
  
function validateTemperature(from,q){
  // valida o menor valor de temperatura na entrada
  q = q * 1;

  var Celsius_Kelvin = q+273.15;
  var Fahrenheit_Kelvin = (q+459.67)*5/9;
  var Delisle_Kelvin = 373.15-q*2/3;
  var Newton_Kelvin = q*100/33+273.15;
  var Reaumur_Kelvin = q*5/4+273.15;
  var Romer_Kelvin=(q-7.5)*40/21+273.15;

  if((from == "Kelvin" || from == "K") && q < -1e-12){
    return true;
  }
  if((from == "Celsius" || from == "C") && Celsius_Kelvin < -1e-12){return true; // 0K = -273.15 °C
  }
  if((from == "Fahrenheit" || from == "F") && Fahrenheit_Kelvin < -1e-12){ // 0K = -459.67 °F
    return true;
  }
  if((from == "Rankine" || from == "R") && q < -1e-12){ // 0K = 0 °R
    return true;
  }
  if((from == "Delisle" || from == "De") && Delisle_Kelvin < -1e-12){ // 0K = 559.72°
    return true;
  }
  if((from == "Newton" || from == "N") && Newton_Kelvin < -1e-12){ // 0K = -90.139° N
    return true;
  }
  if((from == "Reaumur" || from == "Ré") && Reaumur_Kelvin < -1e-12){ // 0K = -218.52 Ré°
    return true;
  }
  if((from == "Romer" || from == "Ro") && Romer_Kelvin < -1e-12){ // 0K = -135.9 °Ro
    return true;
  }

  return false;
  
}

function usableFractionsVerbose(x, from, to, qTxt) {
	x *= 1;
	var q = frac2dec(qTxt.toString());
	var maxErr = 20; // erro máximo admitido da fração de saída em %
	var minFractionDenominator = 16; // 16 permite imprimir as frações usáveis maiores que ou iguais a 1/16 ->x/16, x/8, x/4 e x/2
	var near = "";
	var err = 0;
	var ret = "";
	var decPart = 0;
	var showFractions = false;

	var intPart = parseInt(x);
	if (intPart > 0) {
		decPart = x - intPart;
	} else {
		decPart = x;
	}

	var usableFractionsArr = [];

	if ((digitsAfter(x) > 0) && (decPart >= 1 / 256) && (x < 6)) { // o valor não é inteiro, portanto pode ser expresso como uma fração. Só mostramos valores relativamente pequenos, pois quanto valo é muit mair do que uma fração, mostra resultados do tipo 2356 1/2,  2356 1/3,  2356 1/4,  2356 3/2, etc, simultaneamente. O que não faz sentido.

		err = Math.abs(decToUsableFracionPError(decPart, 2)); // Notar que o erro é em relação à parte decimal
		var u2 = decToUsableFracion(x, 2);
		if (u2 && err <= maxErr && minFractionDenominator >= 2) {
			usableFractionsArr.push(u2); // armazena a fração no vetor para checcar se existe nos próximos passos
			showFractions = true;
			near += "<p><span class='destacado'><strong>" + u2 + " " + pluralForConverters(to, x) +  "</strong></span>";
			if (err > 0) {
				near += " <span class='small'>(" + decToUsableFracionPError(x, 2) + "% " + (decToUsableFracionPError(x, 2) > 0 ? "bigger)" : "smaller)") + "</span>";
			} else {
				near += " (exact value)";
			}
			near += "</p>";
		}

		err = Math.abs(decToUsableFracionPError(decPart, 4));
		var u4 = decToUsableFracion(x, 4);
		if (u4 && err <= maxErr && usableFractionsArr.indexOf(u4) < 0 && minFractionDenominator >= 4) {
			usableFractionsArr.push(u4);
			showFractions = true;
			near += "<p><span class='destacado'><strong>" + u4 + " " + pluralForConverters(to, x) +  "</strong></span>";
			if (err > 0) {
				near += " <span class='small'>(" + decToUsableFracionPError(x, 4) + "% " + (decToUsableFracionPError(x, 4) > 0 ? "bigger)" : "smaller)") + "</span>";
			} else {
				near += " (exact value)";
			}
			near += "</p>";
		}

		err = Math.abs(decToUsableFracionPError(decPart, 8));
		var u8 = decToUsableFracion(x, 8);
		if (u8 && err <= maxErr && usableFractionsArr.indexOf(u8) < 0 && minFractionDenominator >= 8) {
			usableFractionsArr.push(u8);
			showFractions = true;
			near += "<p><span class='destacado'><strong>" + u8 + " " + pluralForConverters(to, x) +  "</strong></span>";
			if (err > 0) {
				near += " <span class='small'>(" + decToUsableFracionPError(x, 8) + "% " + (decToUsableFracionPError(x, 8) > 0 ? "bigger)" : "smaller)") + "</span>";
			} else {
				near += " (exact value)";
			}
			near += "</p>";
		}

		err = Math.abs(decToUsableFracionPError(decPart, 16));
		var u16 = decToUsableFracion(x, 16);
		if (u16 && err <= maxErr && usableFractionsArr.indexOf(u16) < 0 && minFractionDenominator >= 16) {
			usableFractionsArr.push(u16);
			showFractions = true;
			near += "<p><span class='destacado'><strong>" + u16 + " " + pluralForConverters(to, x) +  "</strong></span>";
			if (err > 0) {
				near += " <span class='small'>(" + decToUsableFracionPError(x, 16) + "% " + (decToUsableFracionPError(x, 16) > 0 ? "bigger)" : "smaller)") + "</span>";
			} else {
				near += " (exact value)";
			}
			near += "</p>";
		}

		err = Math.abs(decToUsableFracionPError(decPart, 32));
		var u32 = decToUsableFracion(x, 32);
		if (u32 && err <= maxErr && usableFractionsArr.indexOf(u32) < 0 && minFractionDenominator >= 32) {
			usableFractionsArr.push(u32);
			showFractions = true;
			near += "<p><span class='destacado'><strong>" + u32 + " " + pluralForConverters(to, x) +  "</strong></span>";
			if (err > 0) {
				near += " <span class='small'>(" + decToUsableFracionPError(x, 32) + "% " + (decToUsableFracionPError(x, 32) > 0 ? "bigger)" : "smaller)") + "</span>";
			} else {
				near += " (exact value)";
			}
			near += "</p>";
		}

		err = Math.abs(decToUsableFracionPError(decPart, 64));
		var u64 = decToUsableFracion(x, 64);
		if (u64 && err <= maxErr && usableFractionsArr.indexOf(u64) < 0 && minFractionDenominator >= 64) {
			usableFractionsArr.push(u64);
			showFractions = true;
			near += "<p><span class='destacado'><strong>" + u64 + " " + pluralForConverters(to, x) +  "</strong></span>";
			if (err > 0) {
				near += " <span class='small'>(" + decToUsableFracionPError(x, 64) + "% " + (decToUsableFracionPError(x, 64) > 0 ? "bigger)" : "smaller)") + "</span>";
			} else {
				near += " (exact value)";
			}
			near += "</p>";
		}

		err = Math.abs(decToUsableFracionPError(decPart, 128));
		var u128 = decToUsableFracion(x, 128);
		if (u128 && err <= maxErr && usableFractionsArr.indexOf(u128) < 0 && minFractionDenominator >= 128) {
			usableFractionsArr.push(u128);
			showFractions = true;
			near += "<p><span class='destacado'><strong>" + u128 + " " + pluralForConverters(to, x) +  "</strong></span>";
			if (err > 0) {
				near += " <span class='small'>(" + decToUsableFracionPError(x, 128) + "% " + (decToUsableFracionPError(x, 128) > 0 ? "bigger)" : "smaller)") + "</span>";
			} else {
				near += " (exact value)";
			}
			near += "</p>";
		}

		err = Math.abs(decToUsableFracionPError(decPart, 256));
		var u256 = decToUsableFracion(x, 256);
		if (u256 && err <= maxErr && usableFractionsArr.indexOf(u256) < 0 && minFractionDenominator >= 256) {
			usableFractionsArr.push(u256);
			showFractions = true;
			near += "<p><span class='destacado'><strong>" + u256 + " " + pluralForConverters(to, x) +  "</strong></span>";
			if (err > 0) {
				near += " <span class='small'>(" + decToUsableFracionPError(x, 256) + "% " + (decToUsableFracionPError(x, 256) > 0 ? "bigger)" : "smaller)") + "</span>";
			} else {
				near += " (exact value)";
			}
			near += "</p>";
		}
		err = Math.abs(decToUsableFracionPError(decPart, 512));
		var u512 = decToUsableFracion(x, 512);
		if (u512 && err <= maxErr && usableFractionsArr.indexOf(u512) < 0 && minFractionDenominator >= 512) {
			usableFractionsArr.push(u512);
			showFractions = true;
			near += "<p><span class='destacado'><strong>" + u512 + " " + pluralForConverters(to, x) +  "</strong></span>";
			if (err > 0) {
				near += " <span class='small'>(" + decToUsableFracionPError(x, 512) + "% " + (decToUsableFracionPError(x, 512) > 0 ? "bigger)" : "smaller)") + "</span>";
			} else {
				near += " (exact value)";
			}
			near += "</p>";
		}
	}

	ret = "<h3>" + qTxt + " " + pluralForConverters(from, q) + " as an usable fraction or an integer in " + pluralForConverters(to, 2) + ":</h3>" + near + "<p class='compact'>These are aternative values for " + qTxt + " " + pluralForConverters(from, q) + " in " + pluralForConverters(to) + ". They are represented as a fraction or an integer close to the exact value (<span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span>, <span class='fraction'><span class='top'>1</span><span class='bottom'>4</span></span>, <span class='fraction'><span class='top'>3</span><span class='bottom'>4</span></span> etc.). The approximation error, if any, is to the right of the value.</p>";

	if (showFractions) {
		return ret;
	} else {
		return "";
	}

}

function hasFraction(u) {
	var has;
	//var fruits = ["Banana", "Orange", "Apple", "Mango"];
	//var a = fruits.indexOf("Apple");

	// unidades que usam normalmente frações
	var units = ["fathom","yard","foot","hand","inch","finger","bamboo","barleycorn","stone","pound","troy pound","ounce","troy ounce","Robie","dram","drachme","point","grain","#2.5 can","#10 can","acre foot [US survey]","barrel [UK, wine]","barrel [UK]","barrel [US, dry]","barrel [US, federal]","barrel [US, liquid]","barrel","barrel [US, petroleum]","bucket [UK]","bucket [US]","bucket","bushel [UK]","bushel [US, dry]","cup [Canada]","cup [metric]","cup [US]","cup","gallon [UK]","gallon [US, dry]","gallon [US, liquid]","gallon [liquid]","gallon liquid","gallon","gill [UK]","gill [US]","gill","hogshead [UK]","hogshead [US]","hogshead","imperial gallon","ounce [UK, liquid]","ounce [US, liquid]","ounce [liquid]","ounce","peck [UK]","peck [US]","peck","pint [UK]","pint [US, dry]","pint [US, liquid]","pint","pipe [UK]","pipe [US]","pipe","quart [UK]","quart [US, dry]","quart [US, liquid]","quart","quarter [UK, liquid]","Robie","shot","Tablespoon [metric]","Tablespoon [UK]","Tablespoon [US]","Tablespoon","Teaspoon [metric]","Teaspoon [UK]","Teaspoon [US]","Teaspoon"];

	has = units.indexOf(u);

	if (has > -1) { // > -1 pois o primeiro elemento começa em zero (legua) --> 0:"legua",1:"milla",2:"estadio" ...

		return true;

	} else {

		return false;
	}
}

function pluralForConverters(palavra, q) {
// Se a apalvra não existir no array abaixo, coloca simplesmente um 's" no final da palavra dependendo da quantidade
// Caso a quantidade não seja informada, assume o valor 2 (plural por padrão)
// Esta é um clone da função plural em PHP
q = typeof q !== 'undefined' ? q : 2;
var plurais = {
"is":"are,","\"":"\"","″":"″","′":"′","gradian [grad]":"gradians [grad]","square foot":"square feet","meter per square second":"meters per square second","gram per cubic centimeter":"grams per cubic centimeter","gram per liter":"grams per liter","gram per milliliter":"grams per milliliter","kilogram per liter":"kilograms per liter","kilogram per cubic meter":"kilograms per cubic meter","tonne per cubic meter":"tonnes per cubic meter","milligram per liter":"milligrams per liter","milligram per milliliter":"milligrams per milliliter","ounce per cubic inch":"ounces per cubic inch","ounce per gallon [UK]":"ounces per gallon [UK]","ounce per gallon [US]":"ounces per gallon [US]","pound per cubic inch":"pounds per cubic inch","pound per gallon [UK]":"pounds per gallon [UK]","pound per gallon [US]":"pounds per gallon [US]","calorie (nutritional)":"calories (nutritional)","calorie (thermochemical)":"calories (thermochemical)","gallon (US) of LPG":"gallons (US) of LPG","horsepower-hour":"horsepowers-hour","kilogram-force meter":"kilogram-force meter","kilowatt-hour":"kilowatts-hour","ton (explosive)":"tons (explosive)","watt-hour":"watts-hour","barrel per hour [petroleum]":"barrels per hour [petroleum]","barrel per minute [petroleum]":"barrels per minute [petroleum]","barrel per second [petroleum]":"barrels per second [petroleum]","barrel per second [UK]":"barrels per second [UK]","barrel per second [US]":"barrels per second [US]","cubic foot per minute":"cubic feet per minute","cubic inch per second":"cubic inches per second","cubic meter per minute":"cubic meters per minute","cubic yard per minute":"cubic yards per minute","cubic yard per second":"cubic yards per second","gallon per hour [UK]":"gallons per hour [UK]","gallon per minute [UK]":"gallons per minute [UK]","gallon per hour [US]":"gallons per hour [US]","gallon per minute [US]":"gallons per minute [US]","liter per minute":"liters per minute","milliliter per minute":"milliliters per minute","Btu/hour":"Btu/hour","calorie/hour":"calories/hour","horsepower (electric)":"horsepower (electric)","horsepower (international)":"horsepower (international)","horsepower (metric)":"horsepower (metric)","horsepower (water)":"horsepower (water)","kilocalorie/hour":"kilocalories/hour","ton of refrigeration":"tons of refrigeration","foot":"feet","inch":"inches","ton [long, UK]":"tons [long, UK]","ton [short, US]":"tons [short, US]","hundredweight [long, UK]":"hundredweights [long, UK]","hundredweight [short, US]":"hundredweights [short, US]","quarter [UK]":"quarters [UK]","quarter [US]":"quarters [US]","atm":"atm","torr":"torrs","kilopascal [kPa]":"kilopascals","Pascal":"pascals","millimeter of mercury [0 °C]":"millimeters of mercury at 0 °C","atmosphere [standard]":"standard atmospheres","atmosphere technical [at]":"technical atmospheres","Water Column [meter]":"Water Columns [meter]","kilogram-force per square meter":"kilograms-force per square meter","dyne per square centimeter":"dynes per square centimeters","gram-force per square centimeter":"grams-force per square centimeter","kilogram-force per square centimeter":"kilograms-force per square centimeter","kilogram-force per square millimeter":"kilograms-force per square millimeter","kilopond per square meter":"kiloponds per square meter","millibar":"millibars","newton per square meter":"newtons per square meter","ounce per square inch":"ounces per square inch","pound per square foot":"pounds per square foot","pound per square inch":"pounds per square inch","poundal per square foot":"poundals per square foot","technical atmosphere":"technical atmospheres","ton per square meter":"tons per square meter","Water Column [centimeter]":"centimeters water column (cm.wc  or cm.wg)","Water Column [inch]":"inches water column","Water Column [millimeter]":"centimeters water column (ml.wc  or ml.wg)","kilometer per second":"kilometers per second","kilometer per hour":"kilometers per hour","centimeter per second":"centimeters per second","meter per second":"meters per second","meter per minute":"meters per minute","foot per second":"feet per second","foot per minute":"feet per minute","foot per hour":"feet per hour","mile per hour":"miles per hour","mile per second":"miles per second","nautical mile per hour":"nautical miles per hour","yard per second":"yards per second","speed of light [air]":"speed of light [air]","speed of light [vacuum]":"speed of light [vacuum]","speed of sound [air]":"speed of sound [air]","cup [metric]":"cups [metric]","Tablespoon [metric]":"Tablespoons [metric]","Teaspoon [metric]":"Teaspoons [metric]","barrel [UK]":"barrels [UK]","bucket [UK]":"buckets [UK]","bushel [UK]":"bushels [UK]","cubic foot":"cubic feet","cubic inch":"cubic inches","gallon [liquid]":"gallons [liquid]","gallon [UK]":"gallons [UK]","gill [US]":"gills [US]","gill [UK]":"gills [UK]","ounce [UK, liquid]":"ounces [UK, liquid]","peck [UK]":"pecks [UK]","peck [US]":"pecks [US]","pint [UK]":"pints [UK]","Tablespoon [UK]":"Tablespoons [UK]","Teaspoon [UK]":"Teaspoons [UK]","degree Celsius [°C]":"degrees Celsius [°C]","degree Fahrenheit [°F]":"degrees Fahrenheit [°F]","Kelvin [K]":"Kelvins [K]","degree Rankine [°R]":"degrees Rankine [°R]","foot per square second":"feet per square second","gravity (acceleration)":"gravities","inch per square second":"inches per square second","Faraday [F]":"Faradays [F]","millifaraday [mF]":"millifaradays [mF]","microfaraday [µF]":"microfaradays [µF]","manofaraday [nF]":"nanofaradays [nF]","picofaraday [pF]":"picofaradays [pF]","Coulomb [C]":"Coulombs [C]","Ampere hour [A.hr]":"Amperes hour [A.hr]","Newton per meter (N/m)":"Newtons per meter (N/m)","pound force per inch (lbf/in)":"pounds force per inch (lbf/in)","pound force per foot (lbf/ft)":"pounds force per foot (lbf/ft)","kilogram per second (kg/s)":"kilograms per second (kg/s)","pound mass per second (lbm/s)":"pounds mass per second (lbm/s)","pound mass per minute (lbm/min)":"pounds mass per minute (lbm/min)","second (sec)":"seconds (sec)","day (mean solar)":"days (mean solar)","day (sidereal)":"days (sidereal)","hour (mean solar)":"hours (mean solar)","hour (sidereal)":"hours (sidereal)","minute (mean solar)":"minutes (mean solar)","minute (sidereal)":"minutes (sidereal)","month (mean calendar)":"months (mean calendar)","second (sidereal)":"seconds (sidereal)","year (calendar)":"years (calendar)","year (tropical)":"years (tropical)","year (sidereal)":"years (sidereal)","Newton-meter (N.m)":"Newtons-meter (N.m)","dyne-centimeter(dy.cm)":"dynes-centimeter(dy.cm)","kgf-meter (kgf.m)":"kgf-meter (kgf.m)","lbf-inch (lbf.in)":"lbf-inch (lbf.in)","lbf-foot (lbf.ft)":"lbf-foot (lbf.ft)","barrel per minute [UK]":"barrels per minute [UK]","barrel per minute [US]":"barrels per minute [US]","cubic centimeter per second":"cubic centimeters per second","cubic foot per second":"cubic feet per second","cubic meter per second":"cubic meters per second","cubic millimeter per second":"cubic millimeters per second","gallon per second [UK]":"gallons per second [UK]","gallon per second [US]":"gallons per second [US]","liter per second":"liters per second","milliliter per second":"milliliters per second","Newton-second per meter":"Newton-second per meter","square foot per second":"square foot per second","poundal-second per square foot":"poundal-second per square foot","pound mass per foot-second":"pound mass per foot-second","pound force-second per square foot":"pound force-second per square foot","slug per foot-second":"slug per foot-second","lumen/m² (lu/m²)":"lumens/m² (lu/m²)","lumen/cm²":"lumens/cm²","lumen/ft²":"lumens/ft²","foot-candle (ft-cdl)":"foot-candles (ft-cdl)","foot-lambert":"foot-lamberts","candela/m²":"candelas/m²","candela/cm²":"candelas/cm²","lux (lx)":"lux (lx)","nox (nx)":"nox (nx)","phot (ph)":"phot (ph)","cm^2":"cm^2","cm²":"cm²","ft^2":"ft^2","ft²":"ft²","ha":"ha","in^2":"in^2","in²":"in²","km^2":"km^2","km²":"km²","m^2":"m^2","m²":"m²","mi^2":"mi^2","mi²":"mi²","mm^2":"mm^2","mm²":"mm²","cc":"cc","m³":"m³","cm³":"cm³","mm³":"mm³","cl":"cl","cm":"cm","ft":"ft","in":"in","km":"km","m":"m","mi":"mi","mm":"mm","pes":"pes","yd":"yd","Btu":"Btu","oz":"oz","lb":"lb","st":"st","gr":"gr","kg":"kg","g":"g","mg":"mg","dr":"dr","qr":"qr","qtr":"qtr","cwt":"cwt","t":"t","F":"degrees Fahrenheit","Celsius":"degrees Celsius","C":"C","Kelvin":"Kelvin","K":"K","Rankine":"degrees Rankine","R":"R","Delisle":"degrees Delisle","Newton":"degrees Newton","Romer":"degrees Romer","Reaumur":"degrees Reaumur","cm/d":"cm/d","cm/h":"cm/h","cm/min":"cm/min","cm/s":"cm/s","ft/h":"ft/h","ft/s":"ft/s","fps":"fps","in/h":"in/h","in/s":"in/s","km/h":"km/h","km/s":"km/s","kph":"kph","m/h":"m/h","m per min":"m/min","m/s":"m/s","mi/d":"mi/d","mi/h":"mi/h","mi per min":"mi/min","mi/s":"mi/s","mph":"mph","mm/s":"mm/s","yd/h":"yd/h","yd/s":"yd/s","at":"at","aPa":"aPa","Ba":"Ba","cPa":"cPa","dPa":"dPa","dyn/cm2":"dyn/cm2","EPa":"EPa","fPa":"fPa","Gbar":"Gbar","GPa":"GPa","gf/cm2":"gf/cm2","gf per cm2":"gf per cm2","hPa":"hPa","kgf/cm2":"kgf/cm2","kgf/mm2":"kgf/mm2","kgf/m2":"kgf/m2","kPa":"kPa","kip/cm2":"kip/cm2","kip/m2":"kip/m2","kip per m2":"kip per m2","kip/mm2":"kip/mm2","kip/ft2":"kip/ft2","ksi":"ksi","MPa":"MPa","mbar":"mbar","millihg":"millihg","mPa":"mPa","nPa":"nPa","N/m2":"N/m2","N per m2":"N per m2","N/mm2":"N/mm2","Pa":"Pa","PPa":"PPa","pPa":"pPa","lbf/ft2":"lbf/ft2","lbf per ft2":"lbf per ft2","psi":"psi","pdl/ft2":"pdl/ft2"};

var plural = plurais[palavra];

if (!plural) { // se não tivar a palavra no array
	plural = palavra + "s";
} else {}

if (q > 1) {
	return plural;
} else {
	return palavra;
}
}