import axios from 'axios'

// U.S. Department of Agriculture, Agricultural Research Service.
// FoodData Central, 2019. fdc.nal.usda.gov.

export function searchFood (food) {
  const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=${food}&pageSize=10&pageNumber=1`
  return axios.get(url)
}
