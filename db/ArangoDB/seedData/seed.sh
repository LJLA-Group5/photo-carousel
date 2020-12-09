arangoimport --file "/Users/lucychen/Hack Reactor/photo-carousel-service/db/ArangoDB/data/arangoUsersData.csv" --type csv --collection "users" --server.database "airbnb";

arangoimport --file "/Users/lucychen/Hack Reactor/photo-carousel-service/db/ArangoDB/data/arangoListingsData.csv" --type csv --collection "listings" --server.database "airbnb";

arangoimport --file "/Users/lucychen/Hack Reactor/photo-carousel-service/db/ArangoDB/data/arangoUserListsData.csv" --type csv --collection "userLists" --server.database "airbnb";

arangoimport --file "/Users/lucychen/Hack Reactor/photo-carousel-service/db/ArangoDB/data/arangoEdgeFromUsersData.csv" --type csv --collection "edgeFromUsers" --server.database "airbnb";

arangoimport --file "/Users/lucychen/Hack Reactor/photo-carousel-service/db/ArangoDB/data/arangoEdgeFromUserListsData.csv" --type csv --collection "edgeFromUserLists" --server.database "airbnb";