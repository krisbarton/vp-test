import top from '../../assets/top.svg';

interface ScrollToTopProps {
    onChange: () => void
}

export default function ScrollToTop({onChange} : ScrollToTopProps){
    return (
        <button onClick={onChange} className="fixed z-10 bottom-8 right-8 text-gray-700 text-center scroll-btn">
            <img src={top} alt="Return to the top of the page icon" />
            <span>Top</span>
        </button>
    )
}