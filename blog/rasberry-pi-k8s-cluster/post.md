---
slug: rasberry-pi-k8s-cluster
title: Building a Raspberry Pi k8s Cluster
authors: robert
tags: [raspberry-pi, kubernetes]
---

# Building a Raspberry Pi Kubernetes Cluster

I built a Kubernetes cluster using 2 Raspberry Pi 4s and a Mac Mini. This blog is hosted on that cluster.

I wanted to see if I could set up my own Kubernetes cluster with compute lying around my house and that which I could buy myself. The constraint was that I couldn't use any cloud services, not even for networking so I'd have to find a way to expose the cluster myself. I wanted to see if I could do it all myself. I bought a couple of Raspberry Pi 4s and had an unused Mac Mini lying around. I thought it would be a fun project to try to set up a Kubernetes cluster with them.

 I had a couple of goals in mind:
- I wanted to learn more about Kubernetes/networking/containers etc.
- I also wanted to build a fault-tolerant cluster that I could use for my future projects like a personal website, a blog, applications I hack together etc.
