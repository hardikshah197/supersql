# AlaSQL
AlaSQL - is an open-source SQL database for JavaScript with a strong focus on query speed and data source flexibility for both relational data and schemaless data. It works in web browsers, Node.js, and mobile apps.

This library is perfect for:

- Fast in-memory SQL data processing for BI and ERP applications on fat clients
- Easy ETL and options for persistence by data import/manipulation/export of several formats
- All major browsers, Node.js, and mobile applications

#### For Spreadsheet

```js
// file is read asynchronously (Promise returned when SQL given as array)
alasql(['SELECT * FROM XLS("./data/mydata") WHERE lastname LIKE "A%" and city = "London" GROUP BY name '])
    .then(function(res){
        console.log(res); // output depends on mydata.xls
    }).catch(function(err){
        console.log('Does the file exist? There was an error:', err);
    });
```

---
## SUPERSQL Google Sheets Function

SUPERSQL function for Google Sheets by https://github.com/hardikshah197/

Examples of Use:
```
=SUPERSQL("SELECT * FROM ? WHERE b > 15", data!A1:B6)
```
```
=SUPERSQL("SELECT l.a, l.b, r.price FROM ? l JOIN ? r ON l.b = r.b", data!A1:B,prices!A1:B)
```
```
=SUPERSQL("SELECT * FROM ? WHERE b > ?", data!A1:B6,D1)
```

Added **sqltodate** function to allow converting YYYY-MM-DD formatted string to a date object
```
=SUPERSQL("SELECT product, qty, sqltodate('2020-09-26') FROM ?", data!A1:B6)
```
