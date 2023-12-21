import { services } from '../constants';
import ServicesCard from './ServicesCard';

const Services = () => {
    return (
        <section
            id="services"
            className="max-container flex justify-between max-lg:flex-wrap max-sm:flex-col  gap-9">
            {services.map((service) => (
                <ServicesCard key={service.label} service={service} />
            ))}
        </section>
    );
};

export default Services;
