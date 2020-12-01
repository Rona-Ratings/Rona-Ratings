import axios from "axios"
import {Category} from "../interfaces/Category";
import {insertCategory} from "../category/insertRestaurant";



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

function dataDownloaderCategory() : Promise<any> {
    return main()
    async function main() {
        try {
            await dataDownloaderCategory()

        } catch (e) {
            console.log(e.message)
        }
    }

    async function downloadCategory() {
        try {
            console.log(process.env)
            const {data} = await axios.get("https://api.yelp.com/v3/businesses/search?location=Albuquerque", {headers: {   Authorization: `BEARER ${process.env.BEARER}` }})

            /*console.log(data)*/
            const createCategory = (array: any) : Category[] => {
                console.log(array)
                // Change this part.  Instead of putting the posts into an arrray insert them into the database.
                // See https://github.com/Deep-Dive-Coding-Fullstack-Licensing/example-capstone/blob/development/backend/utils/tweet/insertTweet.ts for example.
                const  category : Category[] = []
                for(const currentRestaurant of array.businesses) {



                    // TODO grab all necessary attributes from Yelp and put them into Restaurant object
                    // TODO write insertRestaurant MYSQL enabled function, Write in TS
                    // TODO call insertRestaurant function and pass Restaurant as an argument
                    let category : Category = {}
                    /*call function insertRestaurant(Restaurant)*/
                    console.log(category)
                    insertCategory(category)

                }
                return category
            }

            createCategory(data)

        } catch (error) {
            console.error(error.message)
        }
    }
}

dataDownloaderCategory().catch(error => console.error(error));