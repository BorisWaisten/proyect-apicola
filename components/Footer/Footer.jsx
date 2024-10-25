import { useLanguage } from "@/context/LanguageContext";
export default function Footer({footer}) {
    const {language,toggleLanguage} = useLanguage();
    return (
        <footer>
            <div className="bg-gray-800 text-white py-4 text-center grid grid-flow-row">
                <div>
                    <p>{footer[language].description}</p>
                </div>
            </div>
        </footer>
    );
}