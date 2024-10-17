import Card from '../components/contactoComponet/Card';
import Header from '../components/contactoComponet/Header';
import Footer from '../components/sobreComponents/Footer';

export default function Contactos() {
    return (
        <div className="w-full min-h-screen flex flex-col bg-purple-100">
            <Header />
            <div className="flex-grow flex justify-center items-center">
                <Card />
            </div>
            <Footer />
        </div>
    );
}