// service-manager.ts

// This module manages multiple revenue-generating services and tracks usage.

class ServiceManager {
    private services: Record<string, { usage: number; revenue: number; }>; 

    constructor() {
        this.services = {};
    }

    // Add a new service to the manager
    addService(name: string) {
        if (!this.services[name]) {
            this.services[name] = { usage: 0, revenue: 0 };
        }
    }

    // Track usage for a service
    trackUsage(name: string, amount: number) {
        if (this.services[name]) {
            this.services[name].usage += amount;
        }
    }

    // Record revenue for a service
    recordRevenue(name: string, amount: number) {
        if (this.services[name]) {
            this.services[name].revenue += amount;
        }
    }

    // Get usage data for a service
    getUsage(name: string): number {
        return this.services[name] ? this.services[name].usage : 0;
    }

    // Get revenue data for a service
    getRevenue(name: string): number {
        return this.services[name] ? this.services[name].revenue : 0;
    }
}

// Example usage:
const serviceManager = new ServiceManager();
serviceManager.addService('Subscription');
serviceManager.trackUsage('Subscription', 1);
serviceManager.recordRevenue('Subscription', 99.99);

export default ServiceManager;
