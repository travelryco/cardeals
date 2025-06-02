// Test script for the car analysis API
const testUrl = 'https://www.cargurus.com/Cars/inventorylisting/viewDetailsFilterViewInventoryListing.action?zip=80202&showNegotiable=true&sourceContext=carGurusHomePageModel&distance=50&entitySelectingHelper.selectedEntity=d2';

async function testAnalysis() {
  try {
    console.log('Testing car analysis API...');
    
    const response = await fetch('http://localhost:3000/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: testUrl }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ API Test Successful!');
      console.log('Vehicle:', result.listing.title);
      console.log('Price:', `$${result.listing.price.toLocaleString()}`);
      console.log('Recommended Price:', `$${result.marketAnalysis.recommendedPrice.toLocaleString()}`);
      console.log('Market Position:', result.marketAnalysis.marketPosition);
      console.log('Confidence:', `${result.marketAnalysis.confidence}%`);
    } else {
      const error = await response.json();
      console.log('❌ API Test Failed:', error);
    }
  } catch (error) {
    console.log('❌ Test Error:', error.message);
  }
}

testAnalysis(); 