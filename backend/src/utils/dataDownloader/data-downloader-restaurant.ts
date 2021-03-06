import axios from "axios"
import {Restaurant} from "../interfaces/Restaurant";
import {insertRestaurant} from "../restaurant/insertRestaurant";
import {insertCategory} from "../category/insertCategory";
import {Category} from "../interfaces/Category";
import {v4 as uuidv4} from 'uuid'
import {RestaurantCategory} from "../interfaces/RestaurantCategory";
import {insertRestaurantCategory} from "../restaurantCategory/insertRestaurantCategory";


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

function dataDownloaderRestaurant(): Promise<any> {
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
             for (let i = 0; i < 20; i++) {


                 const {data} = await axios.get(`https://api.yelp.com/v3/businesses/search?location=Albuquerque&limit=50&offset=${i * 50}`, {headers: {Authorization: `BEARER ${process.env.BEARER}`}})


                 const createRestaurants = async (array: any) => {


                     const foundCategories: Category[] = []
                     for (const currentRestaurant of array.businesses) {
                         const restaurantAddress = `${currentRestaurant.location.address1}, ${currentRestaurant.location.city}, ${currentRestaurant.location.state}, ${currentRestaurant.location.zip_code}`
                         const restaurantServices = currentRestaurant.transactions.join(" ")



                         let restaurant: Restaurant = {
                             restaurantId: uuidv4(),
                             restaurantAddress,
                             restaurantImage: currentRestaurant.image_url,
                             restaurantName: currentRestaurant.name,
                             restaurantPhone: currentRestaurant.display_phone,
                             restaurantServices,
                             restaurantYelpRating: currentRestaurant.rating,
                             restaurantZip: currentRestaurant.location.zip_code
                         }
                         //console.log(currentRestaurant.categories)

                         await insertRestaurant(restaurant)

                         currentRestaurant.categories.forEach((currentCategory : any) => {
                             const createRestaurantCategory = async (restaurantId: string) => {

                                 let foundCategory = foundCategories.find((foundCategory: Category) => foundCategory.categoryType === currentCategory.alias)
                                 if (foundCategory === undefined) {
                                     foundCategory = {categoryId: uuidv4(), categoryType: currentCategory.alias}
                                     await insertCategory(foundCategory)
                                     foundCategories.push(foundCategory)
                                 }
                                 const restaurantCategory: RestaurantCategory = {
                                     restaurantCategoriesCategoryId: foundCategory.categoryId,
                                     restaurantCategoriesRestaurantId: restaurantId
                                 }
                                 console.log(restaurantCategory)
                                 await insertRestaurantCategory(restaurantCategory)
                             }
                             createRestaurantCategory(<string>restaurant.restaurantId)


                         })

                     }

                 }

                 await createRestaurants(data)
             }
        } catch (error) {
            console.error(error.message)
        }
    }
}

dataDownloaderRestaurant().catch(error => console.error(error));