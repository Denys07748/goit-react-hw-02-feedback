import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div className={css['button-box']}>
            {options.map(option => 
                <button type='button' onClick={() => onLeaveFeedback(option)}>{option}</button>
            )}
        </div>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.string),
    onIncrBad: PropTypes.func.isRequired,
}