const maxProfit = () => {
  let maxProfit = 0
  for(let i=0;i<prices.length;i++)
  if(prices[i]<prices[i-1]){
    maxProfit+=prices[i-1]+prices[i]
  }
  return maxProfit
}