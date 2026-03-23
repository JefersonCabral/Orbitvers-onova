# Build stage
FROM node:18-alpine as build-stage

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application with verbose output
RUN set -e && \
    echo "Starting build..." && \
    npm run build && \
    echo "Build completed. Checking output..." && \
    ls -la /app/ && \
    echo "--- Checking dist directory ---" && \
    ls -la /app/dist/ && \
    echo "Build verification successful!"

# Production stage
FROM nginx:alpine

# Copy built application
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create non-root user
RUN addgroup -g 1001 -S nginx || true
RUN adduser -S nginx -u 1001 || true

# Change ownership
RUN chown -R nginx:nginx /usr/share/nginx/html
RUN chown -R nginx:nginx /var/cache/nginx
RUN chown -R nginx:nginx /var/log/nginx
RUN chown -R nginx:nginx /etc/nginx/conf.d
RUN mkdir -p /run && chown -R nginx:nginx /run

# Switch to non-root user
USER nginx

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=10s --retries=5 \
  CMD curl -f http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

