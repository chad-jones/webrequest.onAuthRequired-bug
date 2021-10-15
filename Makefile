VERSION ?= v1.0.0

run:
	docker run -it --rm --name forwardproxy -p 3128:3128 -v $(shell pwd)/Caddyfile:/etc/caddy/Caddyfile crashcode/forwardproxy:$(VERSION)

stop:
	docker stop forwardproxy

log:
	docker logs -f forwardproxy

curl:
	curl -s -o /dev/null https://api.github.com --proxy http://127.0.0.1:3128 -U chrome:onAuthEntered -v

test:
	open "https://www.test-cors.org/#?client_method=OPTIONS&client_credentials=false&server_url=https%3A%2F%2Fapi.github.com&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote"
