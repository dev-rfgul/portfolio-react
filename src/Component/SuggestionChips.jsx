import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";

const SuggestionChips = ({ suggestions = [], disabled = false, onSelect, resetTrigger }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (resetTrigger === 0) {
            setActiveIndex(0);
        }
    }, [resetTrigger]);

    const visibleSuggestions = useMemo(() => {
        if (!suggestions.length || activeIndex >= suggestions.length) {
            return [];
        }
        const upperBound = Math.min(activeIndex + 3, suggestions.length);
        return suggestions.slice(activeIndex, upperBound);
    }, [activeIndex, suggestions]);

    if (!visibleSuggestions.length) {
        return null;
    }

    const handleChipClick = (absoluteIndex) => {
        if (disabled) {
            return;
        }
        const selectedSuggestion = suggestions[absoluteIndex];
        if (!selectedSuggestion) {
            return;
        }
        onSelect(selectedSuggestion.prompt);
        setActiveIndex(Math.min(absoluteIndex + 1, suggestions.length));
    };

    return (
        <div className="px-3 sm:px-4 py-3 bg-white/80 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 mb-2">Suggested questions</p>
            <div className="flex flex-wrap gap-2">
                {visibleSuggestions.map((item, idx) => {
                    const absoluteIndex = activeIndex + idx;
                    return (
                        <button
                            key={item.id}
                            type="button"
                            disabled={disabled}
                            className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-300 text-xs sm:text-sm text-gray-700 bg-white hover:bg-blue-50 hover:border-blue-400 transition-all duration-200 disabled:opacity-50 disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400"
                            onClick={() => handleChipClick(absoluteIndex)}
                        >
                            <span className="font-medium whitespace-nowrap">{item.label}</span>
                            <FiArrowRight className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

SuggestionChips.propTypes = {
    suggestions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            prompt: PropTypes.string.isRequired,
        })
    ),
    disabled: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    resetTrigger: PropTypes.number.isRequired,
};

export default SuggestionChips;
