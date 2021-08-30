'use strict';
// RELOAD BUTTON
getElement('#reload').addEventListener('click', () => {
  document.location.reload();
});

// Select the Formula dialog container
const cardPanel = getElement('#panel');

// Declare all Select Parent Element //
const selectArea = getElement('#area');
const interestProfitArea = getElement('#interestProfit');
const generalArea = getElement('#generals');
const convertersArea = getElement('#converters');
const volumesArea = getElement('#volumes');
const perimeterArea = getElement('#perimeter');
const arithmeticProgArea = getElement('#arithmeticProg');
const anglesGeometryArea = getElement('#anglesGeometry');

// onChange Event for area SELECT element
selectArea.addEventListener('change', () => {
  triggerEvent(selectArea);
});
// onChange Event for interestProfit SELECT element
interestProfitArea.addEventListener('change', () => {
  triggerEvent(interestProfitArea);
});
// onChange Event for interestProfit SELECT element
generalArea.addEventListener('change', () => {
  triggerEvent(generalArea);
});
// onChange Event for interestProfit SELECT element
convertersArea.addEventListener('change', () => {
  triggerEvent(convertersArea);
});
// onChange Event for interestProfit SELECT element
volumesArea.addEventListener('change', () => {
  triggerEvent(volumesArea);
});
// onChange Event for interestProfit SELECT element
perimeterArea.addEventListener('change', () => {
  triggerEvent(perimeterArea);
});
// onChange Event for arithmeticProgArea SELECT element
arithmeticProgArea.addEventListener('change', () => {
  triggerEvent(arithmeticProgArea);
});
// onChange Event for angles SELECT element
anglesGeometryArea.addEventListener('change', () => {
  triggerEvent(anglesGeometryArea);
});

// ==== FUNCTION SETS =====
function runFunction(option) {
  if (option === 'areaSquare') {
    areaOfSquare();
  } else if (option === 'areaCircle') {
    areaOfCircle();
  } else if (option === 'areaTriangle') {
    areaOfTriangle();
  } else if (option === 'areaTrapezium') {
    areaOfTrapezium();
  } else if (option === 'areaRectangle') {
    areaOfRectangle();
  } else if (option === 'tsAreaCylinder') {
    tsAreaCylinder();
  } else if (option === 'tsAreaCone') {
    tsAreaOfCone();
  } else if (option === 'simpleInterest') {
    simpleInterest();
  } else if (option === 'compoundInterest') {
    compoundInterest();
  } else if (option === 'percentProfitOrLoss') {
    percentageProfitLoss();
  } else if (option === 'sumOfSquares') {
    sumOfSquares();
  } else if (option === 'celsiusFah') {
    celsiusFahConverter();
  } else if (option === 'fahCelsius') {
    fahCelsiusConverter();
  } else if (option === 'fahKelvin') {
    fahKelvinConverter();
  } else if (option === 'celsiusKel') {
    celsiusKelConverter();
  } else if (option === 'cubeVol') {
    cubeVol();
  } else if (option === 'cuboidVol') {
    cuboidVol();
  } else if (option === 'coneVol') {
    coneVol();
  } else if (option === 'cylinderVol') {
    cylinderVol();
  } else if (option === 'sphereVol') {
    sphereVol();
  } else if (option === 'rightCircularConeVol') {
    rightCircularConeVol();
  } else if (option === 'prismVol') {
    prismVol();
  } else if (option === 'rightAngledPrismVol') {
    rightAngledPrismVol();
  } else if (option === 'circumferenceCircle') {
    circumferenceCircle();
  } else if (option === 'periKite') {
    periKite();
  } else if (option === 'periHexagon') {
    periHexagon();
  } else if (option === 'periRectangle') {
    periRectangle();
  } else if (option === 'periSquare') {
    periSquare();
  } else if (option === 'periTriangle') {
    periTriangle();
  } else if (option === 'periTrapezium') {
    periTrapezium();
  } else if (option === 'sAreaSphere') {
    sAreaSphere();
  } else if (option === 'sAreaCylinder') {
    sAreaCylinder();
  } else if (option === 'sAreaCone') {
    sAreaCone();
  } else if (option === 'differenceOfSquares') {
    differenceOfSquares();
  } else if (option === 'effIntRate') {
    effIntRate();
  } else if (option === 'decBinaryConversion') {
    decBinaryConversion();
  } else if (option === 'addConNumbers') {
    addConNumbers();
  } else if (option === 'interestRate') {
    interestRate();
  } else if (option === 'degreeRadians') {
    degreeRadians();
  } else if (option === 'radiansDegree') {
    radiansDegree();
  } else if (option === 'kelCelsius') {
    kelCelsiusConverter();
  } else if (option === 'meanNumbers') {
    meanNumbers();
  } else if (option === 'mediumNumbers') {
    mediumNumbers();
  } else if (option === 'modeNumbers') {
    modeNumbers();
  } else if (option === 'rangeNumbers') {
    rangeNumbers();
  } else if (option === 'sumOfPerfectSquares') {
    sumOfPerfectSquares();
  } else if (option === 'dailyComInterest') {
    dailyComInterest();
  } else if (option === 'diagonalSquare') {
    diagonalSquare();
  } else if (option === 'diagonalRectangle') {
    diagonalRectangle();
  } else if (option === 'sumIntAngles') {
    sumIntAngles();
  }
}

