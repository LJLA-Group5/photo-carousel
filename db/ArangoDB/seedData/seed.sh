# arangoimport --file "/Users/lucychen/Hack Reactor/photo-carousel-service/db/ArangoDB/data/arangoUsersData.csv" --type csv --collection "users" --server.database "airbnb";

# arangoimport --file "/Users/lucychen/Hack Reactor/photo-carousel-service/db/ArangoDB/data/arangoListingsData.json" --type json --collection "listings" --create-collection true --batch-size 33554432 --progress true --threads 4 --server.database "airbnb";

# arangoimport --file "/Users/lucychen/Hack Reactor/photo-carousel-service/db/ArangoDB/data/arangoUserListsData.csv" --type csv --collection "userLists" --server.database "airbnb";

# arangoimport --file "/Users/lucychen/Hack Reactor/photo-carousel-service/db/ArangoDB/data/arangoEdgeFromUsersData.json" --type json --collection "edgeFromUsers" --server.database "airbnb";

# arangoimport --file "/Users/lucychen/Hack Reactor/photo-carousel-service/db/ArangoDB/data/arangoEdgeFromUserListsData.json" --type json --collection "edgeFromUserLists" --server.database "airbnb";
