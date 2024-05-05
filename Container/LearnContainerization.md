# Journal On Learning Containerization
## 2024/5/2
I am able to build a very simple container, build it, deploy it using kubernetes and make it public on the internet. What's the next step on learning?
### Application/Web App Development
  - Make this app really do something: render some real page (web app development)
### DevOps
  - What are the problems I encountered during learning? CNI. The CNI I used, flannel, has a requirement on the pod networking. 
    - Should I try to learn why that is needed
    - Should I try to build a customized CNI when lauching a cluster?
    - Should I try to understand how kubernetes are interacting CNI and how does it change the underlying network on linux system?
  - Currently there is only one node in the cluster. Should I try to load balancing it?
    - Should I try to create my own load balancer?
    - How does kubernetes do load balancing? Is it on the control plane?
### More Basics
  - Read https://iximiuz.com/en/posts/container-learning-path/
  - From the suggestion from above link, the first thing I should learn is Container runtimes - Linux namespaces and cgroups.

With these, the tentative next steps are
  - Learn linux namespace and cgroups
  - Learn what flannel is doing
  - Create a CNI that does minimal work
  - Fork kubernetes and modify its network related code

## 2024/5/3
* Read https://www.kernel.org/doc/html/latest/admin-guide/cgroup-v2.html
* Read https://man.archlinux.org/man/namespaces.7.en

## 2024/5/4
Done reading above