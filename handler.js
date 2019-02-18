'use strict';

var scraper = require('table-scraper');

module.exports.hello = async (event, context, callback) => {

  return await new Promise((resolve, reject) => {

    scraper
      .get('http://www.bnb.bg/Statistics/StExternalSector/StExchangeRates/StERForeignCurrencies/index.htm')
      .then(function (tableData) {

        resolve({
          statusCode: 200, 
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          }, 
          body: JSON.stringify(tableData)
        })
      })
  })
}
