drop table if exists RonaRatings;
drop table if exists RestaurantCategories;
drop table if exists Restaurant;
drop table if exists Profile;
drop table if exists Categories;


create table Categories(
categoryId binary(16) not null,
categoryType varchar(50),
primary key (categoryId)
);

create table Profile(
profileId binary (16),
profileEmail varchar(128),
profilePass varchar(50),
profileUserName varchar(60),
profileActivationToken varchar(128),
unique(profileEmail),
unique(profileUserName),
primary key(profileId)

);

create table Restaurant(
restaurantId binary (16),
restaurantAddress varchar(128),
restaurantImage varchar(400),
restaurantName varchar(255),
restaurantPhone varchar(20),
restaurantRonaRating int(255),
restaurantServices varchar(128),
restaurantYelpRating decimal (2,1),
restaurantZip varchar(5),
primary key (restaurantId)
);

create table RestaurantCategories(
restaurantCategoriesCategoryId binary (16) ,
restaurantCategoriesRestaurantId binary (16),
foreign key (restaurantCategoriesCategoryId) references Categories(categoryId),
foreign key (restaurantCategoriesRestaurantId) references Restaurant(restaurantId)
);

create table RestaurantRonaRating(
restaurantRonaRatingRestaurantId binary(16),
restaurantRonaRatingCumulativeScore int(6),
restaurantRonaRatingTotalScore int (6)
);

create table RonaRatings(
ronaRatingsProfileId binary(16),
ronaRatingsRestaurantId binary(16),
ronaRatingsCumulativeScore int(6) not null,
ronaRatingsMaskWearing int(2) not null,
ronaRatingsSafeTakeOut int(2) not null,
ronaRatingsSixFootRule int(2) not null,
ronaRatingsTotalScore int (6) not null,
foreign key (ronaRatingsProfileId) references Profile (profileId),
foreign key (ronaRatingsRestaurantId) references Restaurant (restaurantId)
);

