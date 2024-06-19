.PHONY: build push delete deploy

TAG="robertcronin/robertcronin.com:latest"

all: build push deploy

build:
	docker build --target production -t $(TAG) .

push:
	docker push $(TAG)

delete:
	kubectl delete -f k8s/deployment.yaml
	# sudo microk8s ctr images list | grep robertcronin.com | awk '{print $1}' | xargs -I {} sudo microk8s ctr images rm {}

deploy:
	kubectl apply -f k8s/deployment.yaml

run:
	docker run -p 8080:80 -it $(TAG)
