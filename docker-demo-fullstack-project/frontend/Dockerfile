# Use an official nginx image
FROM nginx:alpine

# Copy the static files to the nginx html directory
COPY . /usr/share/nginx/html

# Expose the port nginx will run on
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]