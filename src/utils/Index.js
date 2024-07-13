import toast from "react-hot-toast";

export function removeFromLocalStorageArray(key, id) {
    // Retrieve the array from localStorage
    let items = JSON.parse(localStorage.getItem(key));
  
    // Check if items is null or not an array
    if (!Array.isArray(items)) {
      console.error('No array found in localStorage with the given key');
      return;
    }
  
    // Filter out the item with the given id
    items = items.filter(item => item.id !== id);
  
    // Update the localStorage with the new array
    localStorage.setItem(key, JSON.stringify(items));
    toast.success("Product remove from the Cart")
    window.location.reload()
  }

  export function incrementItemQuantity(key, id) {
    // Retrieve the array from localStorage
    let items = JSON.parse(localStorage.getItem(key));
  
    // Check if items is null or not an array
    if (!Array.isArray(items)) {
      console.error('No array found in localStorage with the given key');
      return;
    }
 
    // Find the item with the given id and increment its quantity
    items = items.map(item => {
      if (item.id === id) {
        item.qty = (item.qty || 0) + 1; // Increment qty, set to 1 if undefined
      }
      return item;
    });
  
    // Update the localStorage with the new array
    localStorage.setItem(key, JSON.stringify(items));
    toast.success("Product Quantity Added Successfully")
    window.location.reload()

  }

  export function decrementItemQuantity(key, id) {
    // Retrieve the array from localStorage
    let items = JSON.parse(localStorage.getItem(key));
  
    // Check if items is null or not an array
    if (!Array.isArray(items)) {
      console.error('No array found in localStorage with the given key');
      return;
    }
  
    // Find the item with the given id and decrement its quantity
    items = items.map(item => {
      if (item.id === id) {
        if (item.qty <= 1) {
          console.log(item);
          console.log('Quantity is 1 or less, not decrementing');
          toast.error("Product cant be reduced "); // Return the item unchanged
          return item
        }
        item.qty = (item.qty || 1) - 1; // Decrement qty, set to 0 if undefined
      }

      return item;
    });
  
    // Update the localStorage with the new array
    
    localStorage.setItem(key, JSON.stringify(items));
   const qty =  items.map(i=>{return i.qty})
   if (qty != 1) {
    toast.success("Product reduced sucessfully")
   window.location.reload()
   }
  }