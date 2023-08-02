function calculateExpiry() {
    const foodCategory = document.getElementById("food-category").value;
    const foodName = document.getElementById("food-name").value;
    const purchaseDate = new Date(document.getElementById("purchase-date").value);
  
    let expiryDate;
    let tips;
  
    switch (foodCategory) {
      case "frozen-and-meat":
        // Add 7 days to the purchase date
        expiryDate = new Date(purchaseDate.getTime() + 7 * 24 * 60 * 60 * 1000);
        tips = "Store in the freezer at 0°F or below to maintain quality and prevent bacterial growth.";
        break;
      case "confectionary":
        // Add 90 days to the purchase date
        expiryDate = new Date(purchaseDate.getTime() + 90 * 24 * 60 * 60 * 1000);
        tips = "Store in a cool, dry place away from direct sunlight.";
        break;
      case "vegetables-and-fruits":
        // Add 5 days to the purchase date
        expiryDate = new Date(purchaseDate.getTime() + 5 * 24 * 60 * 60 * 1000);
        tips = "Store in the refrigerator at 40°F or below to maintain freshness.";
        break;
      default:
        alert("Please select a valid food category.");
        return;
    }
  
    // Format the expiry date as YYYY-MM-DD
    const formattedExpiryDate = expiryDate.toISOString().substr(0, 10);
  
    document.getElementById("expiry-date").innerHTML = `The expiry date for ${foodName} is ${formattedExpiryDate}.`;
    document.getElementById("tips").innerHTML = `Tip: ${tips}`;
  }  