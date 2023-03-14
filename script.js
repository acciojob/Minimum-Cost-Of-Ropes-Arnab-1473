function calculateMinCost() {
  //your code here
  // Get the input rope lengths as a comma-separated string
  const input = document.getElementById("rope-lengths").value;

  // Convert the input string to an array of integers
  const ropeLengths = input.split(",").map(Number);

  // Initialize a priority queue with the input rope lengths
  const pq = new MinPriorityQueue({ priority: (ropeLength) => ropeLength });
  ropeLengths.forEach((length) => pq.enqueue(length));

  // Keep track of the total cost and repeatedly combine the shortest ropes until only one rope remains
  let totalCost = 0;
  while (pq.size() > 1) {
    // Dequeue the two shortest ropes
    const shortestRope1 = pq.dequeue().element;
    const shortestRope2 = pq.dequeue().element;

    // Combine the ropes and enqueue the result
    const combinedRopeLength = shortestRope1 + shortestRope2;
    pq.enqueue(combinedRopeLength);

    // Update the total cost
    totalCost += combinedRopeLength;
  }

  // Display the total cost in the result div
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Minimum cost of connecting the ropes: ${totalCost}`;
  
  
}  
