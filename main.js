let soulDate = prompt(
  "Ingrese su fecha de nacimiento para saber cuales son sus soul's elements, animals and flowers\nDe esta forma: xx xx xxxx"
);

function solarDate(inputDate) {
  var numberArray = inputDate.split(" ");

  let day = numberArray[0];
  let month = numberArray[1];
  let year = numberArray[2];

  let universeClock = new Date(`${year} ${month} ${day}`);
  return universeClock;
}

function elementSurrender(nextSoul) {
  let mySoulyear = `${
    soulDate.getMonth() + 1
  } ${soulDate.getDate()} ${new Date().getFullYear()}`;
  let soulTest = new Date(mySoulyear) - new Date();
  let soulTest2 = Math.floor(soulTest / (1000 * 60 * 60 * 24) + 1);

  if (soulTest2 > 0) {
    let nextSolar = `${
      soulDate.getMonth() + 1
    } ${soulDate.getDate()} ${new Date().getFullYear()}`;
    let planetNumber = new Date(nextSolar) - new Date();
    let final = Math.floor(planetNumber / (1000 * 60 * 60 * 24) + 1);
    return final;
  } else if (soulTest2 < 0) {
    let nextSolar = `${soulDate.getMonth() + 1} ${soulDate.getDate()} ${
      new Date().getFullYear() + 1
    }`;
    let planetNumber = new Date(nextSolar) - new Date();
    let final = Math.floor(planetNumber / (1000 * 60 * 60 * 24) + 1);
    return final;
  } else {
    return "0";
  }
}

// soul stones ***
function soulStone() {
  let x = Math.floor(Math.random() * 6);

  if (x === 0) {
    return "Amatista";
  } else if (x === 1) {
    return "Cuarso";
  } else if (x === 2) {
    return "Agata";
  } else if (x === 3) {
    return "Obsidiana";
  } else if (x === 4) {
    return "Jade";
  } else if (x === 5) {
    return "Ambar";
  } else {
    return "Lapislasuli";
  }
}

// soulflowers surrender
function soulFlower(datainfo) {
  let dayWeek;

  switch (datainfo.getDay()) {
    case 0:
      dayWeek = "Rosa";
      return dayWeek;
      //alert("Rosa");
      break;
    case 1:
      dayWeek = "Lila";
      return dayWeek;
      //alert("Lila");
      break;
    case 2:
      dayWeek = "Orquidia";
      return dayWeek;
      //alert("Orquidia");
      break;
    case 3:
      dayWeek = "Cerezo";
      return dayWeek;
      //alert("Cerezo");
      break;
    case 4:
      dayWeek = "Petunia";
      return dayWeek;
      //alert("Petunia");
      break;
    case 5:
      dayWeek = "Jazmin";
      return dayWeek;
      //alert("Jazmin");
      break;
    case 6:
      dayWeek = "Loto";
      return dayWeek;
      //alert("Loto");
      break;
  }
  return dayWeek;
}
//souls animal surrender
function soulAnimal(numberDate) {
  let day = numberDate.getDate();
  let month = numberDate.getMonth() + 1;

  if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
    return "Gato";
  } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
    return "Perro";
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
    return "Caballo";
  } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
    return "Cabra";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    return "Leon";
  } else if ((month == 6 && day >= 22) || (month == 7 && day <= 21)) {
    return "Tigre";
  } else if ((month == 7 && day >= 22) || (month == 8 && day <= 22)) {
    return "Aguila";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    return "Mono";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    return "Cangrejo";
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 22)) {
    return "Tiburon";
  } else if ((month == 10 && day >= 23) || (month == 12 && day <= 21)) {
    return "Gacela";
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 20)) {
    return "Unicornio";
  }
}

// the lucky numbers
function numberLucky(date) {
  let inputdate = numberDate;
  let rightFN = new Date();

  let h = new Date(rightFN) - new Date(date);
  let luckToCome = Math.floor(h / (1000 * 60 * 60 * 24));
  return luckToCome;
}

// mineral souls surrender
function mineralSoul(mineral) {
  let date;
  // debugger
  switch (month.getMonth() + 1) {
    case 1:
      return "sodio";
      break;
    case 2:
      return "potasio";
      break;
    case 3:
      return "fosforo";
      break;
    case 4:
      return "azufre";
      break;
    case 5:
      return "calcio";
      break;
    case 6:
      return "hierro";
      break;
    case 7:
      return "yodo";
      break;
    case 8:
      return "zinc";
      break;
    case 9:
      return "cobalto";
      break;
    case 10:
      return "magnesio";
      break;
    case 11:
      return "cobre";
      break;
    case 12:
      return "mercurio";
      break;
  }
}

const salida = ` ${soulDate.getDate()} de ${month(
  soulDate
)} de ${soulDate.getFullYear()}.\n

Te rodean ${elementSurrender(soulDate)} elementos con tu misma vibracion. \n
Tu piedra de alma es la ${soulStone()}.\n
Tu flor elemental es la ${soulFlower(souldate)}. \n
Tu animal de poder es el/la ${soulAnimal(souldate)}. \n
Tu numbero de la suerte de este mes es el ${numberLucky(souldate)}.`;

console.log(salida);
alert(salida);
