export function biryaniBatchProcessor(orders) {
  // Your code here
  let totalBatches=0;
  let totalPlates=0;
  let ordersProcessed=0
  if(!Array.isArray(orders) || orders.length===0 ){
    return {totalBatches: 0, totalPlates: 0, ordersProcessed: 0}
  }

  for (let i =0;i<orders.length;i++){


    let plate = orders[i];
    if(!Number.isInteger(plate) || plate<=0) {
      continue;
    }
    let batch =Math.ceil(plate/5);
    


    totalBatches+=batch;
    totalPlates+=orders[i];
    ordersProcessed++;
  }
  return {
    totalBatches,totalPlates,ordersProcessed
  }

} 