/* MATH OBJECT FOR ALL FORMULAS */
const mathLib = {
  PI: Math.PI,
  areaSquare(length) {
    return length * length;
  },
  areaCircle(radius) {
    return this.PI * Math.pow(radius, 2);
  },
  areaTriangle(base, height) {
    return (1 / 2) * base * height;
  },
  areaTrapezium(a, b, height) {
    return (1 / 2) * (a + b) * height;
  },
  areaRectangle(length, width) {
    return length * width;
  },
  tsAreaCylinder(radius, height) {
    return Math.round(2 * this.PI * radius * (height + radius) * 100) / 100;
  },
  sAreaCylinder(radius, height) {
    return Math.round(2 * this.PI * radius * height * 100) / 100;
  },
  tsAreaCone(baseRadius, slantHeight) {
    return this.PI * baseRadius * (slantHeight + baseRadius);
  },
  simpleInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
  },
  compoundInterest(principal, interestRate, nPeriod) {
    const FV = principal * Math.pow(1 + interestRate / 100, nPeriod);
    return Math.floor(FV - principal);
  },
  percentProfitOrLoss(sellPrice, costPrice, category) {
    if (category === 'profit') {
      return sellPrice - costPrice > 0 ? 'Profit = ' + (sellPrice - costPrice) : 'No Profit made ❕';
    } else if (category === 'loss') {
      return sellPrice - costPrice < 0 ? 'Loss = ' + Math.abs(sellPrice - costPrice) : 'No Loss ❕';
    } else if (category === 'profit_PERCENT') {
      const profit = sellPrice - costPrice;
      const profitPercentage = profit > 0 ? 'Percentage Profit = ' + ((profit * 100) / costPrice).toFixed(1) + '%' : 'No % Profit ❕';
      return profitPercentage;
    } else if (category === 'loss_PERCENT') {
      const loss = costPrice - sellPrice;
      const lossPercentage = loss > 0 ? 'Percentage Loss = ' + ((loss * 100) / costPrice).toFixed(1) + '%' : 'No % Loss ❕';
      return lossPercentage;
    }
  },
  sumOfSquares(numbers) {
    const resultArr = numbers
      .trim()
      .split(' ')
      .map((element) => {
        return parseFloat(element);
      });
    const total = resultArr.reduce((acc, curr) => {
      return acc + curr;
    });
    const mean = Math.round((total / resultArr.length) * 100) / 100;
    const variance = resultArr.reduce((acc, curr) => {
      return acc + Math.pow(curr - mean, 2);
    }, 0);
    // Round off to 3d.p
    return Math.round(variance * 1000) / 1000;
  },
  meanNumbers(numbers) {
    const resultArr = numbers.trim().split(' ');
    resultArr.forEach((num, index, arr) => {
      arr[index] = parseFloat(num);
    });
    const meanResult = resultArr.reduce((total, values) => {
      return (total += values);
    }, 0);
    return meanResult / resultArr.length;
  },
  mediumNumbers(numbers) {
    const resultArr = numbers
      .trim()
      .split(' ')
      .map((number) => parseFloat(number))
      .sort((a, b) => a - b);
    if (resultArr.length % 2 === 1) return resultArr[(resultArr.length + 1) / 2 - 1];
    else return (resultArr[resultArr.length / 2 - 1] + resultArr[resultArr.length / 2]) / 2;
  },
  modeNumbers(numbers) {
    // validating user input
    const resultArr = numbers
      .replace(/[a-zA-Z]/g, '')
      .trim()
      .split(' ')
      .filter((char) => /\d/.test(char))
      .map((number) => parseInt(number));
    const counterMap = {};
    let max = 0,
      modes = [];
    for (let num of resultArr) {
      // build the counter object storing all number occurence
      if (num in counterMap) counterMap[num]++;
      else counterMap[num] = 1;
      // check for the highest occurence
      if (counterMap[num] > max) {
        modes = [num];
        max = counterMap[num];
      } else if (counterMap[num] == max) {
        modes.push(num);
        max = counterMap[num];
      }
    }
    return modes.length === resultArr.length ? 'No mode for this number set' : `[ ${modes} ]`;
  },
  rangeNumbers(range) {
    const resultArr = range
      .replace(/[a-zA-Z]/g, '')
      .trim()
      .split(' ')
      .filter((char) => /\d/.test(char))
      .map((number) => parseInt(number))
      .sort((a, b) => a - b);
    const result = resultArr[resultArr.length - 1] - resultArr[0];
    return result;
  },
  celsiusFahConverter(celsius) {
    return (Math.round((9 / 5) * celsius + 32) * 100) / 100;
  },
  celsiusKelConverter(celsius) {
    return celsius + 273.15;
  },
  fahCelsiusConverter(fahrenheit) {
    return Math.round((((fahrenheit - 32) * 5) / 9) * 100) / 100;
  },
  fahKelvinConverter(fahrenheit) {
    return Math.round((5 / 9) * (fahrenheit + 459.67) * 100) / 100;
  },
  cubeVol(length) {
    return Math.pow(length, 3);
  },
  cuboidVol(length, width, height) {
    return length * width * height;
  },
  coneVol(radius, height) {
    return Math.round((1 / 3) * this.PI * radius * radius * height * 100) / 100;
  },
  cylinderVol(radius, height) {
    return (Math.round(Math.PI * radius * radius * height) * 100) / 100;
  },
  sphereVol(radius) {
    return (Math.round((4 / 3) * this.PI * radius * radius * radius) * 100) / 100;
  },
  rightCircularConeVol(radius, height) {
    return (Math.round((1 / 3) * this.PI * radius * radius * height) * 100) / 100;
  },
  prismVol(length, width, height) {
    return length * width * height;
  },
  rightAngledPrismVol(baseTriangle, widthTriangle, height) {
    return (Math.round((1 / 2) * (baseTriangle * widthTriangle) * height) * 100) / 100;
  },
  circumferenceCircle(category, value) {
    if (category === 'diam') return (Math.round(this.PI * value) * 100) / 100;
    else return (Math.round(2 * this.PI * value) * 100) / 100;
  },
  periRectangle(length, breadth) {
    return 2 * (length + breadth);
  },
  periSquare(length) {
    return 4 * length;
  },
  periTriangle(sideA, sideB, sideC) {
    return sideA + sideB + sideC;
  },
  periTrapezium(sideA, sideB, sideC, sideD) {
    return sideA + sideB + sideC + sideD;
  },
  periKite(topSide, bottomSide) {
    return 2 * topSide + 2 * bottomSide;
  },
  periHexagon(side) {
    return 6 * side;
  },
  sAreaSphere(radius) {
    return Math.round(100 * 4 * this.PI * radius * radius) / 100;
  },
  sAreaCone(radius, slantHeight) {
    return Math.round(this.PI * radius * slantHeight * 100) / 100;
  },
  differenceOfSquares(value1, value2) {
    return (value1 + value2) * (value1 - value2);
  },
  effIntRate(interestRate, period) {
    return Math.round((Math.pow(1 + interestRate / 100 / period, period) - 1) * 100 * 100) / 100;
  },
  decBinaryConversion(category, userData) {
    if (category === 'binaryToDecimal') {
      if (!userData.split('').some((bit) => bit > 1)) return parseInt(userData, 2);
      else return 'Invalid Input';
    } else return Number(userData).toString(2);
  },
  addConNumbers(firstNumber, lastNumber) {
    const n = lastNumber - firstNumber + 1;
    return (n / 2) * (firstNumber + lastNumber);
  },
  sumIntAngles(n) {
    return 180 * (n - 2);
  },
  interestRate(principal, returns, time) {
    return ((Math.round((returns - principal) * 100) / (principal * time)) * 100) / 100;
  },
  degreeRadians(deg) {
    return Math.round(((deg * this.PI) / 180) * 100000) / 100000;
  },
  radiansDegree(radians) {
    return Math.round((180 / this.PI) * radians * 100) / 100;
  },
  kelCelsiusConverter(tempKel) {
    return Math.round((tempKel - 273.15) * 100) / 100;
  },
  sumOfPerfectSquares(nthTerm) {
    return (nthTerm * (nthTerm + 1) * (2 * nthTerm + 1)) / 6;
  },
  dailyComInterest(principal, rate, time) {
    const rP = 365 * time;
    rate = rate / 100;
    return Math.floor(principal * (1 + rate / 365) ** rP * 100) / 100;
  },
  diagonalSquare(length) {
    return Math.round(length * Math.sqrt(2) * 10) / 10;
  },
  diagonalRectangle(length, width) {
    return Math.round(Math.sqrt(length ** 2 + width ** 2) * 100) / 100;
  },
};

