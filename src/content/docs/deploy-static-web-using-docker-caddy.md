---
layout: "../../layouts/PostLayout.astro"
title: Deploying a Static Website on a Cloud Server using Docker & Caddy
description: Representing the frequency or distribution of a set of discrete data points in different categories.
tags: ["Server", "Docker", Caddy]
slug: deploy-static-web-using-docker-caddy
---

When creating a simple static website with only HTML and CSS files on our computer, we can view the website in a browser by **copying and pasting** the HTML file's address (usually `index.html`) into the URL bar. We can also **drag and drop** the HTML file into the browser, which allows us to immediately see the website's content.

However, if we want others to be able to view our website on their laptops or smartphones, they cannot simply perform the same actions of **copying and pasting** the HTML file's address or **dragging and dropping** the file into the browser. Instead, people typically enter the website's URL/domain in the browser's URL bar. This is because others do not have access to our HTML and CSS files directly. These files are stored on a server.

To make our website accessible to others on their devices, we need to prepare a few things. In this tutorial, I will explain the steps required to make our website accessible to everyone through their own browser on their respective devices.

1. SSH to your cloud server by executing one of the following commands in the terminal:
   
   ```bash
   # using an IP address
   ssh <username>@<public IP address>
   
   # using a domain
   ssh <username>@<your.domain.com>
   ```
   
   If your domain is not yet configured to the public IP address of your server, you won't be able to SSH using your domain. In such cases, you can SSH using the public IP address. For example, if your public IP address is `172.217.22.1`, and your username on the server is `john`, the SSH command will be `ssh john@172.217.22.1`. Later, when your domain (e.g., `yourdomain.com`) is configured to point to your server's public IP address, you can SSH using your domain: `ssh john@yourdomain.com`.

2. If Docker is not already installed on your cloud server, you need to install it by following the tutorial in this article: [*Install Docker Engine on Ubuntu*](https://docs.docker.com/engine/install/ubuntu/)


3. Install `Caddy` using Docker by adjusting the `docker-compose.yml` file as shown below:
   - Change `<version>` to the desired version of Caddy, for example `caddy:latest`.
   - Update the value of `$PWD` with the relative path of the `Caddyfile` and `site` directory on your server from the root directory where the `docker-compose.yml` file exists. If these files are in the same directory as `docker-compose.yml`, the value of `$PWD` will be `./`. Therefore, the complete path for the two volumes will be `./Caddyfile` and `./site`.
   
   ```yaml
   version: "3.7"
   
   services:
     caddy:
       image: caddy:<version>
       restart: unless-stopped
       ports:
         - "80:80"
         - "443:443"
         - "443:443/udp"
       volumes:
         - $PWD/Caddyfile:/etc/caddy/Caddyfile
         - $PWD/site:/srv
         - caddy_data:/data
         - caddy_config:/config
   
   volumes:
     caddy_data:
     caddy_config:
   ```

4. If a file named `Caddyfile` (without any file extension) doesn't exist on your server, create it in the same directory as the `docker-compose.yml` file by running the following command in your SSH terminal: `touch Caddyfile`.
   
   Then, update the content of the `Caddyfile` using a text editor like Vim by running this command in your SSH terminal: `vi Caddyfile`. Below is the minimal configuration to serve a static website:
   
   - **`yourdomain.com`**: This is the hostname or domain name for which you're configuring the server block. Replace it with your actual domain.
   - **`root * /path/to/your/website`**: This directive sets the root directory where your website's files are located. Replace **`/path/to/your/website`** with the actual path to your website's files within the Caddy Docker container.
   - **`file_server`**: This directive enables Caddy's built-in file server, allowing it to serve the static files present in the specified root directory.
   
   ```
   yourdomain.com {
       root * /path/to/your/website
       file_server
   }
   ```

5. Adjust the content of the `Caddyfile` above to match your configuration in `docker-compose.yml`:
   - Based on the default configuration in the `docker-compose.yml` above, the root directory for your website files is `/srv` within the Caddy Docker container. Replace `/path/to/your/website` with `/srv`.
   - If your domain name is `google.com`, replace `[yourdomain.com](http://yourdomain.com)` with `google.com`.
   
   Here is the revised version of the `Caddyfile`:
   
   ```
   google.com {
       root * /srv
       file_server
   }
   ```

6. Finally, store the static files of your website in a directory on the server, which will later be mounted to the `/srv` directory within the Caddy Docker container. Based on the `docker-compose.yml` file above, the directory for your website files is `./site`.
   
   The minimum requirement for a static website is an `index.html` file. You can also store other supporting files such as CSS, JavaScript, or images in the `./site` directory.
   
   If you're working with a React application, you can run npm run build on your local machine and upload the resulting files (usually stored in the ./dist or ./build directory) to the ./site directory on your server.