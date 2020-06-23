rebuild:
	mkdir -p output 
	docker-compose down
	docker-compose build
	docker-compose up
enter:
	docker-compose exec screenshot bash

.PHONY: rebuild enter