// ===== REUSABLE FUNCTIONS ==========
// document.query_SELECTOR
function getElement(selector) {
  return document.querySelector(selector);
}
// onChange EVENT_HANDLER for each SELECT ELEMENT
function triggerEvent(selectedElement) {
  const optionValue = selectedElement.options[selectedElement.selectedIndex].value;
  const getDisplayBox = document.querySelector(`[data-response="${optionValue}"]`);
  const allBoxes = document.querySelectorAll('.box');

  // loop over the box and display the current/active display box for computation
  for (let i = 0; i < allBoxes.length; i++) {
    // getDisplayBox.style.display = 'none' &&
    if (getDisplayBox === allBoxes[i]) {
      getDisplayBox.style.display = 'block';
      // Execute the function based on option choosen
      runFunction(optionValue);

      cardPanel.firstElementChild.style.display === 'block' ? (cardPanel.firstElementChild.style.display = 'block') : (cardPanel.firstElementChild.style.display = 'none');
    } else {
      allBoxes[i].style.display = 'none';
    }
  }
}
//  DisplayToggle
function displayToggle(panel, inputs) {
  panel.classList.remove('hide');
  setTimeout(() => {
    panel.classList.add('hide');
    for (let i = 0; i < inputs.length; i++) {
      if (inputs.length === 1) {
        inputs[0].value = '';
      } else {
        inputs[i].value = '';
      }
    }
  }, 60000);
}
// Global_RESULT_DISPLAY
function displayResult_UNITFUL(panel, resultText, result, inputs, power = '') {
  panel.innerHTML = `${resultText} = ${result.toFixed(2)}cm<sup>${power}<sup/>`;
  displayToggle(panel, inputs);
}
function displayResult_UNITLESS(panel, resultText, result, inputs) {
  panel.innerHTML = `${resultText} = ${result}`;
  displayToggle(panel, inputs);
}
function displayNormal(panel, result, inputs) {
  panel.innerHTML = result;
  displayToggle(panel, inputs);
}
function displayError(panel, errorMsg, inputs) {
  panel.innerHTML = errorMsg;
  displayToggle(panel, inputs);
}
// ============= END OF REUSABLE FUNCTIONS ===========

/* ========== FUNCTIONS FOR EACH MATHEMATICAL TERM ============*/

