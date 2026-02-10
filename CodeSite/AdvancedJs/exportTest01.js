export default function getMatch(arr,keywords) {
  return arr.filter(function(trip){
    return trip.discription.toLowerCase().includes(keywords);
  });
  
}