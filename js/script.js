// Copyright (c) 2020 Calista.E All rights reserved
//
// Created by: Calista.E
// Created on: Mar 2024
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById("area-math").innerHTML = "<p>The area is: ? cm²" + (5 * 3) + "</p>"
  document.getElementById("perimeter-math").innerHTML = "<p>The perimeter is: ? km²" + (5 * 2 + 3 * 2) + "</p>"
}