// AREA_OF_A_SQUARE
function areaOfSquare() {
  const lengthInput = getElement('#areaSquare');
  const areaSquareResult = getElement('#areaSquareResult');
  areaSquareEqualsBtn.addEventListener('click', () => {
    if (lengthInput.value) {
      const result = mathLib.areaSquare(parseFloat(lengthInput.value));
      displayResult_UNITFUL(areaSquareResult, 'Area of Square', result, [lengthInput], 2);
    }
  });
}
// AREA_OF_A_CIRCLE
function areaOfCircle() {
  const radiusInput = getElement('#areaRadius');
  const areaCircleResult = getElement('#areaCircleResult');
  areaCircleEqualsBtn.addEventListener('click', () => {
    if (radiusInput.value) {
      const result = mathLib.areaCircle(parseFloat(radiusInput.value));
      displayResult_UNITFUL(areaCircleResult, 'Area of Circle', result, [radiusInput], 2);
    }
  });
}
// AREA_OF_A_TRIANGLE
function areaOfTriangle() {
  const baseInput = getElement('#baseTriangle');
  const heightInput = getElement('#heightTriangle');
  const areaTriangleResult = getElement('#areaTriangleResult');
  areaTriangleEqualsBtn.addEventListener('click', () => {
    if (baseInput.value && heightInput.value) {
      const result = mathLib.areaTriangle(parseFloat(baseInput.value), parseFloat(heightInput.value));
      displayResult_UNITFUL(areaTriangleResult, 'Area of Triangle', result, [baseInput, heightInput], 2);
    }
  });
}
// AREA_OF_A_TRAPEZIUM
function areaOfTrapezium() {
  const sideA = getElement('#sideA');
  const sideB = getElement('#sideB');
  const heightTrapezium = getElement('#heightTrapezium');
  const areaTrapeziumResult = getElement('#areaTrapeziumResult');
  areaTrapeziumEqualsBtn.addEventListener('click', () => {
    if (sideA.value && sideB.value && heightTrapezium.value) {
      const result = mathLib.areaTrapezium(parseFloat(sideA.value), parseFloat(sideB.value), parseFloat(heightTrapezium.value));
      displayResult_UNITFUL(areaTrapeziumResult, 'Area of Trapezium', result, [sideA, sideB, heightTrapezium], 2);
    }
  });
}
// AREA_OF_A_RECTANGLE
function areaOfRectangle() {
  const length = getElement('#lengthRect');
  const width = getElement('#widthRect');
  const areaRectangleResult = getElement('#areaRectangleResult');
  areaRectangleEqualsBtn.addEventListener('click', () => {
    if (length.value && width.value) {
      const result = mathLib.areaRectangle(parseFloat(length.value), parseFloat(width.value));
      displayResult_UNITFUL(areaRectangleResult, 'Area of Rectangle', result, [length, width], 2);
    }
  });
}
// TOTAL_SURFACE_AREA_OF_A_CYLINDER
function tsAreaCylinder() {
  const radius = getElement('#baseRadius');
  const height = getElement('#distanceHeight');
  const tsAreaCylinderResult = getElement('#tsAreaCylinderResult');
  tsAreaCylEqualsBtn.addEventListener('click', () => {
    if (radius.value && height.value) {
      const result = mathLib.tsAreaCylinder(parseFloat(radius.value), parseFloat(height.value));
      displayResult_UNITFUL(tsAreaCylinderResult, 'Total Surface Area', result, [radius, height], 2);
    }
  });
}
// CURVED SURFACE_AREA_OF_A_CYLINDER
function sAreaCylinder() {
  const radius = getElement('#baseRadiusC');
  const height = getElement('#distanceHeightC');
  const sAreaCylinderResultC = getElement('#sAreaCylinderResultC');
  sAreaCylEqualsBtnC.addEventListener('click', () => {
    if (radius.value && height.value) {
      const result = mathLib.sAreaCylinder(parseFloat(radius.value), parseFloat(height.value));
      displayResult_UNITLESS(sAreaCylinderResultC, 'Curved Surface Area', result + 'cm', [radius, height]);
    }
  });
}
// TOTAL_SURFACE_AREA_OF_A_CONE
function tsAreaOfCone() {
  const baseRadius = getElement('#baseRadiusCone');
  const slantHeight = getElement('#slantHeight');
  const tsAreaConeResult = getElement('#tsAreaConeResult');
  tsAreaConeEqualsBtn.addEventListener('click', () => {
    if (baseRadius.value && slantHeight.value) {
      const result = mathLib.tsAreaCone(parseFloat(baseRadius.value), parseFloat(slantHeight.value));
      displayResult_UNITFUL(tsAreaConeResult, 'Total Surface Area of Cone', result, [baseRadius, slantHeight], 2);
    }
  });
}
// SURFACE AREA OF A SPHERE
function sAreaSphere() {
  const sphereRad = getElement('#sphereRad');
  const sphereRadResult = getElement('#sphereRadResult');
  sphereRadEqualsBtn.addEventListener('click', () => {
    if (sphereRad.value) {
      const result = mathLib.sAreaSphere(parseFloat(sphereRad.value));
      displayResult_UNITLESS(sphereRadResult, 'Surface Area of the Sphere', result + 'cm', [sphereRad]);
    }
  });
}
// SURFACE AREA OF A CONE
function sAreaCone() {
  const radius = getElement('#radiusACone');
  const height = getElement('#slantHACone');
  const sAreaConeResult = getElement('#sAreaConeResult');
  sAreaConeEqualsBtn.addEventListener('click', () => {
    if (radius.value && height.value) {
      const result = mathLib.sAreaCone(parseFloat(radius.value), parseFloat(height.value));
      displayResult_UNITFUL(sAreaConeResult, 'Lateral Surface Area of the Cone', result, [radius, height], 2);
    }
  });
}
// SIMPLE_INTEREST
function simpleInterest() {
  const principal = getElement('#principalSI');
  const rate = getElement('#rateSI');
  const time = getElement('#timeSI');
  const SIResult = getElement('#SIResult');
  SIEqualsBtn.addEventListener('click', () => {
    if (principal.value && rate.value && time.value) {
      const result = mathLib.simpleInterest(parseFloat(principal.value), parseFloat(rate.value), parseFloat(time.value));
      displayResult_UNITLESS(SIResult, 'Simple Interest', result, [principal, rate, time]);
    }
  });
}
// COMPOUND_INTEREST
function compoundInterest() {
  const principal = getElement('#principalCI');
  const rate = getElement('#rateCI');
  const time = getElement('#timeCI');
  const CIResult = getElement('#CIResult');
  CIEqualsBtn.addEventListener('click', () => {
    if (principal.value && rate.value && time.value) {
      const result = mathLib.compoundInterest(parseFloat(principal.value), parseFloat(rate.value), parseFloat(time.value));
      displayResult_UNITLESS(CIResult, 'Compound Interest after ' + time.value + ' years', result, [principal, rate, time]);
    }
  });
}
// EFFECTIVE ANNUAL INTEREST RATE
function effIntRate() {
  const rate = getElement('#statedIntRate');
  const numTimes = getElement('#numPeriods');
  const effIntRateResult = getElement('#effIntRateResult');
  effIntRateEqualsBtn.addEventListener('click', () => {
    if (rate.value && numTimes.value) {
      const result = mathLib.effIntRate(parseFloat(rate.value), parseFloat(numTimes.value));
      displayResult_UNITLESS(effIntRateResult, `Effective Interest Rate based on the Stated Interest Rate ${rate.value}% is`, result + '%', [rate, numTimes]);
    }
  });
}
// PERCENTAGE PROFIT
function percentageProfitLoss() {
  const cP = getElement('#costPrice');
  const sP = getElement('#sellingPrice');
  const category = getElement('#percentCategory');
  const percentageResult = getElement('#percentageResult');
  percentageEqualsBtn.addEventListener('click', () => {
    if (sP.value && cP.value && category.value) {
      const result = mathLib.percentProfitOrLoss(parseFloat(sP.value), parseFloat(cP.value), category.value);
      displayNormal(percentageResult, result, [cP, sP]);
    }
  });
}
// SUM OF SQUARES
function sumOfSquares() {
  const numbers = getElement('#numbers');
  const sumOfSquaresResult = getElement('#sumOfSquaresResult');
  sumOfSqEqualsBtn.addEventListener('click', () => {
    if (numbers.value) {
      const result = mathLib.sumOfSquares(numbers.value);
      if (!Number.isNaN(result)) {
        displayNormal(sumOfSquaresResult, 'The sum of squares of the numbers [' + numbers.value + '] = ' + result + ' (to 3.dp)', [numbers]);
      } else {
        displayError(sumOfSquaresResult, `Invalid Characters, Enter numbers only`, [numbers]);
      }
    }
  });
}
// MEAN OF NUMBERS
function meanNumbers() {
  const numberRange = getElement('#numberRange');
  const meanNumbersResult = getElement('#meanNumbersResult');
  meanNumbersEqualsBtn.addEventListener('click', () => {
    if (numberRange.value) {
      const result = mathLib.meanNumbers(numberRange.value);
      if (!Number.isNaN(result)) {
        displayNormal(meanNumbersResult, 'The mean/average of the numbers [' + numberRange.value + '] = ' + result, [numberRange]);
      } else {
        displayError(meanNumbersResult, `Invalid Characters, Enter numbers only`, [numberRange]);
      }
    }
  });
}
// MEDIUM OF NUMBERS
function mediumNumbers() {
  const numberRange = getElement('#numberRangeMedian');
  const mediumNumbersResult = getElement('#mediumNumbersResult');
  mediumNumbersEqualsBtn.addEventListener('click', () => {
    if (numberRange.value) {
      const result = mathLib.mediumNumbers(numberRange.value);
      if (!Number.isNaN(result)) {
        displayNormal(mediumNumbersResult, 'The median of the number set [' + numberRange.value + '] = ' + result, [numberRange]);
      } else {
        displayError(mediumNumbersResult, `Invalid Characters, Enter numbers only`, [numberRange]);
      }
    }
  });
}
// MODE OF NUMBERS
function modeNumbers() {
  const numberRange = getElement('#numberRangeMode');
  const modeNumbersResult = getElement('#modeNumbersResult');
  modeNumbersEqualsBtn.addEventListener('click', () => {
    if (numberRange.value) {
      let result = mathLib.modeNumbers(numberRange.value);
      if (!Number.isNaN(result)) {
        displayNormal(modeNumbersResult, 'The mode of the number set [' + numberRange.value + '] = ' + result, [numberRange]);
      } else {
        displayError(modeNumbersResult, `Invalid Characters, Enter numbers only`, [numberRange]);
      }
    }
  });
}
// RANGE OF NUMBERS
function rangeNumbers() {
  const numberRange = getElement('#rangeNum');
  const rangeNumbersResult = getElement('#rangeNumbersResult');
  rangeNumbersEqualsBtn.addEventListener('click', () => {
    if (numberRange.value) {
      let result = mathLib.rangeNumbers(numberRange.value);
      if (!Number.isNaN(result)) {
        displayNormal(rangeNumbersResult, 'The range of the number set [' + numberRange.value + '] = ' + result, [numberRange]);
      } else {
        displayError(rangeNumbersResult, `Invalid Characters, Enter numbers only`, [numberRange]);
      }
    }
  });
}
// DIFFERENCE OF SQUARES
function differenceOfSquares() {
  const first = getElement('#firstValue');
  const second = getElement('#secondValue');
  const differenceOfSquaresResult = getElement('#differenceOfSquaresResult');
  differenceOfSquaresEqualsBtn.addEventListener('click', () => {
    if (first.value && second.value) {
      const result = mathLib.differenceOfSquares(parseFloat(first.value), parseFloat(second.value));
      displayResult_UNITLESS(differenceOfSquaresResult, 'Difference of Squares', `( ${result} )`, [first, second]);
    }
  });
}
// CELSIUS TO FAHRENHEIT
function celsiusFahConverter() {
  const celsius = getElement('#celsiusTemp');
  const celsiusResult = getElement('#celsiusResult');
  celsiusTempEqualsBtn.addEventListener('click', () => {
    if (celsius.value) {
      const result = mathLib.celsiusFahConverter(parseFloat(celsius.value));
      displayNormal(celsiusResult, 'Conversion = ' + result + '&deg;F', [celsius]);
    }
  });
}
// FAHRENHEIT TO CELSIUS
function fahCelsiusConverter() {
  const fahrenheit = getElement('#fahrenTemp');
  const fahrenheitResult = getElement('#fahrenheitResult');
  fahrenTempEqualsBtn.addEventListener('click', () => {
    if (fahrenheit.value) {
      const result = mathLib.fahCelsiusConverter(parseFloat(fahrenheit.value));
      displayNormal(fahrenheitResult, 'Conversion = ' + result + '&deg;C', [fahrenheit]);
    }
  });
}
// FAHRENHEIT TO KELVIN
function fahKelvinConverter() {
  const fahrenheit = getElement('#fahKelvinTemp');
  const fahKelvinResult = getElement('#fahKelvinResult');
  fahKelvinTempEqualsBtn.addEventListener('click', () => {
    if (fahrenheit.value) {
      const result = mathLib.fahKelvinConverter(parseFloat(fahrenheit.value));
      displayNormal(fahKelvinResult, 'Conversion = ' + result + 'K', [fahrenheit]);
    }
  });
}
// CELSIUS TO KELVIN
function celsiusKelConverter() {
  const celsius = getElement('#celsiusKelTemp');
  const celsiusKelResult = getElement('#celsiusKelResult');
  celsiusKelTempEqualsBtn.addEventListener('click', () => {
    if (celsius.value) {
      const result = mathLib.celsiusKelConverter(parseFloat(celsius.value));
      displayNormal(celsiusKelResult, 'Conversion = ' + result + 'K', [celsius]);
    }
  });
}
// KELVIN TO CELSIUS
function kelCelsiusConverter() {
  const kelvin = getElement('#kelCelsiusTemp');
  const kelCelsiusResult = getElement('#kelCelsiusResult');
  kelCelsiusEqualsBtn.addEventListener('click', () => {
    if (kelvin.value) {
      const result = mathLib.kelCelsiusConverter(parseFloat(kelvin.value));
      displayNormal(kelCelsiusResult, 'Conversion = ' + result + 'C', [kelvin]);
    }
  });
}
// VOLUME OF A CUBE
function cubeVol() {
  const length = getElement('#cubeLength');
  const cubeVolResult = getElement('#cubeVolResult');
  cubeVolEqualsBtn.addEventListener('click', () => {
    if (length.value) {
      const result = mathLib.cubeVol(parseFloat(length.value));
      displayResult_UNITFUL(cubeVolResult, 'Volume of cube', result, [length], 3);
    }
  });
}
// VOLUME OF A CUBOID
function cuboidVol() {
  const length = getElement('#cuboidLength');
  const width = getElement('#cuboidWidth');
  const height = getElement('#cuboidHeight');
  const cuboidVolResult = getElement('#cuboidVolResult');
  const cuboidVolEqualsBtn = getElement('#cuboidVolEqualsBtn');
  cuboidVolEqualsBtn.addEventListener('click', () => {
    if (length.value && width.value && height.value) {
      const result = mathLib.cuboidVol(parseFloat(length.value), parseFloat(width.value), parseFloat(height.value));
      displayResult_UNITFUL(cuboidVolResult, 'Volume of cuboid', result, [length, width, height], 3);
    }
  });
}
// VOLUME OF A CYLINDER
function cylinderVol() {
  const radius = getElement('#radiusCyl');
  const height = getElement('#heightCyl');
  const cylVolResult = getElement('#cylVolResult');
  cylVolEqualsBtn.addEventListener('click', () => {
    if (radius.value && height.value) {
      const result = mathLib.cylinderVol(parseFloat(radius.value), parseFloat(height.value));
      displayResult_UNITFUL(cylVolResult, 'Volume of cylinder', result, [radius, height], 3);
    }
  });
}
// VOLUME OF A CONE
function coneVol() {
  const radius = getElement('#coneVolRad');
  const height = getElement('#coneVolH');
  const coneVolResult = getElement('#coneVolResult');
  coneVolEqualsBtn.addEventListener('click', () => {
    if (radius.value && height.value) {
      const result = mathLib.coneVol(parseFloat(radius.value), parseFloat(height.value));
      displayResult_UNITFUL(coneVolResult, 'Volume of the cone', result, [radius, height], 3);
    }
  });
}
// VOLUME OF A SPHERE
function sphereVol() {
  const radius = getElement('#sphereRadius');
  const sphereVolResult = getElement('#sphereVolResult');
  sphereVolEqualsBtn.addEventListener('click', () => {
    if (radius.value) {
      const result = mathLib.sphereVol(parseFloat(radius.value));
      displayResult_UNITFUL(sphereVolResult, 'Volume of sphere', result, [radius], 3);
    }
  });
}
// VOLUME OF A RIGHT CIRCULAR CONE
function rightCircularConeVol() {
  const radius = getElement('#ccRadius');
  const height = getElement('#ccHeight');
  const rightCircularConeVolResult = getElement('#rightCircularConeVolResult');
  rightCircularConeVolEqualsBtn.addEventListener('click', () => {
    if (radius.value && height.value) {
      const result = mathLib.rightCircularConeVol(parseFloat(radius.value), parseFloat(height.value));
      displayResult_UNITFUL(rightCircularConeVolResult, 'Volume of the Right-Circular Cone', result, [radius, height], 3);
    }
  });
}
// VOLUME OF A PRISM
function prismVol() {
  const length = getElement('#lengthPrism');
  const width = getElement('#widthPrism');
  const height = getElement('#heightPrism');
  const prismVolResult = getElement('#prismVolResult');
  prismVolEqualsBtn.addEventListener('click', () => {
    if (length.value && width.value && height.value) {
      const result = mathLib.prismVol(parseFloat(length.value), parseFloat(width.value), parseFloat(height.value));
      displayResult_UNITFUL(prismVolResult, 'Volume of prism', result, [length, width, height], 3);
    }
  });
}
// VOLUME OF A TRIANGULAR PRSIM
function rightAngledPrismVol() {
  const baseT = getElement('#triBasePrism');
  const heightT = getElement('#triHeightPrism');
  const HEIGHT = getElement('#height-Prism');
  const rightAngledPrismVolResult = getElement('#rightAngledPrismVolResult');
  rightAngledPrismVolEqualsBtn.addEventListener('click', () => {
    if (baseT.value && heightT.value && HEIGHT.value) {
      const result = mathLib.rightAngledPrismVol(parseFloat(baseT.value), parseFloat(heightT.value), parseFloat(HEIGHT.value));
      displayResult_UNITFUL(rightAngledPrismVolResult, 'Volume of Right Angled Prism', result, [baseT, heightT, HEIGHT], 3);
    }
  });
}
// CIRCUMFERENCE OF A CIRCLE
function circumferenceCircle() {
  const category = getElement('#ccCategory');
  const val = getElement('#ccValue');
  const ccResult = getElement('#ccResult');
  ccEqualsBtn.addEventListener('click', () => {
    if (category.value && val.value) {
      const result = mathLib.circumferenceCircle(category.value, parseFloat(val.value));
      displayResult_UNITLESS(ccResult, 'Circumference of the Circle', result + 'cm', [category, val]);
    }
  });
}
// PERIMTER OF A KITE
function periKite() {
  const topSide = getElement('#topKite');
  const bottomSide = getElement('#bottomKite');
  const periKiteResult = getElement('#periKiteResult');
  periKiteEqualsBtn.addEventListener('click', () => {
    if (topSide.value && bottomSide.value) {
      const result = mathLib.periKite(parseFloat(topSide.value), parseFloat(bottomSide.value));
      displayResult_UNITLESS(periKiteResult, 'Perimeter of the Kite', result + 'cm', [topSide, bottomSide]);
    }
  });
}
// PERIMTER OF A HEXAGON
function periHexagon() {
  const hexlength = getElement('#hexSide');
  const periHexResult = getElement('#periHexResult');
  periHexEqualsBtn.addEventListener('click', () => {
    if (hexlength.value) {
      const result = mathLib.periHexagon(parseFloat(hexlength.value));
      displayResult_UNITLESS(periHexResult, 'Perimeter of the Hexagon', result + 'cm', [hexlength]);
    }
  });
}
// PERIMTER OF A RECTANGLE
function periRectangle() {
  const length = getElement('#periRectL');
  const breadth = getElement('#periRectB');
  const periRectResult = getElement('#periRectResult');
  periRectEqualsBtn.addEventListener('click', () => {
    if (length.value && breadth.value) {
      const result = mathLib.periRectangle(parseFloat(length.value), parseFloat(breadth.value));
      displayResult_UNITLESS(periRectResult, 'Perimeter of the Rectangle', result + 'cm', [length, breadth]);
    }
  });
}
// PERIMTER OF A SQUARE
function periSquare() {
  const length = getElement('#periSqL');
  const periSquareResult = getElement('#periSquareResult');
  periSquareEqualsBtn.addEventListener('click', () => {
    if (length.value) {
      const result = mathLib.periSquare(parseFloat(length.value));
      displayResult_UNITLESS(periSquareResult, 'Perimeter of the Square', result + 'cm', [length]);
    }
  });
}
// PERIMTER OF A TRIANGLE
function periTriangle() {
  const sideA = getElement('#periTA');
  const sideB = getElement('#periTB');
  const sideC = getElement('#periTC');
  const periTResult = getElement('#periTResult');
  periTEqualsBtn.addEventListener('click', () => {
    if (sideA.value && sideB.value && sideC.value) {
      const result = mathLib.periTriangle(parseFloat(sideA.value), parseFloat(sideB.value), parseFloat(sideC.value));
      displayResult_UNITLESS(periTResult, 'Perimeter of the Triangle', result + 'cm', [sideA, sideB, sideC]);
    }
  });
}
// PERIMTER OF A TRAPEZIUM
function periTrapezium() {
  const sideA = getElement('#periTrpA');
  const sideB = getElement('#periTrpB');
  const sideC = getElement('#periTrpC');
  const sideD = getElement('#periTrpD');
  const periTrpResult = getElement('#periTrpResult');
  periTrpEqualsBtn.addEventListener('click', () => {
    if (sideA.value && sideB.value && sideC.value) {
      const result = mathLib.periTrapezium(parseFloat(sideA.value), parseFloat(sideB.value), parseFloat(sideC.value), parseFloat(sideD.value));
      displayResult_UNITLESS(periTrpResult, 'Perimeter of the Trapezium', result + 'cm', [sideA, sideB, sideC, sideD]);
    }
  });
}
// BINARY/DECIMAL CONVERSION
function decBinaryConversion() {
  const category = getElement('#BDoption');
  const userData = getElement('#binaryDecimalVal');
  category.addEventListener('change', () => {
    binaryDecimalEqualsBtn.addEventListener('click', () => {
      if (userData.value) {
        const result = mathLib.decBinaryConversion(category.value, userData.value);
        displayResult_UNITLESS(binaryDecimalResult, category.value === 'binaryToDecimal' ? 'Binary to Decimal' : 'Decimal to Binary', result, [category, userData]);
      }
    });
  });
}
// ADDING CONSECUTIVE NUMBERS
function addConNumbers() {
  const firstTerm = getElement('#starterNum');
  const lastTerm = getElement('#endNum');
  const addConNumbersResult = getElement('#addConNumbersResult');
  addConNumbersEqualBtn.addEventListener('click', () => {
    if (firstTerm.value && lastTerm.value) {
      const result = mathLib.addConNumbers(parseInt(firstTerm.value), parseInt(lastTerm.value));
      displayResult_UNITLESS(addConNumbersResult, `The sum of ${lastTerm.value - firstTerm.value + 1} consecutive numbers (${firstTerm.value} + ${+firstTerm.value + 1} + ... + ${lastTerm.value - 1} + ${lastTerm.value})`, result, [
        firstTerm,
        lastTerm,
      ]);
    }
  });
}
// SUM OF INTERIOR ANGLES
function sumIntAngles() {
  const noOfSides = getElement('#numOfSides');
  const sumIntAnglesResult = getElement('#sumIntAnglesResult');
  sumIntAnglesEqualsBtn.addEventListener('click', () => {
    if (noOfSides.value) {
      const result = mathLib.sumIntAngles(Number(noOfSides.value));
      displayResult_UNITLESS(sumIntAnglesResult, `The sum of all interior angles of the polygon with ${parseInt(noOfSides.value)} sides `, result + '&deg;', [noOfSides]);
    }
  });
}
// INTEREST RATE
function interestRate() {
  const principal = getElement('#principalIR');
  const returns = getElement('#returnsIR');
  const time = getElement('#timeIR');
  const interestRateResult = getElement('#interestRateResult');
  interestRateEqualsBtn.addEventListener('click', () => {
    if (principal.value && returns.value && time.value) {
      const result = mathLib.interestRate(parseFloat(principal.value), parseFloat(returns.value), parseFloat(time.value));
      displayResult_UNITLESS(interestRateResult, 'Interest Rate on the Principal', result + '%', [principal, returns, time]);
    }
  });
}
// DEGREE TO RADIANS
function degreeRadians() {
  const deg = getElement('#degreeVal');
  const degreeRadiansResult = getElement('#degreeRadiansResult');
  degreeRadiansEqualsBtn.addEventListener('click', () => {
    if (deg.value) {
      const result = mathLib.degreeRadians(parseInt(deg.value));
      displayResult_UNITLESS(degreeRadiansResult, `Converting ${deg.value}&deg; to radians`, result + ' radians', [deg]);
    }
  });
}
// RADIANS TO DEGREE
function radiansDegree() {
  const rad = getElement('#radianVal');
  const radiansDegreeResult = getElement('#radiansDegreeResult');
  radiansDegreeEqualsBtn.addEventListener('click', () => {
    if (rad.value) {
      const result = mathLib.radiansDegree(parseInt(rad.value));
      displayResult_UNITLESS(radiansDegreeResult, `Converting ${rad.value} radians to degrees`, result + '&deg;', [rad]);
    }
  });
}
// SUM OF PERFECT SQUARES
function sumOfPerfectSquares() {
  const nthTerm = getElement('#nthTerm');
  const sumOfPerfectSquaresResult = getElement('#sumOfPerfectSquaresResult');
  sumOfPerfectSquaresEqualsBtn.addEventListener('click', () => {
    if (nthTerm.value) {
      const result = mathLib.sumOfPerfectSquares(parseInt(nthTerm.value));
      displayResult_UNITLESS(sumOfPerfectSquaresResult, `The sum of the first [ ${nthTerm.value} ] natural numbers`, result, [nthTerm]);
    }
  });
}
// DAILY COMPOUND INTEREST
function dailyComInterest() {
  const principal = getElement('#dailyPrincipal');
  const rate = getElement('#dailyRate');
  const time = getElement('#dailyTime');
  const dailyComInterestResult = getElement('#dailyComInterestResult');
  dailyComInterestEqualsBtn.addEventListener('click', () => {
    if (principal.value && rate.value && time.value) {
      const result = mathLib.dailyComInterest(parseFloat(principal.value), parseInt(rate.value), parseInt(time.value));
      displayResult_UNITLESS(dailyComInterestResult, `The compounded amount after ${time.value} years with an interest of (₦${Math.round((result - principal.value) * 100) / 100})`, '₦' + result, [principal, rate, time]);
    }
  });
}
// DIAGONAL OF A SQUARE
function diagonalSquare() {
  const length = getElement('#diagonalLengthSq');
  const diagonalSquareResult = getElement('#diagonalSquareResult');
  diagonalSquareEqualsBtn.addEventListener('click', () => {
    if (length.value) {
      const result = mathLib.diagonalSquare(parseFloat(length.value));
      displayResult_UNITLESS(diagonalSquareResult, 'The length of each diagonal of the given square', result + ' units', [length]);
    }
  });
}
// DIAGONAL OF A RECTANGLE
function diagonalRectangle() {
  const length = getElement('#diagonalLengthRect');
  const width = getElement('#diagonalWidthRect');
  const diagonalRectangleResult = getElement('#diagonalRectangleResult');
  diagonalRectangleEqualsBtn.addEventListener('click', () => {
    if (length.value && width.value) {
      const result = mathLib.diagonalRectangle(parseFloat(length.value), parseFloat(width.value));
      displayResult_UNITLESS(diagonalRectangleResult, 'The length of each diagonal of the given rectangle', result + ' units', [length]);
    }
  });
}
