export default function Card() {
    return (
        <div className="w-[40%] h-auto bg-white rounded-lg shadow-lg p-8 z-40 -mt-6">
            <form>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold font-roboto mb-2">Email :</label>
                    <input type="email" name="email" className="w-full h-[40px] pl-4 border border-gray-300 rounded" placeholder="você@exemplo.com" />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-bold font-roboto mb-2">Assunto :</label>
                    <input type="text" name="subject" className="w-full h-[40px] pl-4 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-bold font-roboto mb-2">Como podemos ajudar ?</label>
                    <textarea name="message" rows="4" className="w-full pl-4 border border-gray-300 rounded" placeholder="Messagem"></textarea>
                </div>
                <button type="submit" className="w-full bg-purple-900 text-white font-bold py-2 rounded hover:bg-purple-700">SEND</button>
            </form>
            <div className="text-center mt-4">
                <a href="#" className="text-sm text-gray-500 underline">Privacy Policy</a>
            </div>
        </div>
    );
}