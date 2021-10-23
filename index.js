(function() {

  window.onload = function() {
    document.getElementById("shuffle").addEventListener("click", shuffle);
    document.getElementById("sort").addEventListener("click", sort);
    document.getElementById("cells").innerHTML = shuffleSort();
  }

  let cellValues = [1,2,3,4,5,6,7,8,9];

  function shuffleSort(order = "sorted") {
    let cells = "";
    if (order == "sorted") {
      cellValues.sort();
    } else {
      let randomIndex = null;
      for (let index = 0; index < cellValues.length; index++) {
        randomIndex = Math.floor(Math.random() * index);
        [cellValues[index], cellValues[randomIndex]] = [cellValues[randomIndex], cellValues[index]];
      }
    }
    for (let index = 0; index < cellValues.length; index++) {
      cells += createCell(cellValues[index]);
    }
    return cells;
  }


  function createCell(value) {
    return `<div class="cell" value=${value}>
              ${value}
            </div>`
  }


  function shuffle() {
    document.getElementById("cells").innerHTML = shuffleSort("shuffled");
  }

  function sort() {
    document.getElementById("cells").innerHTML = shuffleSort("sorted");
  }

})();
