function calculateMinCost() {
  //your code here
 const input = document.querySelector('#input').value;
  const arr = input.split(',').map(num => parseInt(num));
  
  // create a min heap
  const heap = new MinHeap();
  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  }

  let totalCost = 0;
  while (heap.size() > 1) {
    // extract the two smallest ropes
    const rope1 = heap.extractMin();
    const rope2 = heap.extractMin();

    // join the ropes and add to total cost
    const newRope = rope1 + rope2;
    totalCost += newRope;

    // insert the new rope back into the heap
    heap.insert(newRope);
  }

  // display the result
  const resultDiv = document.querySelector('#result');
  resultDiv.textContent = totalCost;
}  
