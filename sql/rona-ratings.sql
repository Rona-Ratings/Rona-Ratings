drop table if exists restaurantRonaRating;
drop table if exists ronaRatings;
drop table if exists restaurantCategory;
drop table if exists restaurant;
drop table if exists profile;
drop table if exists category;


create table category(
categoryId binary(16) not null,
categoryType varchar(50),
primary key (categoryId)
);


create table profile(
profileId binary (16),
profileEmail varchar(128),
profilePass varchar(50),
profileUserName varchar(60),
profileActivationToken varchar(128),
unique(profileEmail),
unique(profileUserName),
primary key(profileId)
);


create table restaurant(
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

create table restaurantCategory(
restaurantCategoriesCategoryId binary (16) ,
restaurantCategoriesRestaurantId binary (16),
foreign key (restaurantCategoriesCategoryId) references category(categoryId),
foreign key (restaurantCategoriesRestaurantId) references restaurant(restaurantId)
);

create table restaurantRonaRating(
restaurantRonaRatingRestaurantId binary(16),
restaurantRonaRatingCumulativeScore int(6),
restaurantRonaRatingTotalScore int (6),
foreign key (restaurantRonaRatingRestaurantId) references restaurant(restaurantId)
);

create table ronaRatings(
ronaRatingsProfileId binary(16),
ronaRatingsRestaurantId binary(16),
ronaRatingsCumulativeScore int(6) not null,
ronaRatingsMaskWearing int(2) not null,
ronaRatingsSafeTakeOut int(2) not null,
ronaRatingsSixFootRule int(2) not null,
ronaRatingsTotalScore int (6) not null,
foreign key (ronaRatingsProfileId) references profile (profileId),
foreign key (ronaRatingsRestaurantId) references restaurant (restaurantId)
);

