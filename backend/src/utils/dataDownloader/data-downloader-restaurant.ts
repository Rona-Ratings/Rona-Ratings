import axios from "axios"
import {Restaurant} from "../interfaces/Restaurant";
import {insertRestaurant} from "../restaurant/insertRestaurant";
import {insertCategory} from "../category/insertCategory";
import {Category} from "../interfaces/Category";
import {v4 as uuidv4} from 'uuid'


/*interface Restaurant {
    restaurantId: string |  null,
    restaurantAddress: string,
    restaurantImage: string,
    restaurantName: string,
    restaurantPhone: string,
    restaurantServices: string,
    restaurantYelpRating: number,
    restaurantZip: string

}*/

function dataDownloaderRestaurant() : Promise<any> {
	return main()
	async function main() {
		try {
			await downloadRestaurants()

		} catch (e) {
			console.log(e.message)
		}
	}

	async function downloadRestaurants() {
		try {
			console.log(process.env)
			const {data} = await axios.get("https://api.yelp.com/v3/businesses/search?location=Albuquerque", {headers: {   Authorization: `BEARER ${process.env.BEARER}` }})

            /*console.log(data)*/
			const createRestaurants = (array: any) : void => {
				console.log(array)
				// Change this part.  Instead of putting the posts into an arrray insert them into the database.
    // See https://github.com/Deep-Dive-Coding-Fullstack-Licensing/example-capstone/blob/development/backend/utils/tweet/insertTweet.ts for example.
				const  foundCategories : Category[] = []
				for(const currentRestaurant of array.businesses) {
					const restaurantAddress = `${currentRestaurant.location.address1}, ${currentRestaurant.location.city}, ${currentRestaurant.location.state}, ${currentRestaurant.location.zip_code}`
					const restaurantServices = currentRestaurant.transactions.join(" ")


					// TODO grab all necessary attributes from Yelp and put them into Restaurant object
					// TODO write insertRestaurant MYSQL enabled function, Write in TS
					// TODO call insertRestaurant function and pass Restaurant as an argument
					let restaurant : Restaurant = {restaurantId: uuidv4(), restaurantAddress, restaurantImage: currentRestaurant.image_url, restaurantName: currentRestaurant.name, restaurantPhone: currentRestaurant.display_phone, restaurantServices, restaurantYelpRating: currentRestaurant.rating, restaurantZip: currentRestaurant.location.zip_code}
					//console.log(currentRestaurant.categories)
					currentRestaurant.categories.forEach((currentCategory : any)=> {

						let isFound = foundCategories.find((foundCategory : Category) => foundCategory.categoryType === currentCategory.alias )
						if ( isFound === undefined ) {
							const category : Category = {categoryId: uuidv4(), categoryType : currentCategory.alias}
							insertCategory(category)
							foundCategories.push(category)
							}
						})
					insertRestaurant(restaurant)


				}
					console.log(foundCategories)
			}

			createRestaurants(data)

		} catch (error) {
			console.error(error.message)
		}
	}
}

dataDownloaderRestaurant().catch(error => console.error(error));