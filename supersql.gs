function SUPERSQL(sqlStatementAsString, dataAsArray1, ...dataAsArray) {

  // Disabling case sensitivity of alasql
  alasql.options.casesensitive = false;

  let sqlData = [arrayToObjectOfArray(dataAsArray1)];
  dataAsArray.forEach(arr => sqlData.push(arrayToObjectOfArray(arr)));

  var res = alasql(sqlStatementAsString, sqlData);
  if (res.length === 0) {
    // Throwing Error for No Result found.
    throw new Error("Statement Returns No Response!");
  } else {
    console.log(res);

    let keys = new Set();
    res.forEach(r => Object.keys(r).forEach(k => keys.add(k)));

    let newRes = res.map(r => [...keys].map(i => r[i]));
    newRes.unshift([...keys]);

    console.log(newRes);
  }
}

function arrayToObjectOfArray(data) {

  // Removing blank rows
  data = data.filter(r => r.every(val => val != ""));

  let headers = data.shift();

  return data.map(r => {
    let obj = {};
    r.forEach((val, idx) => {
      obj[headers[idx].toString().toLowerCase()] = val;
    });

    return obj;
  });
}