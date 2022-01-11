    "use strict"
    require('https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js')

      /** @settings  */
      var settings = {
        async: true,
        crossDomain: true,
        url: "https://api.txprice.com",
        method: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
      }

        /** @returns network.response  */
      $.ajax(settings).done(function (response) {
        console.log(response)
        var content = response.maxPrice
        $("#maxPrice").append(content)
        console.log("currentBlockNumber: " + response.currentBlockNumber)
        var blockNumber = response.blockPrices[0].blockNumber
        $("#blockNumber").append(blockNumber)
        var baseFeePerGas = response.blockPrices[0].baseFeePerGas
        $("#baseFeePerGas").append(baseFeePerGas)

        var msSinceLastBlock = response.msSinceLastBlock
        console.log("msSinceLastBlock: " + response.msSinceLastBlock)

        /** @note  */
        /** @returns 99.response  */
        var content = response.blockPrices[0].estimatedPrices[0].maxFeePerGas
        $("#maxFeePerGas").append(content)
        console.log(
          "maxFeePerGas: " +
            response.blockPrices[0].estimatedPrices[0].maxFeePerGas
        )
        var maxPriorityFeePerGas =
          response.blockPrices[0].estimatedPrices[0].maxPriorityFeePerGas
        $("#maxPriorityFeePerGas").append(maxPriorityFeePerGas)
        console.log(
          "maxPriorityFeePerGas: " +
            response.blockPrices[0].estimatedPrices[0].maxPriorityFeePerGas
        )

        /** @note  */
        /** @returns 95.response  */
        var content = response.blockPrices[0].estimatedPrices[2].maxFeePerGas
        $("#maxFeePerGas_95").append(content)
        console.log(
          "maxFeePerGas_95: " +
            response.blockPrices[0].estimatedPrices[2].maxFeePerGas
        )
        var maxPriorityFeePerGas_95 =
          response.blockPrices[0].estimatedPrices[2].maxPriorityFeePerGas
        $("#maxPriorityFeePerGas_95").append(maxPriorityFeePerGas)
        console.log(
          "maxPriorityFeePerGas_95: " +
            response.blockPrices[0].estimatedPrices[2].maxPriorityFeePerGas
        )
      })